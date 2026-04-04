import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Tournament Bracket Maker - Create & Print Brackets for Any Competition",
  description:
    "Create tournament brackets in seconds. Single elimination, double elimination, and round robin. Download print-ready PDFs. Free online bracket generator for sports, esports, and competitions.",
};

function TrophySVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M14 8h20v14a10 10 0 01-20 0V8z" fill="url(#trophyBody)" />
      <path d="M14 12H8a4 4 0 000 8h2a6 6 0 004-2.2V12z" fill="url(#trophyHandle)" opacity="0.8" />
      <path d="M34 12h6a4 4 0 010 8h-2a6 6 0 01-4-2.2V12z" fill="url(#trophyHandle)" opacity="0.8" />
      <rect x="20" y="30" width="8" height="6" rx="1" fill="#b45309" />
      <rect x="16" y="36" width="16" height="4" rx="2" fill="#92400e" />
      <path d="M22 14l2-2 2 2-2 2z" fill="#fef3c7" opacity="0.7" />
      <defs>
        <linearGradient id="trophyBody" x1="24" y1="8" x2="24" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbbf24" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="trophyHandle" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#f59e0b" />
          <stop offset="1" stopColor="#b45309" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HeroBracketSVG() {
  return (
    <svg
      viewBox="0 0 540 300"
      className="w-full max-w-lg mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="winnerGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="matchGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="champGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Round 1 matchups */}
      <rect x="10" y="10" width="130" height="34" rx="4" fill="url(#winnerGrad)" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="10" y="10" width="3" height="34" rx="1" fill="#f59e0b" />
      <text x="22" y="32" fill="#fbbf24" fontSize="13" fontWeight="700" fontFamily="system-ui">Eagles</text>
      <text x="122" y="32" fill="#64748b" fontSize="10" fontFamily="system-ui" textAnchor="end">1</text>

      <rect x="10" y="50" width="130" height="34" rx="4" fill="url(#matchGrad)" stroke="#334155" strokeWidth="1" />
      <text x="22" y="72" fill="#94a3b8" fontSize="13" fontWeight="500" fontFamily="system-ui">Hawks</text>
      <text x="122" y="72" fill="#475569" fontSize="10" fontFamily="system-ui" textAnchor="end">8</text>

      <rect x="10" y="110" width="130" height="34" rx="4" fill="url(#matchGrad)" stroke="#334155" strokeWidth="1" />
      <text x="22" y="132" fill="#94a3b8" fontSize="13" fontWeight="500" fontFamily="system-ui">Wolves</text>
      <text x="122" y="132" fill="#475569" fontSize="10" fontFamily="system-ui" textAnchor="end">4</text>

      <rect x="10" y="150" width="130" height="34" rx="4" fill="url(#winnerGrad)" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="10" y="150" width="3" height="34" rx="1" fill="#f59e0b" />
      <text x="22" y="172" fill="#fbbf24" fontSize="13" fontWeight="700" fontFamily="system-ui">Tigers</text>
      <text x="122" y="172" fill="#64748b" fontSize="10" fontFamily="system-ui" textAnchor="end">5</text>

      <rect x="10" y="210" width="130" height="34" rx="4" fill="url(#winnerGrad)" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="10" y="210" width="3" height="34" rx="1" fill="#f59e0b" />
      <text x="22" y="232" fill="#fbbf24" fontSize="13" fontWeight="700" fontFamily="system-ui">Lions</text>
      <text x="122" y="232" fill="#64748b" fontSize="10" fontFamily="system-ui" textAnchor="end">3</text>

      <rect x="10" y="250" width="130" height="34" rx="4" fill="url(#matchGrad)" stroke="#334155" strokeWidth="1" />
      <text x="22" y="272" fill="#94a3b8" fontSize="13" fontWeight="500" fontFamily="system-ui">Bears</text>
      <text x="122" y="272" fill="#475569" fontSize="10" fontFamily="system-ui" textAnchor="end">6</text>

      {/* Connector lines R1 → R2 */}
      <path d="M140 27 H158 V50 H158" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      <path d="M140 67 H158" stroke="#334155" strokeWidth="1.5" fill="none" />
      <path d="M158 27 V67" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      <path d="M158 47 H175" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />

      <path d="M140 127 H158 V167" stroke="#334155" strokeWidth="1.5" fill="none" />
      <path d="M140 167 H158" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      <path d="M158 127 V167" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      <path d="M158 147 H175" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />

      <path d="M140 227 H158 V267" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      <path d="M140 267 H158" stroke="#334155" strokeWidth="1.5" fill="none" />
      <path d="M158 227 V267" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      <path d="M158 247 H175" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />

      {/* Round 2 (semis) */}
      <rect x="175" y="30" width="130" height="34" rx="4" fill="url(#winnerGrad)" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="175" y="30" width="3" height="34" rx="1" fill="#f59e0b" />
      <text x="187" y="52" fill="#fbbf24" fontSize="13" fontWeight="700" fontFamily="system-ui">Eagles</text>

      <rect x="175" y="130" width="130" height="34" rx="4" fill="url(#matchGrad)" stroke="#334155" strokeWidth="1" />
      <text x="187" y="152" fill="#94a3b8" fontSize="13" fontWeight="500" fontFamily="system-ui">Tigers</text>

      <rect x="175" y="230" width="130" height="34" rx="4" fill="url(#matchGrad)" stroke="#334155" strokeWidth="1" />
      <text x="187" y="252" fill="#94a3b8" fontSize="13" fontWeight="500" fontFamily="system-ui">Lions</text>

      {/* Connector lines R2 → Finals */}
      <path d="M305 47 H330 V147 H350" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
      <path d="M305 147 H330" stroke="#334155" strokeWidth="1.5" fill="none" />
      <path d="M305 247 H330 V195 H350" stroke="#334155" strokeWidth="1.5" fill="none" />

      {/* Finals */}
      <rect x="350" y="132" width="140" height="34" rx="4" fill="url(#winnerGrad)" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5" />
      <rect x="350" y="132" width="3" height="34" rx="1" fill="#f59e0b" />
      <text x="362" y="154" fill="#fbbf24" fontSize="13" fontWeight="700" fontFamily="system-ui">Eagles</text>
      <rect x="350" y="172" width="140" height="34" rx="4" fill="url(#matchGrad)" stroke="#334155" strokeWidth="1" />
      <text x="362" y="194" fill="#94a3b8" fontSize="13" fontWeight="500" fontFamily="system-ui">Lions</text>

      {/* Champion badge */}
      <path d="M490 149 H508 V173 H508" stroke="#f59e0b" strokeWidth="2" fill="none" filter="url(#glow)" />
      <path d="M490 189 H508 V173" stroke="#f59e0b" strokeWidth="2" fill="none" filter="url(#glow)" />
      <rect x="508" y="158" width="28" height="28" rx="6" fill="url(#champGrad)" stroke="#fbbf24" strokeWidth="1.5" />
      <text x="522" y="177" fill="#fef3c7" fontSize="12" fontWeight="800" fontFamily="system-ui" textAnchor="middle">W</text>

      {/* Round labels */}
      <text x="75" y="298" fill="#f59e0b" fontSize="10" fontWeight="700" fontFamily="system-ui" textAnchor="middle" letterSpacing="1.5" opacity="0.6">ROUND 1</text>
      <text x="240" y="298" fill="#f59e0b" fontSize="10" fontWeight="700" fontFamily="system-ui" textAnchor="middle" letterSpacing="1.5" opacity="0.6">SEMIS</text>
      <text x="420" y="298" fill="#f59e0b" fontSize="10" fontWeight="700" fontFamily="system-ui" textAnchor="middle" letterSpacing="1.5" opacity="0.6">FINALS</text>
    </svg>
  );
}

function WhistleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      <circle cx="12" cy="12" r="9" strokeLinecap="round" />
    </svg>
  );
}

function BracketIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h4v3H4zM4 15h4v3H4zM16 10.5h4v3h-4zM10 7.5h4M10 16.5h4M14 7.5v9" />
    </svg>
  );
}

const features = [
  {
    title: "Quick Team Entry",
    description:
      "Paste a list or use presets for 4, 8, 16, 32, or 64 teams. Auto-seeding matches top seeds against bottom.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <rect x="4" y="4" width="24" height="24" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M9 11h14M9 16h10M9 21h12" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="21" r="3" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="1" />
        <path d="M21 21l1 1 2-2" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Three Tournament Formats",
    description:
      "Single elimination for speed, double elimination for fairness, round robin for full standings.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <rect x="2" y="6" width="10" height="5" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
        <rect x="2" y="14" width="10" height="5" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
        <rect x="2" y="22" width="10" height="5" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
        <rect x="20" y="10" width="10" height="5" rx="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
        <rect x="20" y="18" width="10" height="5" rx="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
        <path d="M12 8.5h4v8h-4M12 16.5h4M12 24.5h4v-4" stroke="#475569" strokeWidth="1" />
        <path d="M16 12.5h4M16 20.5h4" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Vector-Sharp Brackets",
    description:
      "Crisp SVG brackets with round labels, seeding, and connector lines. Looks perfect at any zoom level.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <rect x="4" y="4" width="24" height="24" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M8 10l4-2 4 2-4 2z" fill="#f59e0b" opacity="0.3" />
        <path d="M10 14v8l6 4 6-4v-8l-6-4z" stroke="#f59e0b" strokeWidth="1" fill="none" />
        <circle cx="16" cy="18" r="2" fill="#f59e0b" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Print-Ready PDF Export",
    description:
      "Download brackets sized for letter or A4 paper. Post on the wall, hand out to players, or archive.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <path d="M8 4h10l6 6v18a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#1e293b" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M18 4v6h6" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.5" />
        <text x="10" y="22" fill="#ef4444" fontSize="7" fontWeight="800" fontFamily="system-ui" opacity="0.8">PDF</text>
        <path d="M26 16l-3 3-3-3M23 19v-6" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "No Account Needed",
    description:
      "No signup, no data on our servers. Everything runs in your browser. Start building in seconds.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <circle cx="16" cy="16" r="12" fill="#1e293b" stroke="#16a34a" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M10 16l4 4 8-8" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Pro Customization",
    description:
      "Unlock all formats, unlimited teams, no watermarks, and unlimited PDF downloads with Pro.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" strokeWidth="1" />
        <text x="12.5" y="20" fill="#fbbf24" fontSize="9" fontWeight="800" fontFamily="system-ui">P</text>
      </svg>
    ),
  },
];

