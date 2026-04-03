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

export function generateRoundRobin(teams: string[]): Match[][] {
  if (teams.length < 2) return [[]];

  const n = teams.length;
  const rounds: Match[][] = [];
  const isOdd = n % 2 === 1;
  const numTeams = isOdd ? n + 1 : n;
  const numRounds = numTeams - 1;
  const matchesPerRound = numTeams / 2;

  // Create indexed list
  let schedule = teams.slice();
  if (isOdd) schedule.push(""); // BYE

  let matchId = 0;

  for (let round = 0; round < numRounds; round++) {
    const roundMatches: Match[] = [];
    const rotation = [...schedule];

    for (let i = 0; i < matchesPerRound; i++) {
      const t1 = rotation[i];
      const t2 = rotation[numTeams - 1 - i];
      roundMatches.push({
        id: matchId++,
        round,
        position: i,
        team1: t1 || null,
        team2: t2 || null,
        winner: null,
      });
    }

    rounds.push(roundMatches);

    // Rotate for next round (keep first fixed)
    if (round < numRounds - 1) {
      const first = schedule[0];
      const last = schedule.pop()!;
      schedule.splice(1, 0, last);
    }
  }

  return rounds;
}

export function generateDoubleElimination(teams: string[]): Match[][] {
  const size = nextPowerOf2(teams.length);
  const totalRounds = Math.log2(size);
  const rounds: Match[][] = [];

  // Pad teams
  const paddedTeams = [...teams];
  while (paddedTeams.length < size) {
    paddedTeams.push("");
  }

  // Seed teams
  const seeded: [string, string][] = [];
  for (let i = 0; i < size / 2; i++) {
    seeded.push([paddedTeams[i], paddedTeams[size - 1 - i]]);
  }

  // Winners bracket first round
  let matchId = 0;
  const winnersFirstRound: Match[] = seeded.map(([t1, t2], idx) => {
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
  rounds.push(winnersFirstRound);

  // Winners bracket subsequent rounds
  let winnersRounds = [winnersFirstRound];
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
    rounds.push(currentRound);
  }

  // Losers bracket - simplified version
  // Track teams eliminated from winners bracket
  const losersFirstRound: Match[] = [];
  for (let i = 0; i < winnersFirstRound.length; i += 2) {
    const loser1 = winnersFirstRound[i].team1 === winnersFirstRound[i].winner ? winnersFirstRound[i].team2 : winnersFirstRound[i].team1;
    const loser2 = winnersFirstRound[i + 1]?.team1 === winnersFirstRound[i + 1]?.winner ? winnersFirstRound[i + 1]?.team2 : winnersFirstRound[i + 1]?.team1;

    if (loser1) {
      losersFirstRound.push({
        id: matchId++,
        round: 0,
        position: losersFirstRound.length,
        team1: loser1,
        team2: loser2 || null,
        winner: null,
      });
    }
  }

  if (losersFirstRound.length > 0) {
    rounds.push(losersFirstRound);
  }

  // Grand final
  const winnersChamp = winnersRounds[winnersRounds.length - 1][0]?.winner || null;
  rounds.push([
    {
      id: matchId++,
      round: totalRounds,
      position: 0,
      team1: winnersChamp,
      team2: null, // Losers bracket winner
      winner: null,
    },
  ]);

  return rounds;
}

export function generateBracket(
  teams: string[],
  format: BracketFormat,
  title: string
): BracketData {
  let rounds: Match[][];

  switch (format) {
    case "double":
      rounds = generateDoubleElimination(teams);
      break;
    case "round-robin":
      rounds = generateRoundRobin(teams);
      break;
    case "single":
    default:
      rounds = generateSingleElimination(teams);
  }

  return { teams, format, title, rounds };
}
