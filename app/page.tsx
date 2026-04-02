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
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    ),
  },
  {
    title: "Multiple Formats",
    description:
      "Single elimination for quick tournaments, double elimination for fairer results, round robin for leagues.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
      />
    ),
  },
  {
    title: "Clean SVG Brackets",
    description:
      "Professional bracket visualization with seeding, round labels, and connector lines. Looks great on any screen.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
      />
    ),
  },
  {
    title: "Print-Ready PDFs",
    description:
      "Download clean PDF brackets optimized for printing. Share with players, post on walls, or save for records.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
      />
    ),
  },
  {
    title: "Auto Seeding",
    description:
      "Teams are automatically seeded so top teams face bottom teams in early rounds. Fair matchups guaranteed.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-4.5L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
      />
    ),
  },
  {
    title: "No Account Required",
    description:
      "Start creating brackets instantly. No sign-up, no login, no data stored on our servers.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
  },
];

const useCases = [
  {
    audience: "Sports Leagues",
    use: "Create brackets for basketball, soccer, volleyball, and any team sport tournament.",
  },
  {
    audience: "Esports Organizers",
    use: "Run gaming tournaments with clean, professional brackets players can follow.",
  },
  {
    audience: "Schools & Clubs",
    use: "Organize intramural sports, debate competitions, and academic contests.",
  },
  {
    audience: "Office Events",
    use: "Ping pong tournaments, trivia nights, and team-building competitions.",
  },
  {
    audience: "Family Gatherings",
    use: "Cornhole tournaments, board game brackets, and holiday competitions.",
  },
  {
    audience: "Community Events",
    use: "Local league playoffs, charity tournament brackets, and community sports.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-black dark:text-white">
            Tournament Bracket Maker
          </span>
          <nav className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Pricing
            </Link>
            <Link
              href="/editor"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              Create Bracket
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Create Tournament Brackets
            <br />
            <span className="text-emerald-600">in Seconds</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Enter team names, choose a format, and download a clean, print-ready
            bracket PDF. Works for any sport, game, or competition.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/editor"
              className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              Make a Bracket — Free
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              View Plans
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-12">
            Everything You Need for Tournament Brackets
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="shrink-0">
                  <svg
                    className="h-6 w-6 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {f.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-2xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-12">
              Who Uses Tournament Bracket Maker?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((uc) => (
                <div
                  key={uc.audience}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6"
                >
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {uc.audience}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {uc.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse Brackets */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-8">
            Browse Bracket Types
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Ready to Create Your Bracket?
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            No account needed. Start creating in seconds.
          </p>
          <Link
            href="/editor"
            className="mt-8 inline-block rounded-lg bg-emerald-600 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            Create Your Bracket Now
          </Link>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            Tournament Bracket Maker — Create printable tournament brackets for
            free.
          </p>
          <nav className="flex gap-6 text-sm text-zinc-500">
            <Link
              href="/editor"
              className="hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Editor
            </Link>
            <Link
              href="/pricing"
              className="hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Pricing
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