const useCases = [
  {
    sport: "Basketball",
    description: "March Madness-style brackets, league playoffs, 3-on-3 tournaments",
    href: "/basketball-bracket",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9">
        <circle cx="18" cy="18" r="14" fill="#92400e" stroke="#f59e0b" strokeWidth="1.5" />
        <path d="M4 18h28M18 4v28" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
        <path d="M8 8a14 14 0 000 20M28 8a14 14 0 010 20" stroke="#f59e0b" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    accent: "border-amber-500/20 hover:border-amber-500/50",
  },
  {
    sport: "Football",
    description: "Playoff brackets, fantasy leagues, flag football tournaments",
    href: "/football-bracket",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9">
        <ellipse cx="18" cy="18" rx="14" ry="10" fill="#92400e" stroke="#f59e0b" strokeWidth="1.5" transform="rotate(-30 18 18)" />
        <path d="M12 18h12M18 13v10" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
        <path d="M13 15l2 2M13 21l2-2M23 15l-2 2M23 21l-2-2" stroke="#fff" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    accent: "border-amber-500/20 hover:border-amber-500/50",
  },
  {
    sport: "Soccer",
    description: "Cup-style tournaments, club leagues, futsal competitions",
    href: "/soccer-bracket",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9">
        <circle cx="18" cy="18" r="14" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M18 4l3.5 5.5h6l1.5 6-4.5 4 1 6.5H18" fill="#334155" stroke="#94a3b8" strokeWidth="0.75" />
        <path d="M18 4l-3.5 5.5h-6l-1.5 6 4.5 4-1 6.5H18" fill="none" stroke="#94a3b8" strokeWidth="0.75" />
      </svg>
    ),
    accent: "border-slate-500/20 hover:border-slate-400/50",
  },
  {
    sport: "Esports",
    description: "Gaming tournaments, LAN events, online qualifiers",
    href: "/esports-bracket",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9">
        <rect x="4" y="8" width="28" height="16" rx="3" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="12" cy="16" r="3" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
        <circle cx="24" cy="14" r="1.5" fill="#3b82f6" opacity="0.5" />
        <circle cx="27" cy="16" r="1.5" fill="#3b82f6" opacity="0.5" />
        <circle cx="24" cy="18" r="1.5" fill="#3b82f6" opacity="0.5" />
        <circle cx="21" cy="16" r="1.5" fill="#3b82f6" opacity="0.5" />
        <path d="M14 28h8" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: "border-blue-500/20 hover:border-blue-500/50",
  },
  {
    sport: "Schools & Clubs",
    description: "Intramurals, debate brackets, spelling bees, academic bowls",
    href: "/single-elimination-bracket",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9">
        <path d="M10 8h16l2 10H8z" fill="#1e293b" stroke="#16a34a" strokeWidth="1.5" />
        <rect x="14" y="18" width="8" height="2" fill="#16a34a" opacity="0.3" />
        <path d="M18 4v4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 28h16" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="16" y="20" width="4" height="8" fill="#16a34a" opacity="0.2" />
      </svg>
    ),
    accent: "border-green-500/20 hover:border-green-500/50",
  },
  {
    sport: "Office & Social",
    description: "Ping pong ladders, trivia nights, cornhole tournaments",
    href: "/8-team-bracket",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9">
        <circle cx="18" cy="14" r="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="18" y1="22" x2="18" y2="32" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="14" r="3" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="0.75" />
      </svg>
    ),
    accent: "border-amber-500/20 hover:border-amber-500/50",
  },
];

