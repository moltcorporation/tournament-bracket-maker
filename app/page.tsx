import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Tournament Bracket Maker - Create & Print Brackets for Any Competition",
  description:
    "Create tournament brackets in seconds. Single elimination, double elimination, and round robin. Download print-ready PDFs. Free online bracket generator for sports, esports, and competitions.",
};

const features = [
  {
    title: "Team Input Made Easy",
    description:
      "Enter team or player names one per line. Use quick presets for 4, 8, 16, 32, or 64 teams.",
    icon: "🏆",
  },
  {
    title: "Multiple Formats",
    description:
      "Single elimination for quick tournaments, double elimination for fairer results, round robin for leagues.",
    icon: "🎯",
  },
  {
    title: "Clean SVG Brackets",
    description:
      "Professional bracket visualization with seeding, round labels, and connector lines. Looks great on any screen.",
    icon: "📊",
  },
  {
    title: "Print-Ready PDFs",
    description:
      "Download clean PDF brackets optimized for printing. Share with players, post on walls, or save for records.",
    icon: "🎖️",
  },
  {
    title: "Auto Seeding",
    description:
      "Teams are automatically seeded so top teams face bottom teams in early rounds. Fair matchups guaranteed.",
    icon: "⚡",
  },
  {
    title: "No Account Required",
    description:
      "Start creating brackets instantly. No sign-up, no login, no data stored on our servers.",
    icon: "🔓",
  },
];

const useCases = [
  {
    audience: "Basketball Tournaments",
    use: "March Madness style single or double elimination brackets. Seed teams and track matchups.",
    icon: "🏀",
  },
  {
    audience: "Esports Events",
    use: "Professional bracket layouts for gaming tournaments, LAN events, and online competitions.",
    icon: "🎮",
  },
  {
    audience: "School Sports",
    use: "Organize intramural tournaments, league playoffs, and athletic competitions with ease.",
    icon: "🏫",
  },
  {
    audience: "Office Competitions",
    use: "Fun office brackets for ping pong, trivia, darts, and team-building events.",
    icon: "🏢",
  },
  {
    audience: "Community Events",
    use: "Local league playoffs, charity tournaments, and community sports events.",
    icon: "👥",
  },
  {
    audience: "Family Gatherings",
    use: "Cornhole, board games, and holiday tournament brackets for family events.",
    icon: "👨‍👩‍👧‍👦",
  },
];

