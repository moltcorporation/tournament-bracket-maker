import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Tournament Bracket Maker - Create & Print Brackets for Any Competition",
  description:
    "Create tournament brackets in seconds. Single elimination, double elimination, and round robin. Download print-ready PDFs. Free online bracket generator for sports, esports, and competitions.",
};

function HeroBracketSVG() {
  return (
    <svg
      viewBox="0 0 520 280"
      className="w-full max-w-lg mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Round 1 matchups */}
      <rect x="10" y="10" width="120" height="32" rx="6" className="fill-slate-800" />
      <text x="20" y="31" className="fill-amber-400 text-[13px] font-semibold" fontFamily="system-ui">Eagles</text>
      <text x="110" y="31" className="fill-slate-400 text-[11px]" fontFamily="system-ui" textAnchor="end">1</text>

      <rect x="10" y="50" width="120" height="32" rx="6" className="fill-slate-800" />
      <text x="20" y="71" className="fill-white text-[13px] font-semibold" fontFamily="system-ui">Hawks</text>
      <text x="110" y="71" className="fill-slate-400 text-[11px]" fontFamily="system-ui" textAnchor="end">8</text>

      <rect x="10" y="110" width="120" height="32" rx="6" className="fill-slate-800" />
      <text x="20" y="131" className="fill-white text-[13px] font-semibold" fontFamily="system-ui">Wolves</text>
      <text x="110" y="131" className="fill-slate-400 text-[11px]" fontFamily="system-ui" textAnchor="end">4</text>

      <rect x="10" y="150" width="120" height="32" rx="6" className="fill-slate-800" />
      <text x="20" y="171" className="fill-amber-400 text-[13px] font-semibold" fontFamily="system-ui">Tigers</text>
      <text x="110" y="171" className="fill-slate-400 text-[11px]" fontFamily="system-ui" textAnchor="end">5</text>

      <rect x="10" y="198" width="120" height="32" rx="6" className="fill-slate-800" />
      <text x="20" y="219" className="fill-amber-400 text-[13px] font-semibold" fontFamily="system-ui">Lions</text>
      <text x="110" y="219" className="fill-slate-400 text-[11px]" fontFamily="system-ui" textAnchor="end">3</text>

      <rect x="10" y="238" width="120" height="32" rx="6" className="fill-slate-800" />
      <text x="20" y="259" className="fill-white text-[13px] font-semibold" fontFamily="system-ui">Bears</text>
      <text x="110" y="259" className="fill-slate-400 text-[11px]" fontFamily="system-ui" textAnchor="end">6</text>

      {/* Connector lines R1 → R2 */}
      <path d="M130 26 L155 26 L155 66 L155 66" className="stroke-amber-500/60" strokeWidth="2" fill="none" />
      <path d="M130 66 L155 66" className="stroke-amber-500/60" strokeWidth="2" fill="none" />
      <path d="M155 46 L170 46" className="stroke-amber-500/60" strokeWidth="2" fill="none" />
      <path d="M155 26 L155 66" className="stroke-amber-500/60" strokeWidth="2" fill="none" />

      <path d="M130 126 L155 126 L155 166" className="stroke-amber-500/60" strokeWidth="2" fill="none" />
      <path d="M130 166 L155 166" className="stroke-amber-500/60" strokeWidth="2" fill="none" />
      <path d="M155 146 L170 146" className="stroke-amber-500/60" strokeWidth="2" fill="none" />
      <path d="M155 126 L155 166" className="stroke-amber-500/60" strokeWidth="2" fill="none" />

      <path d="M130 214 L155 214 L155 254" className="stroke-amber-500/60" strokeWidth="2" fill="none" />
      <path d="M130 254 L155 254" className="stroke-amber-500/60" strokeWidth="2" fill="none" />
      <path d="M155 234 L170 234" className="stroke-amber-500/60" strokeWidth="2" fill="none" />
      <path d="M155 214 L155 254" className="stroke-amber-500/60" strokeWidth="2" fill="none" />

      {/* Round 2 (semis) */}
      <rect x="170" y="30" width="120" height="32" rx="6" className="fill-slate-700" />
      <text x="180" y="51" className="fill-amber-400 text-[13px] font-semibold" fontFamily="system-ui">Eagles</text>

      <rect x="170" y="130" width="120" height="32" rx="6" className="fill-slate-700" />
      <text x="180" y="151" className="fill-amber-400 text-[13px] font-semibold" fontFamily="system-ui">Tigers</text>

      <rect x="170" y="218" width="120" height="32" rx="6" className="fill-slate-700" />
      <text x="180" y="239" className="fill-amber-400 text-[13px] font-semibold" fontFamily="system-ui">Lions</text>

      {/* Connector lines R2 → Finals */}
      <path d="M290 46 L320 46 L320 146 L340 146" className="stroke-amber-500/60" strokeWidth="2" fill="none" />
      <path d="M290 146 L320 146" className="stroke-amber-500/60" strokeWidth="2" fill="none" />

      <path d="M290 234 L320 234 L320 190 L340 190" className="stroke-amber-500/60" strokeWidth="2" fill="none" />

      {/* Finals */}
      <rect x="340" y="130" width="130" height="32" rx="6" className="fill-slate-600" />
      <text x="350" y="151" className="fill-amber-300 text-[13px] font-semibold" fontFamily="system-ui">Eagles</text>
      <rect x="340" y="170" width="130" height="32" rx="6" className="fill-slate-600" />
      <text x="350" y="191" className="fill-white text-[13px] font-semibold" fontFamily="system-ui">Lions</text>

      {/* Champion */}
      <path d="M470 146 L490 146 L490 168 L490 168" className="stroke-amber-400" strokeWidth="2" fill="none" />
      <path d="M470 186 L490 186 L490 168" className="stroke-amber-400" strokeWidth="2" fill="none" />
      <circle cx="505" cy="168" r="12" className="fill-amber-500" />
      <text x="505" y="173" className="fill-slate-900 text-[14px] font-bold" fontFamily="system-ui" textAnchor="middle">W</text>

      {/* Round labels */}
      <text x="70" y="280" className="fill-slate-500 text-[10px]" fontFamily="system-ui" textAnchor="middle">Round 1</text>
      <text x="230" y="280" className="fill-slate-500 text-[10px]" fontFamily="system-ui" textAnchor="middle">Semis</text>
      <text x="405" y="280" className="fill-slate-500 text-[10px]" fontFamily="system-ui" textAnchor="middle">Finals</text>
    </svg>
  );
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75h2.25A1.5 1.5 0 0120.25 5.25v1.5a3 3 0 01-3 3h-.044M7.5 3.75H5.25A1.5 1.5 0 003.75 5.25v1.5a3 3 0 003 3h.044M12 15.75v3M9 21h6M7.5 3.75h9v6a4.5 4.5 0 01-9 0v-6z" />
    </svg>
  );
}

