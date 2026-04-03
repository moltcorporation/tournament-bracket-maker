export type BracketFormat = "single" | "double" | "round-robin";

export interface Match {
  id: number;
  round: number;
  position: number;
  team1: string | null;
  team2: string | null;
  winner: string | null;
}

export interface BracketData {
  teams: string[];
  format: BracketFormat;
  title: string;
  rounds: Match[][];
}

function nextPowerOf2(n: number): number {
  let p = 1;
  while (p < n) p *= 2;
  return p;
}

export function getRoundLabel(round: number, totalRounds: number): string {
  const remaining = totalRounds - round;
  if (remaining === 0) return "Finals";
  if (remaining === 1) return "Semi-Finals";
  if (remaining === 2) return "Quarter-Finals";
  return `Round ${round + 1}`;
}

export function generateSingleElimination(teams: string[]): Match[][] {
  const size = nextPowerOf2(teams.length);
  const totalRounds = Math.log2(size);
  const rounds: Match[][] = [];

  // Pad with BYE entries
  const paddedTeams = [...teams];
  while (paddedTeams.length < size) {
    paddedTeams.push("");
  }

  // Seed: 1 vs N, 2 vs N-1, etc.
  const seeded: [string, string][] = [];
  for (let i = 0; i < size / 2; i++) {
    seeded.push([paddedTeams[i], paddedTeams[size - 1 - i]]);
  }

  // First round
  let matchId = 0;
  const firstRound: Match[] = seeded.map(([t1, t2], idx) => {
    const winner = t1 === "" ? t2 : t2 === "" ? t1 : null;
    return {
      id: matchId++,
      round: 0,
      position: idx,
      team1: t1 || null,
      team2: t2 || null,
      winner,
    };
  });
  rounds.push(firstRound);

  // Subsequent rounds
  for (let r = 1; r < totalRounds; r++) {
    const prevRound = rounds[r - 1];
    const currentRound: Match[] = [];
    for (let i = 0; i < prevRound.length; i += 2) {
      const t1 = prevRound[i].winner;
      const t2 = prevRound[i + 1]?.winner ?? null;
      currentRound.push({
        id: matchId++,
        round: r,
        position: currentRound.length,
        team1: t1,
        team2: t2,
        winner: null,
      });
    }
    rounds.push(currentRound);
  }

  return rounds;
}