// Mini bracket SVG component for hero
const MiniBracketVisual = () => (
  <svg
    viewBox="0 0 300 200"
    className="w-full h-auto max-w-md mx-auto mb-8"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
  >
    {/* Left column - Teams */}
    <rect x="20" y="20" width="50" height="30" fill="#ffc107" stroke="#001f3f" strokeWidth="2" />
    <text x="45" y="40" textAnchor="middle" fill="#001f3f" fontSize="12" fontWeight="bold">
      Team A
    </text>
    <rect x="20" y="70" width="50" height="30" fill="#ffc107" stroke="#001f3f" strokeWidth="2" />
    <text x="45" y="90" textAnchor="middle" fill="#001f3f" fontSize="12" fontWeight="bold">
      Team B
    </text>
    <rect x="20" y="120" width="50" height="30" fill="#ffc107" stroke="#001f3f" strokeWidth="2" />
    <text x="45" y="140" textAnchor="middle" fill="#001f3f" fontSize="12" fontWeight="bold">
      Team C
    </text>
    <rect x="20" y="170" width="50" height="30" fill="#ffc107" stroke="#001f3f" strokeWidth="2" />
    <text x="45" y="190" textAnchor="middle" fill="#001f3f" fontSize="12" fontWeight="bold">
      Team D
    </text>

    {/* Middle column - Semifinals */}
    <rect x="115" y="40" width="50" height="30" fill="white" stroke="#001f3f" strokeWidth="2" />
    <rect x="115" y="130" width="50" height="30" fill="white" stroke="#001f3f" strokeWidth="2" />

    {/* Right column - Finals */}
    <rect x="210" y="85" width="50" height="30" fill="#ffc107" stroke="#001f3f" strokeWidth="2" />
    <text x="235" y="105" textAnchor="middle" fill="#001f3f" fontSize="12" fontWeight="bold">
      Winner
    </text>

    {/* Connector lines */}
    <line x1="70" y1="35" x2="115" y2="55" />
    <line x1="70" y1="85" x2="115" y2="55" />
    <line x1="70" y1="135" x2="115" y2="145" />
    <line x1="70" y1="185" x2="115" y2="145" />
    <line x1="165" y1="55" x2="210" y2="100" />
    <line x1="165" y1="145" x2="210" y2="100" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#000a1f]">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🏆</div>
            <span className="text-xl font-bold text-[#001f3f] dark:text-[#ffc107]" style={{ fontFamily: "var(--font-playfair)" }}>
              Bracket Maker
            </span>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#001f3f] dark:hover:text-[#ffc107] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/editor"
              className="rounded-lg bg-[#001f3f] dark:bg-[#ffc107] px-4 py-2 text-sm font-medium text-white dark:text-[#001f3f] hover:shadow-lg transition-shadow"
            >
              Create
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#001f3f] dark:text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                Create Tournament
                <br />
                <span className="text-[#ffc107]">Brackets in Seconds</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Enter team names, choose your format, download a clean print-ready PDF. No sign-up needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/editor"
                  className="rounded-lg bg-[#001f3f] dark:bg-[#ffc107] px-8 py-3 text-lg font-semibold text-white dark:text-[#001f3f] hover:shadow-lg transition-shadow text-center"
                >
                  Make Your Bracket — Free
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-lg border-2 border-[#001f3f] dark:border-[#ffc107] px-8 py-3 text-lg font-semibold text-[#001f3f] dark:text-[#ffc107] hover:bg-[#001f3f] hover:text-white dark:hover:bg-[#ffc107] dark:hover:text-[#001f3f] transition-colors text-center"
                >
                  View Pro Plans
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#ffc107] to-[#ffa500] rounded-2xl p-8 dark:from-[#ffc107]/20 dark:to-[#ffa500]/20 dark:border-2 dark:border-[#ffc107]">
              <MiniBracketVisual />
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-[#001f3f] dark:bg-gradient-to-r dark:from-[#001f3f] dark:to-[#000a1f] py-12">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <p className="text-white text-lg">
              <span className="text-3xl font-bold text-[#ffc107]">1000+</span> brackets created • Perfect for any competition
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-4 py-20">
          <h2 className="text-4xl font-bold text-center text-[#001f3f] dark:text-white mb-16" style={{ fontFamily: "var(--font-playfair)" }}>
            Everything for Tournament Success
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-[#ffc107] dark:hover:border-[#ffc107] transition-colors hover:shadow-md">
                <div className="text-4xl shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-[#001f3f] dark:text-white text-lg mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-[#000a1f] dark:to-[#001f3f] border-y-2 border-[#ffc107]">
          <div className="mx-auto max-w-5xl px-4 py-20">
            <h2 className="text-4xl font-bold text-center text-[#001f3f] dark:text-white mb-16" style={{ fontFamily: "var(--font-playfair)" }}>
              Built for Every Competition
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <div
                  key={uc.audience}
                  className="rounded-xl bg-white dark:bg-[#000a1f] border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-[#ffc107] dark:hover:border-[#ffc107] transition-colors hover:shadow-md"
                >
                  <div className="text-5xl mb-3">{uc.icon}</div>
                  <h3 className="font-bold text-[#001f3f] dark:text-white text-lg mb-2">
                    {uc.audience}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {uc.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse Brackets */}
        <section className="mx-auto max-w-5xl px-4 py-20">
          <h2 className="text-3xl font-bold text-center text-[#001f3f] dark:text-white mb-12" style={{ fontFamily: "var(--font-playfair)" }}>
            Quick Links
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/single-elimination-bracket", label: "Single Elimination" },
              { href: "/double-elimination-bracket", label: "Double Elimination" },
              { href: "/round-robin-bracket", label: "Round Robin" },
              { href: "/basketball-bracket", label: "🏀 Basketball" },
              { href: "/football-bracket", label: "🏈 Football" },
              { href: "/soccer-bracket", label: "⚽ Soccer" },
              { href: "/esports-bracket", label: "🎮 Esports" },
              { href: "/8-team-bracket", label: "8 Team Bracket" },
              { href: "/16-team-bracket", label: "16 Team Bracket" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border-2 border-gray-200 dark:border-gray-800 px-4 py-3 text-sm font-medium text-[#001f3f] dark:text-white bg-white dark:bg-[#000a1f] hover:border-[#ffc107] hover:bg-[#ffc107]/10 dark:hover:bg-[#ffc107]/10 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#001f3f] dark:bg-gradient-to-r dark:from-[#001f3f] dark:to-[#000a1f] py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Run Your Tournament Today
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              No account. No email. Start in seconds.
            </p>
            <Link
              href="/editor"
              className="inline-block rounded-lg bg-[#ffc107] text-[#001f3f] px-10 py-4 text-lg font-bold hover:shadow-xl transition-shadow"
            >
              Create Your Bracket Now →
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Tournament Bracket Maker — Free tournament bracket generator for all competitions</p>
          <nav className="flex gap-6 justify-center mt-4 text-xs">
            <Link href="/editor" className="hover:text-[#001f3f] dark:hover:text-[#ffc107]">
              Create
            </Link>
            <Link href="/pricing" className="hover:text-[#001f3f] dark:hover:text-[#ffc107]">
              Pricing
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
