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

export function generateBracket(
  teams: string[],
  format: BracketFormat,
  title: string
): BracketData {
  const rounds = generateSingleElimination(teams);
  return { teams, format, title, rounds };
}