const features = [
  {
    title: "Quick Team Entry",
    description:
      "Paste a list or use presets for 4, 8, 16, 32, or 64 teams. Auto-seeding matches top seeds against bottom.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-amber-500" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    title: "Three Tournament Formats",
    description:
      "Single elimination for speed, double elimination for fairness, round robin for full standings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-amber-500" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6zm0 6h.008v.008H6V12zm0 6h.008v.008H6V18zm6-12h.008v.008H12V6zm0 6h.008v.008H12V12zm0 6h.008v.008H12V18zm6-12h.008v.008H18V6zm0 6h.008v.008H18V12zm0 6h.008v.008H18V18z" />
      </svg>
    ),
  },
  {
    title: "SVG Bracket Rendering",
    description:
      "Sharp vector brackets with round labels, seeding numbers, and connector lines. Looks crisp at any size.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-amber-500" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    title: "Print-Ready PDF Export",
    description:
      "Download brackets sized for letter or A4 paper. Post on the wall, hand out to players, or archive.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-amber-500" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Works Instantly",
    description:
      "No account, no login, no data on our servers. Everything runs in your browser. Start building in seconds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-amber-500" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Pro Customization",
    description:
      "Unlock all formats, custom colors, logo branding, and unlimited teams with Pro. Save and share brackets.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-amber-500" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const useCases = [
  {
    sport: "Basketball",
    description: "March Madness-style brackets, league playoffs, 3-on-3 tournaments",
    href: "/basketball-bracket",
  },
  {
    sport: "Football",
    description: "Playoff brackets, fantasy leagues, flag football tournaments",
    href: "/football-bracket",
  },
  {
    sport: "Soccer",
    description: "Cup-style tournaments, club leagues, futsal competitions",
    href: "/soccer-bracket",
  },
  {
    sport: "Esports",
    description: "Gaming tournaments, LAN events, online qualifiers",
    href: "/esports-bracket",
  },
  {
    sport: "Schools & Clubs",
    description: "Intramurals, debate brackets, spelling bees, academic bowls",
    href: "/single-elimination-bracket",
  },
  {
    sport: "Office & Social",
    description: "Ping pong ladders, trivia nights, cornhole tournaments",
    href: "/8-team-bracket",
  },
];

const steps = [
  { step: "1", title: "Enter Teams", description: "Type or paste team names. Pick a preset size or enter any number." },
  { step: "2", title: "Choose Format", description: "Single elimination, double elimination, or round robin." },
  { step: "3", title: "Download PDF", description: "Print it, share it, or post it on the wall. Done in seconds." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <TrophyIcon className="h-6 w-6 text-amber-500" />
            <span className="text-xl font-bold text-white">
              Bracket Maker
            </span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/editor"
              className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
            >
              Create Bracket
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-12">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Build Tournament Brackets
                <span className="block text-amber-400 mt-1">That Look Professional</span>
              </h1>
              <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                Enter teams, pick a format, and download a clean PDF bracket.
                Works for any sport, game, or competition — no account needed.
              </p>
              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <Link
                  href="/editor"
                  className="rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                >
                  Make a Bracket — Free
                </Link>
                <Link
                  href="#how-it-works"
                  className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Bracket Preview */}
            <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-amber-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-slate-500 font-mono">tournament-preview.svg</span>
              </div>
              <HeroBracketSVG />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="border-y border-slate-800 bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-2xl font-bold text-center text-white mb-12">
              Three Steps to a Finished Bracket
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              {steps.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-lg font-bold mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-bold text-center text-white mb-12">
            Built for Real Tournaments
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="shrink-0 mt-0.5">{f.icon}</div>
                <div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sport-Specific Sections */}
        <section className="border-y border-slate-800 bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-2xl font-bold text-center text-white mb-12">
              Brackets for Every Competition
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <Link
                  key={uc.sport}
                  href={uc.href}
                  className="group rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-amber-500/40 hover:bg-slate-800/80 transition-all"
                >
                  <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                    {uc.sport}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {uc.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Browse All Bracket Types */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-bold text-center text-white mb-8">
            Browse Bracket Types
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/single-elimination-bracket", label: "Single Elimination Bracket" },
              { href: "/double-elimination-bracket", label: "Double Elimination Bracket" },
              { href: "/round-robin-bracket", label: "Round Robin Bracket" },
              { href: "/4-team-bracket", label: "4 Team Bracket" },
              { href: "/8-team-bracket", label: "8 Team Bracket" },
              { href: "/16-team-bracket", label: "16 Team Bracket" },
              { href: "/32-team-bracket", label: "32 Team Bracket" },
              { href: "/64-team-bracket", label: "64 Team Bracket" },
              { href: "/basketball-bracket", label: "Basketball Bracket" },
              { href: "/football-bracket", label: "Football Bracket" },
              { href: "/soccer-bracket", label: "Soccer Bracket" },
              { href: "/esports-bracket", label: "Esports Bracket" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-800 px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:border-slate-700 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-4 py-20 text-center">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-12">
            <TrophyIcon className="h-10 w-10 text-amber-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white">
              Ready to Run Your Tournament?
            </h2>
            <p className="mt-4 text-slate-400 max-w-md mx-auto">
              No account needed. Create a bracket and download a PDF in under a minute.
            </p>
            <Link
              href="/editor"
              className="mt-8 inline-block rounded-lg bg-amber-500 px-8 py-3 text-sm font-bold text-slate-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
            >
              Create Your Bracket Now
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            Tournament Bracket Maker — Create printable tournament brackets for
            free.
          </p>
          <nav className="flex gap-6 text-sm text-slate-500">
            <Link
              href="/editor"
              className="hover:text-slate-300 transition-colors"
            >
              Editor
            </Link>
            <Link
              href="/pricing"
              className="hover:text-slate-300 transition-colors"
            >
              Pricing
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
