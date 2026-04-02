"use client";

import { useState, useCallback, useMemo } from "react";
import {
  generateBracket,
  getRoundLabel,
  type BracketData,
  type BracketFormat,
} from "../../lib/bracket";
import { downloadBracketPDF } from "../../lib/pdf-export";
import {
  FREE_LIMITS,
  canDownload,
  incrementDownload,
  getDownloadCount,
} from "../../lib/free-tier";
import Link from "next/link";

const PRESETS = [4, 8, 16, 32, 64];

export default function EditorPage() {
  const [teamInput, setTeamInput] = useState("");
  const [title, setTitle] = useState("My Tournament");
  const [format, setFormat] = useState<BracketFormat>("single");
  const [bracket, setBracket] = useState<BracketData | null>(null);
  const [showUpgrade, setShowUpgrade] = useState(false);

  const teams = useMemo(() => {
    return teamInput
      .split("\n")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
  }, [teamInput]);

  const teamCount = teams.length;
  const isOverLimit = teamCount > FREE_LIMITS.maxTeams;
  const isProFormat = !FREE_LIMITS.allowedFormats.includes(format);

  const handlePreset = useCallback(
    (count: number) => {
      const existing = teamInput
        .split("\n")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);
      const lines: string[] = [];
      for (let i = 0; i < count; i++) {
        lines.push(existing[i] || `Team ${i + 1}`);
      }
      setTeamInput(lines.join("\n"));
    },
    [teamInput]
  );

  const handleGenerate = useCallback(() => {
    if (teams.length < 2) return;
    const effectiveTeams = isOverLimit
      ? teams.slice(0, FREE_LIMITS.maxTeams)
      : teams;
    const effectiveFormat = isProFormat ? "single" : format;
    const result = generateBracket(effectiveTeams, effectiveFormat, title);
    setBracket(result);
  }, [teams, format, title, isOverLimit, isProFormat]);

  const handleDownload = useCallback(() => {
    if (!bracket) return;
    if (!canDownload()) {
      setShowUpgrade(true);
      return;
    }
    incrementDownload();
    downloadBracketPDF(bracket, true);
  }, [bracket]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-black dark:text-white"
          >
            Tournament Bracket Maker
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
          >
            Upgrade to Pro
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Tournament Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Tournament name"
              />
            </div>

            {/* Team Presets */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Quick Presets
              </label>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((n) => (
                  <button
                    key={n}
                    onClick={() => handlePreset(n)}
                    className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                      n > FREE_LIMITS.maxTeams
                        ? "border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600"
                        : "border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-emerald-500 hover:text-emerald-600"
                    }`}
                  >
                    {n} teams{n > FREE_LIMITS.maxTeams ? " (Pro)" : ""}
                  </button>
                ))}
              </div>
            </div>

            {/* Team Input */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                Teams/Players{" "}
                <span
                  className={
                    isOverLimit ? "text-red-500" : "text-zinc-400"
                  }
                >
                  ({teamCount}
                  {isOverLimit
                    ? ` / ${FREE_LIMITS.maxTeams} free limit`
                    : ""}
                  )
                </span>
              </label>
              <textarea
                value={teamInput}
                onChange={(e) => setTeamInput(e.target.value)}
                rows={10}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                placeholder={"Enter team names, one per line\n\nExample:\nTeam Alpha\nTeam Beta\nTeam Gamma\nTeam Delta"}
              />
              {isOverLimit && (
                <p className="mt-1 text-xs text-red-500">
                  Free tier limited to {FREE_LIMITS.maxTeams} teams.{" "}
                  <Link href="/pricing" className="underline">
                    Upgrade to Pro
                  </Link>{" "}
                  for unlimited teams.
                </p>
              )}
            </div>

            {/* Format */}
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Format
              </label>
              <div className="space-y-2">
                {(
                  [
                    { value: "single", label: "Single Elimination", pro: false },
                    { value: "double", label: "Double Elimination", pro: true },
                    { value: "round-robin", label: "Round Robin", pro: true },
                  ] as { value: BracketFormat; label: string; pro: boolean }[]
                ).map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setFormat(f.value)}
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm font-medium text-left flex items-center justify-between transition-colors ${
                      format === f.value
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                        : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400"
                    }`}
                  >
                    {f.label}
                    {f.pro && (
                      <span className="rounded bg-zinc-200 dark:bg-zinc-700 px-2 py-0.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                        PRO
                      </span>
                    )}
                  </button>
                ))}
              </div>
              {isProFormat && (
                <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
                  This format requires Pro.{" "}
                  <Link href="/pricing" className="underline">
                    Upgrade
                  </Link>{" "}
                  to unlock all formats.
                </p>
              )}
            </div>

            <button
              onClick={handleGenerate}
              disabled={teamCount < 2}
              className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Generate Bracket
            </button>

            {bracket && (
              <button
                onClick={handleDownload}
                className="w-full rounded-lg border-2 border-emerald-600 px-4 py-3 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors"
              >
                Download PDF ({FREE_LIMITS.maxDownloads - getDownloadCount()}{" "}
                free remaining)
              </button>
            )}
          </div>

          {/* Bracket Preview */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 min-h-[500px] flex flex-col overflow-x-auto">
            {!bracket ? (
              <div className="flex-1 flex items-center justify-center text-zinc-400">
                <div className="text-center">
                  <svg
                    className="mx-auto h-16 w-16 text-zinc-300 dark:text-zinc-700 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.375 10.5H12m0 0V5.625m0 4.875h.375A3.375 3.375 0 0015.75 14.25v4.5m-3.75-9V5.625m0 0A2.625 2.625 0 1014.625 3 2.625 2.625 0 0012 5.625z"
                    />
                  </svg>
                  <p className="text-lg font-medium">
                    Enter teams and click Generate
                  </p>
                  <p className="text-sm mt-1">
                    Your bracket preview will appear here
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-center mb-4 text-zinc-900 dark:text-zinc-100">
                  {bracket.title}
                </h3>
                <BracketSVG bracket={bracket} />
              </>
            )}
          </div>
        </div>

        {showUpgrade && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 max-w-md mx-4 shadow-xl">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Download Limit Reached
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                You&apos;ve used all {FREE_LIMITS.maxDownloads} free downloads
                today. Upgrade to Pro for unlimited downloads, no watermarks,
                more teams, and all formats.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/pricing"
                  className="flex-1 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white text-center hover:bg-emerald-700 transition-colors"
                >
                  View Plans
                </Link>
                <button
                  onClick={() => setShowUpgrade(false)}
                  className="flex-1 rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function BracketSVG({ bracket }: { bracket: BracketData }) {
  const { rounds } = bracket;
  const totalRounds = rounds.length;
  const firstRoundMatches = rounds[0].length;

  const matchW = 160;
  const matchH = 48;
  const roundGap = 60;
  const roundWidth = matchW + roundGap;
  const svgWidth = totalRounds * roundWidth + 40;
  const baseSpacing = matchH + 16;
  const svgHeight = Math.max(firstRoundMatches * baseSpacing + 60, 300);

  return (
    <div className="overflow-auto flex-1">
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="min-w-[600px] w-full h-auto"
        style={{ maxHeight: "70vh" }}
      >
        {rounds.map((roundMatches, r) => {
          const spacing = svgHeight / roundMatches.length;
          const x = 20 + r * roundWidth;

          return (
            <g key={r}>
              {/* Round label */}
              <text
                x={x + matchW / 2}
                y={16}
                textAnchor="middle"
                className="fill-zinc-400 dark:fill-zinc-600"
                fontSize={11}
                fontWeight={600}
              >
                {getRoundLabel(r, totalRounds)}
              </text>

              {roundMatches.map((match, m) => {
                const y = spacing / 2 - matchH / 2 + m * spacing + 24;

                return (
                  <g key={match.id}>
                    {/* Match background */}
                    <rect
                      x={x}
                      y={y}
                      width={matchW}
                      height={matchH}
                      rx={6}
                      className="fill-zinc-50 dark:fill-zinc-800 stroke-zinc-200 dark:stroke-zinc-700"
                      strokeWidth={1}
                    />
                    {/* Divider */}
                    <line
                      x1={x}
                      y1={y + matchH / 2}
                      x2={x + matchW}
                      y2={y + matchH / 2}
                      className="stroke-zinc-200 dark:stroke-zinc-700"
                      strokeWidth={1}
                    />
                    {/* Seed numbers */}
                    <rect
                      x={x}
                      y={y}
                      width={24}
                      height={matchH / 2}
                      rx={0}
                      className="fill-zinc-100 dark:fill-zinc-700"
                    />
                    <rect
                      x={x}
                      y={y + matchH / 2}
                      width={24}
                      height={matchH / 2}
                      rx={0}
                      className="fill-zinc-100 dark:fill-zinc-700"
                    />
                    <text
                      x={x + 12}
                      y={y + matchH / 4 + 4}
                      textAnchor="middle"
                      fontSize={9}
                      className="fill-zinc-400 dark:fill-zinc-500"
                    >
                      {r === 0 ? m * 2 + 1 : ""}
                    </text>
                    <text
                      x={x + 12}
                      y={y + (matchH * 3) / 4 + 4}
                      textAnchor="middle"
                      fontSize={9}
                      className="fill-zinc-400 dark:fill-zinc-500"
                    >
                      {r === 0 ? m * 2 + 2 : ""}
                    </text>
                    {/* Team names */}
                    <text
                      x={x + 30}
                      y={y + matchH / 4 + 4}
                      fontSize={11}
                      className="fill-zinc-800 dark:fill-zinc-200"
                    >
                      {match.team1 || (r === 0 ? "BYE" : "TBD")}
                    </text>
                    <text
                      x={x + 30}
                      y={y + (matchH * 3) / 4 + 4}
                      fontSize={11}
                      className="fill-zinc-800 dark:fill-zinc-200"
                    >
                      {match.team2 || (r === 0 ? "BYE" : "TBD")}
                    </text>

                    {/* Connector to next round */}
                    {r < totalRounds - 1 && (
                      <ConnectorLine
                        x1={x + matchW}
                        y1={y + matchH / 2}
                        matchIndex={m}
                        nextRoundX={x + roundWidth}
                        nextRoundSpacing={svgHeight / rounds[r + 1].length}
                        matchH={matchH}
                      />
                    )}
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function ConnectorLine({
  x1,
  y1,
  matchIndex,
  nextRoundX,
  nextRoundSpacing,
  matchH,
}: {
  x1: number;
  y1: number;
  matchIndex: number;
  nextRoundX: number;
  nextRoundSpacing: number;
  matchH: number;
}) {
  const nextMatchIdx = Math.floor(matchIndex / 2);
  const nextY =
    nextRoundSpacing / 2 - matchH / 2 + nextMatchIdx * nextRoundSpacing + 24;
  const nextMidY = nextY + matchH / 2;
  const midX = x1 + (nextRoundX - x1) / 2;

  return (
    <path
      d={`M ${x1} ${y1} H ${midX} V ${nextMidY} H ${nextRoundX}`}
      fill="none"
      className="stroke-zinc-300 dark:stroke-zinc-600"
      strokeWidth={1.5}
    />
  );
}
