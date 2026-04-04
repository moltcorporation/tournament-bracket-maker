"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import {
  generateBracket,
  getRoundLabel,
  type BracketData,
  type BracketFormat,
  type Match,
} from "../../lib/bracket";
import { downloadBracketPDF } from "../../lib/pdf-export";
import {
  FREE_LIMITS,
  canDownload,
  incrementDownload,
  getDownloadCount,
} from "../../lib/free-tier";
import { isProUser, MONTHLY_LINK, YEARLY_LINK } from "../../lib/pro-access";
import Link from "next/link";

const PRESETS = [4, 8, 16, 32, 64];

export default function EditorPage() {
  const [teamInput, setTeamInput] = useState("");
  const [title, setTitle] = useState("My Tournament");
  const [format, setFormat] = useState<BracketFormat>("single");
  const [bracket, setBracket] = useState<BracketData | null>(null);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    setIsPro(isProUser());
  }, []);

  const teams = useMemo(() => {
    return teamInput
      .split("\n")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
  }, [teamInput]);

  const teamCount = teams.length;
  const isOverLimit = !isPro && teamCount > FREE_LIMITS.maxTeams;
  const isProFormat = !isPro && !FREE_LIMITS.allowedFormats.includes(format);

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
    if (isOverLimit) {
      setShowUpgrade(true);
      return;
    }
    if (isProFormat) {
      setShowUpgrade(true);
      return;
    }
    const result = generateBracket(teams, format, title);
    setBracket(result);
  }, [teams, format, title, isOverLimit, isProFormat]);

  const handleDownload = useCallback(() => {
    if (!bracket) return;
    if (isPro) {
      downloadBracketPDF(bracket, false);
      return;
    }
    if (!canDownload()) {
      setShowUpgrade(true);
      return;
    }
    incrementDownload();
    downloadBracketPDF(bracket, true);
  }, [bracket, isPro]);

  return (
    <div className="min-h-screen bg-[#0b0f1a]">
      <header className="border-b border-amber-500/10 bg-[#0b0f1a]/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-extrabold text-white tracking-tight"
          >
            <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
              <path d="M14 8h20v14a10 10 0 01-20 0V8z" fill="url(#tbg)" />
              <path d="M14 12H8a4 4 0 000 8h2a6 6 0 004-2.2V12z" fill="url(#th)" opacity="0.8" />
              <path d="M34 12h6a4 4 0 010 8h-2a6 6 0 01-4-2.2V12z" fill="url(#th)" opacity="0.8" />
              <rect x="20" y="30" width="8" height="6" rx="1" fill="#b45309" />
              <rect x="16" y="36" width="16" height="4" rx="2" fill="#92400e" />
              <defs>
                <linearGradient id="tbg" x1="24" y1="8" x2="24" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fbbf24" /><stop offset="1" stopColor="#d97706" />
                </linearGradient>
                <linearGradient id="th" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#f59e0b" /><stop offset="1" stopColor="#b45309" />
                </linearGradient>
              </defs>
            </svg>
            Bracket<span className="text-amber-400">Maker</span>
          </Link>
          {isPro ? (
            <span className="rounded-lg bg-amber-900/30 border border-amber-500/30 px-4 py-2 text-sm font-bold text-amber-400 uppercase tracking-wider">
              Pro
            </span>
          ) : (
            <Link
              href="/pricing"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-sm font-bold text-white hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
            >
              Upgrade to Pro
            </Link>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-amber-400/70 uppercase tracking-wider mb-1.5">
                Tournament Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-slate-700/60 bg-[#0d1220] px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                placeholder="Tournament name"
              />
            </div>

            {/* Team Presets */}
            <div>
              <label className="block text-xs font-bold text-amber-400/70 uppercase tracking-wider mb-2">
                Quick Presets
              </label>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map((n) => {
                  const needsPro = !isPro && n > FREE_LIMITS.maxTeams;
                  return (
                    <button
                      key={n}
                      onClick={() => {
                        if (needsPro) {
                          setShowUpgrade(true);
                          return;
                        }
                        handlePreset(n);
                      }}
                      className={`rounded-lg border px-3 py-1.5 text-sm font-bold transition-all flex items-center gap-1.5 ${
                        needsPro
                          ? "border-slate-800/60 text-slate-600"
                          : "border-slate-700/60 text-slate-300 hover:border-amber-500/40 hover:text-amber-400 hover:bg-amber-500/[0.03]"
                      }`}
                    >
                      {needsPro && <LockIcon />}
                      {n} teams{needsPro ? " (Pro)" : ""}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Team Input */}
            <div>
              <label className="block text-xs font-bold text-amber-400/70 uppercase tracking-wider mb-1.5">
                Teams/Players{" "}
                <span
                  className={
                    isOverLimit ? "text-red-400" : "text-slate-500"
                  }
                >
                  ({teamCount}
                  {isOverLimit
                    ? ` / ${FREE_LIMITS.maxTeams} free limit`
                    : ""})
                </span>
              </label>
              <textarea
                value={teamInput}
                onChange={(e) => setTeamInput(e.target.value)}
                rows={10}
                className="w-full rounded-lg border border-slate-700/60 bg-[#0d1220] px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 font-mono transition-colors"
                placeholder={"Enter team names, one per line\n\nExample:\nTeam Alpha\nTeam Beta\nTeam Gamma\nTeam Delta"}
              />
              {isOverLimit && (
                <p className="mt-1 text-xs text-red-400">
                  Free tier limited to {FREE_LIMITS.maxTeams} teams.{" "}
                  <button
                    onClick={() => setShowUpgrade(true)}
                    className="underline"
                  >
                    Upgrade to Pro
                  </button>{" "}
                  for unlimited teams.
                </p>
              )}
            </div>

            {/* Format */}
            <div>
              <label className="block text-xs font-bold text-amber-400/70 uppercase tracking-wider mb-2">
                Format
              </label>
              <div className="space-y-2">
                {(
                  [
                    { value: "single", label: "Single Elimination", pro: false },
                    { value: "double", label: "Double Elimination", pro: true },
                    { value: "round-robin", label: "Round Robin", pro: true },
                  ] as { value: BracketFormat; label: string; pro: boolean }[]
                ).map((f) => {
                  const locked = f.pro && !isPro;
                  return (
                    <button
                      key={f.value}
                      onClick={() => {
                        if (locked) {
                          setShowUpgrade(true);
                          return;
                        }
                        setFormat(f.value);
                      }}
                      className={`w-full rounded-lg border px-4 py-2.5 text-sm font-bold text-left flex items-center justify-between transition-all ${
                        format === f.value && !locked
                          ? "border-amber-500/50 bg-amber-500/[0.08] text-amber-400"
                          : locked
                          ? "border-slate-800/60 text-slate-600"
                          : "border-slate-700/60 text-slate-400 hover:border-slate-600"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {locked && <LockIcon />}
                        {f.label}
                      </span>
                      {locked && (
                        <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-bold text-amber-500/60 uppercase">
                          PRO
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              {isProFormat && (
                <p className="mt-2 text-xs text-amber-400/70">
                  This format requires Pro.{" "}
                  <button
                    onClick={() => setShowUpgrade(true)}
                    className="underline"
                  >
                    Upgrade
                  </button>{" "}
                  to unlock all formats.
                </p>
              )}
            </div>

            <button
              onClick={handleGenerate}
              disabled={teamCount < 2}
              className="w-full rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-sm font-bold text-white hover:from-amber-400 hover:to-amber-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 uppercase tracking-wide"
            >
              Generate Bracket
            </button>

            {bracket && (
              <button
                onClick={handleDownload}
                className="w-full rounded-lg border-2 border-amber-500/50 px-4 py-3 text-sm font-bold text-amber-400 hover:bg-amber-500/[0.05] transition-all uppercase tracking-wide"
              >
                {isPro
                  ? "Download PDF"
                  : `Download PDF (${FREE_LIMITS.maxDownloads - getDownloadCount()} free remaining)`}
              </button>
            )}
          </div>

          {/* Bracket Preview */}
          <div className="rounded-xl border border-amber-500/10 bg-[#0d1220] p-6 min-h-[500px] flex flex-col overflow-x-auto glow-border">
            {!bracket ? (
              <div className="flex-1 flex items-center justify-center text-slate-500">
                <div className="text-center">
                  {/* Trophy empty state */}
                  <svg viewBox="0 0 80 80" fill="none" className="mx-auto h-20 w-20 mb-4">
                    <path d="M24 16h32v22a16 16 0 01-32 0V16z" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
                    <path d="M24 22H14a6 6 0 000 12h4a10 10 0 006-3V22z" fill="#1e293b" stroke="#334155" strokeWidth="1" opacity="0.5" />
                    <path d="M56 22h10a6 6 0 010 12h-4a10 10 0 01-6-3V22z" fill="#1e293b" stroke="#334155" strokeWidth="1" opacity="0.5" />
                    <rect x="34" y="50" width="12" height="10" rx="2" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                    <rect x="28" y="60" width="24" height="6" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                    <text x="40" y="38" textAnchor="middle" fill="#475569" fontSize="14" fontWeight="800" fontFamily="system-ui">?</text>
                  </svg>
                  <p className="text-lg font-bold text-slate-400">
                    Set up your first tournament
                  </p>
                  <p className="text-sm mt-1 text-slate-600">
                    Enter teams on the left and click Generate
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-black text-center mb-4 text-white tracking-tight uppercase">
                  {bracket.title}
                </h3>
                <BracketSVG bracket={bracket} />
              </>
            )}
          </div>
        </div>

        {/* Upgrade Modal */}
        {showUpgrade && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#0d1220] border border-amber-500/20 rounded-2xl p-8 max-w-md mx-4 shadow-2xl sport-stripe">
              <div className="pt-2">
                <h3 className="text-xl font-black text-white uppercase tracking-wide">
                  Upgrade to Pro
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Unlock unlimited teams, all bracket formats (double elimination,
                  round robin), unlimited PDF downloads, and no watermarks.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={MONTHLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 text-sm font-bold text-white text-center hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 uppercase tracking-wide"
                >
                  Pro Monthly &mdash; $3.99/mo
                </a>
                <a
                  href={YEARLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg border-2 border-amber-500/50 px-4 py-3 text-sm font-bold text-amber-400 text-center hover:bg-amber-500/[0.05] transition-all"
                >
                  Pro Yearly &mdash; $24.99/yr (save 48%)
                </a>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <Link
                  href="/pro/verify"
                  className="text-xs text-slate-500 hover:text-slate-300 underline"
                >
                  Already have Pro? Verify access
                </Link>
                <button
                  onClick={() => setShowUpgrade(false)}
                  className="text-sm text-slate-500 hover:text-slate-300"
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

function LockIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );
}

function BracketSVG({ bracket }: { bracket: BracketData }) {
  const { rounds, format } = bracket;

  if (format === "round-robin") {
    return <RoundRobinDisplay rounds={rounds} />;
  }

  return <EliminationDisplay rounds={rounds} format={format} />;
}

function EliminationDisplay({
  rounds,
  format,
}: {
  rounds: Match[][];
  format: BracketFormat;
}) {
  const totalRounds = rounds.length;
  const firstRoundMatches = rounds[0]?.length || 1;

  const matchW = 170;
  const matchH = 52;
  const roundGap = 60;
  const roundWidth = matchW + roundGap;
  const svgWidth = totalRounds * roundWidth + 40;
  const baseSpacing = matchH + 20;
  const svgHeight = Math.max(firstRoundMatches * baseSpacing + 60, 400);

  return (
    <div className="overflow-auto flex-1">
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="min-w-[600px] w-full h-auto"
        style={{ maxHeight: "70vh" }}
      >
        <defs>
          <linearGradient id="matchBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="seedBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="finalsBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#78350f" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        {rounds.map((roundMatches, r) => {
          const spacing = svgHeight / roundMatches.length;
          const x = 20 + r * roundWidth;
          const isFinal = r === totalRounds - 1;

          return (
            <g key={r}>
              {/* Round label */}
              <text
                x={x + matchW / 2}
                y={16}
                textAnchor="middle"
                fill="#f59e0b"
                fontSize={10}
                fontWeight={700}
                letterSpacing="1.5"
                fontFamily="system-ui"
                opacity={0.5}
              >
                {(format === "double"
                  ? getRoundLabel(r, totalRounds)
                  : getRoundLabel(r, totalRounds)
                ).toUpperCase()}
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
                      fill={isFinal ? "url(#finalsBg)" : "url(#matchBg)"}
                      stroke={isFinal ? "#f59e0b" : "#334155"}
                      strokeWidth={1}
                      strokeOpacity={isFinal ? 0.4 : 1}
                    />
                    {/* Divider */}
                    <line
                      x1={x}
                      y1={y + matchH / 2}
                      x2={x + matchW}
                      y2={y + matchH / 2}
                      stroke="#334155"
                      strokeWidth={1}
                      strokeOpacity={0.6}
                    />
                    {/* Seed column background */}
                    <rect
                      x={x}
                      y={y}
                      width={26}
                      height={matchH / 2}
                      fill="url(#seedBg)"
                      clipPath={`inset(0 0 0 0 round 6px 0 0 0)`}
                    />
                    <rect
                      x={x}
                      y={y + matchH / 2}
                      width={26}
                      height={matchH / 2}
                      fill="url(#seedBg)"
                      clipPath={`inset(0 0 0 0 round 0 0 0 6px)`}
                    />
                    {/* Seed separator */}
                    <line
                      x1={x + 26}
                      y1={y}
                      x2={x + 26}
                      y2={y + matchH}
                      stroke="#334155"
                      strokeWidth={1}
                      strokeOpacity={0.4}
                    />
                    {/* Seed numbers */}
                    <text
                      x={x + 13}
                      y={y + matchH / 4 + 4}
                      textAnchor="middle"
                      fontSize={9}
                      fontWeight={600}
                      fill="#64748b"
                      fontFamily="system-ui"
                    >
                      {r === 0 ? m * 2 + 1 : ""}
                    </text>
                    <text
                      x={x + 13}
                      y={y + (matchH * 3) / 4 + 4}
                      textAnchor="middle"
                      fontSize={9}
                      fontWeight={600}
                      fill="#64748b"
                      fontFamily="system-ui"
                    >
                      {r === 0 ? m * 2 + 2 : ""}
                    </text>
                    {/* Team names */}
                    <text
                      x={x + 34}
                      y={y + matchH / 4 + 4}
                      fontSize={11}
                      fontWeight={match.team1 ? 600 : 400}
                      fill={match.team1 ? "#e2e8f0" : "#475569"}
                      fontFamily="system-ui"
                    >
                      {match.team1 || (r === 0 ? "BYE" : "TBD")}
                    </text>
                    <text
                      x={x + 34}
                      y={y + (matchH * 3) / 4 + 4}
                      fontSize={11}
                      fontWeight={match.team2 ? 600 : 400}
                      fill={match.team2 ? "#e2e8f0" : "#475569"}
                      fontFamily="system-ui"
                    >
                      {match.team2 || (r === 0 ? "BYE" : "TBD")}
                    </text>

                    {/* Connector to next round */}
                    {format === "single" && r < totalRounds - 1 && (
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

function RoundRobinDisplay({ rounds }: { rounds: Match[][] }) {
  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="space-y-6">
        {rounds.map((roundMatches, r) => (
          <div key={r}>
            <h4 className="text-xs font-bold text-amber-500/60 uppercase tracking-wider mb-3">
              Round {r + 1}
            </h4>
            <div className="space-y-2">
              {roundMatches.map((match) => (
                <div
                  key={match.id}
                  className="rounded-lg bg-[#0d1220] border border-slate-700/50 p-3 flex items-center justify-between hover:border-amber-500/20 transition-colors"
                >
                  <div className="text-sm font-semibold text-slate-200">
                    {match.team1 || "TBD"}
                  </div>
                  <div className="text-xs font-black text-amber-500/40 uppercase">vs</div>
                  <div className="text-sm font-semibold text-slate-200">
                    {match.team2 || "TBD"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
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
      stroke="#f59e0b"
      strokeWidth={1.5}
      strokeOpacity={0.3}
    />
  );
}