export function generateDoubleElimination(teams: string[]): Match[][] {
  // For a simplified double elimination, we'll create:
  // 1. Winners bracket (standard single elimination)
  // 2. Losers bracket (single elimination of losers)
  // 3. Grand finals

  const size = nextPowerOf2(teams.length);
  const totalRounds = Math.log2(size);

  // Pad with BYE entries
  const paddedTeams = [...teams];
  while (paddedTeams.length < size) {
    paddedTeams.push("");
  }

  // Seed teams
  const seeded: [string, string][] = [];
  for (let i = 0; i < size / 2; i++) {
    seeded.push([paddedTeams[i], paddedTeams[size - 1 - i]]);
  }

  const rounds: Match[][] = [];
  let matchId = 0;

  // ===== WINNERS BRACKET =====
  const winnersRounds: Match[][] = [];

  let firstWinnersRound: Match[] = seeded.map(([t1, t2], idx) => {
    const winner = t1 === "" ? t2 : t2 === "" ? t1 : null;
    return {
      id: matchId++,
      round: 0,
      position: idx,
      team1: t1 || null,
      team2: t2 || null,
      winner,
    };
  });
  winnersRounds.push(firstWinnersRound);

  // Build rest of winners bracket
  for (let r = 1; r < totalRounds; r++) {
    const prevRound = winnersRounds[r - 1];
    const currentRound: Match[] = [];
    for (let i = 0; i < prevRound.length; i += 2) {
      const t1 = prevRound[i].winner;
      const t2 = prevRound[i + 1]?.winner ?? null;
      currentRound.push({
        id: matchId++,
        round: r,
        position: currentRound.length,
        team1: t1,
        team2: t2,
        winner: null,
      });
    }
    winnersRounds.push(currentRound);
  }

  // ===== LOSERS BRACKET =====
  // Collect all losers from winners bracket
  const allLosers: (string | null)[] = [];
  for (const round of winnersRounds) {
    for (const match of round) {
      if (match.team1 && match.winner !== match.team1) {
        allLosers.push(match.team1);
      } else if (match.team2 && match.winner !== match.team2) {
        allLosers.push(match.team2);
      }
    }
  }

  // Create losers bracket from all losers
  const losersRounds: Match[][] = [];
  let losersTeams = [...allLosers];

  for (let r = 0; r < Math.ceil(Math.log2(Math.max(losersTeams.length, 1))); r++) {
    const losersRound: Match[] = [];
    for (let i = 0; i < losersTeams.length; i += 2) {
      losersRound.push({
        id: matchId++,
        round: r,
        position: losersRound.length,
        team1: losersTeams[i] || null,
        team2: losersTeams[i + 1] || null,
        winner: null,
      });
    }
    losersRounds.push(losersRound);

    // Advance losers bracket
    losersTeams = losersRound.map((m) => m.winner);
  }

  // ===== GRAND FINALS =====
  const winnersChamp = winnersRounds[winnersRounds.length - 1]?.[0];
  const losersChamp = losersRounds[losersRounds.length - 1]?.[0];

  const grandFinals: Match[] = [
    {
      id: matchId++,
      round: 0,
      position: 0,
      team1: winnersChamp?.winner || null,
      team2: losersChamp?.winner || null,
      winner: null,
    },
  ];

  // Combine all rounds
  rounds.push(...winnersRounds);
  rounds.push(...losersRounds);
  rounds.push(grandFinals);

  return rounds;
}

export function generateRoundRobin(teams: string[]): Match[][] {
  const rounds: Match[][] = [];
  let matchId = 0;

  // Generate all matches (every team plays every other team once)
  const matches: Match[] = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      matches.push({
        id: matchId++,
        round: 0,
        position: matches.length,
        team1: teams[i] || null,
        team2: teams[j] || null,
        winner: null,
      });
    }
  }

  // Organize matches into rounds (simple scheduling)
  // Each round, match teams that haven't played each other yet
  const matchedPairs = new Set<string>();
  let currentRound = 0;
  let matchIndex = 0;

  while (matchIndex < matches.length) {
    const roundMatches: Match[] = [];
    const teamsInRound = new Set<string>();

    for (let i = matchIndex; i < matches.length; i++) {
      const match = matches[i];
      const pair = `${match.team1}|${match.team2}`;

      if (
        !teamsInRound.has(match.team1!) &&
        !teamsInRound.has(match.team2!) &&
        !matchedPairs.has(pair)
      ) {
        roundMatches.push({
          ...match,
          round: currentRound,
          position: roundMatches.length,
        });
        teamsInRound.add(match.team1!);
        teamsInRound.add(match.team2!);
        matchedPairs.add(pair);
      }
    }

    if (roundMatches.length === 0) break;
    rounds.push(roundMatches);
    currentRound++;

    // Rebuild matches list for next iteration
    matchIndex = 0;
    const usedMatches = new Set<string>();
    rounds.forEach((r) => {
      r.forEach((m) => {
        usedMatches.add(`${m.team1}|${m.team2}`);
      });
    });
    while (matchIndex < matches.length && usedMatches.has(`${matches[matchIndex].team1}|${matches[matchIndex].team2}`)) {
      matchIndex++;
    }
  }

  return rounds.length > 0 ? rounds : [[]];
}

export function generateBracket(
  teams: string[],
  format: BracketFormat,
  title: string
): BracketData {
  let rounds: Match[][];

  if (format === "double") {
    rounds = generateDoubleElimination(teams);
  } else if (format === "round-robin") {
    rounds = generateRoundRobin(teams);
  } else {
    rounds = generateSingleElimination(teams);
  }

  return { teams, format, title, rounds };
}