const steps = [
  {
    step: "1",
    title: "Enter Teams",
    description: "Type or paste team names. Pick a preset size or enter any number.",
    color: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  },
  {
    step: "2",
    title: "Choose Format",
    description: "Single elimination, double elimination, or round robin.",
    color: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  },
  {
    step: "3",
    title: "Download PDF",
    description: "Print it, share it, or post it on the wall. Done in seconds.",
    color: "bg-green-500/10 border-green-500/20 text-green-400",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f1a]">
      {/* Header */}
      <header className="border-b border-amber-500/10 bg-[#0b0f1a]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <TrophySVG className="h-8 w-8" />
            <span className="text-lg font-extrabold text-white tracking-tight">
              Bracket<span className="text-amber-400">Maker</span>
            </span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/editor"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2 text-sm font-bold text-white hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
            >
              Create Bracket
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden field-pattern">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.05] via-transparent to-transparent" />
          <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-72 h-72 bg-blue-500/[0.03] rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-sm font-semibold text-amber-400 mb-6">
                <TrophySVG className="h-4 w-4" />
                Free &middot; No signup required
              </div>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08] uppercase">
                Tournament Brackets
                <span className="block trophy-text mt-1">Built to Compete</span>
              </h1>
              <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
                Enter teams, pick a format, download a clean PDF.
                Works for any sport, game, or competition.
              </p>
              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <Link
                  href="/editor"
                  className="group rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-white hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 uppercase tracking-wide"
                >
                  Make a Bracket — Free
                  <span className="inline-block ml-1.5 transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </Link>
                <Link
                  href="#how-it-works"
                  className="rounded-lg border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:bg-slate-800/50 hover:border-amber-500/30 transition-all"
                >
                  How It Works
                </Link>
              </div>
            </div>

            {/* Bracket Preview */}
            <div className="mt-14 rounded-2xl border border-amber-500/15 bg-[#0d1220] p-6 sm:p-8 glow-border sport-stripe">
              <div className="flex items-center gap-2 mb-4 pt-1">
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-blue-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-slate-500/70" />
                <span className="ml-3 text-xs text-amber-500/40 font-mono tracking-wide uppercase">8-team-single-elim.svg</span>
              </div>
              <HeroBracketSVG />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="border-y scoreboard-divider border-slate-800/30 bg-[#0c1020]">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-2xl font-black text-center text-white mb-2 uppercase tracking-wide">
              Three Steps. Done.
            </h2>
            <p className="text-center text-slate-500 mb-12 text-sm">No account, no learning curve.</p>
            <div className="grid gap-8 sm:grid-cols-3">
              {steps.map((s) => (
                <div key={s.step} className="text-center">
                  <div className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl border text-xl font-black mb-4 ${s.color}`}>
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-black text-center text-white mb-2 uppercase tracking-wide">
            Built for Real Tournaments
          </h2>
          <p className="text-center text-slate-500 mb-12 text-sm">Not another generic bracket tool.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 p-5 rounded-xl border border-slate-800/40 bg-[#0d1220]/50 hover:border-amber-500/20 transition-all">
                <div className="shrink-0 mt-0.5">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sport-Specific Sections */}
        <section className="border-y scoreboard-divider border-slate-800/30 bg-[#0c1020]">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-2xl font-black text-center text-white mb-2 uppercase tracking-wide">
              Brackets for Every Competition
            </h2>
            <p className="text-center text-slate-500 mb-12 text-sm">Pick your sport. We handle the rest.</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <Link
                  key={uc.sport}
                  href={uc.href}
                  className={`group rounded-xl border bg-[#0d1220] p-5 transition-all ${uc.accent}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {uc.icon}
                    <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">
                      {uc.sport}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500">
                    {uc.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Browse All Bracket Types */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-black text-center text-white mb-8 uppercase tracking-wide">
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
                className="rounded-lg border border-slate-800/60 bg-[#0d1220] px-4 py-3 text-sm text-slate-400 hover:bg-amber-500/[0.03] hover:border-amber-500/20 hover:text-amber-400 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-4 py-20 text-center">
          <div className="rounded-2xl border border-amber-500/15 bg-gradient-to-b from-amber-500/[0.04] to-transparent p-12 relative overflow-hidden">
            <div className="absolute inset-0 field-pattern opacity-50" />
            <div className="relative">
              <TrophySVG className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl font-black text-white uppercase tracking-wide">
                Ready to Run Your Tournament?
              </h2>
              <p className="mt-4 text-slate-400 max-w-md mx-auto">
                No account needed. Create a bracket and download a PDF in under a minute.
              </p>
              <Link
                href="/editor"
                className="mt-8 inline-block rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3.5 text-sm font-bold text-white hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 uppercase tracking-wide"
              >
                Create Your Bracket Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60">
        <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <TrophySVG className="h-5 w-5" />
            <p className="text-sm text-slate-600">
              Tournament Bracket Maker &mdash; Create printable tournament brackets for free.
            </p>
          </div>
          <nav className="flex gap-6 text-sm text-slate-500">
            <Link href="/editor" className="hover:text-amber-400 transition-colors">
              Editor
            </Link>
            <Link href="/pricing" className="hover:text-amber-400 transition-colors">
              Pricing
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
