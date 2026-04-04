import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title:
    "Elimination Bracket Template - Printable PDF Brackets | Bracket Maker",
  description:
    "Download printable elimination bracket templates for 4, 8, 16, 32, and 64 teams. Single and double elimination formats. Clean PDF layout ready to print and fill in by hand.",
  openGraph: {
    title: "Elimination Bracket Template - Printable PDF Brackets",
    description:
      "Download printable elimination bracket templates for 4 to 64 teams. Single and double elimination. Clean PDF layout.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elimination Bracket Template - Printable PDF Brackets",
    description:
      "Download printable elimination bracket templates. Single and double elimination for 4 to 64 teams.",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  {
    name: "Elimination Bracket Template",
    href: "/elimination-bracket-template",
  },
];

const templates = [
  { teams: 4, rounds: 2, games: 3, href: "/4-team-bracket" },
  { teams: 8, rounds: 3, games: 7, href: "/8-team-bracket" },
  { teams: 16, rounds: 4, games: 15, href: "/16-team-bracket" },
  { teams: 32, rounds: 5, games: 31, href: "/32-team-bracket" },
  { teams: 64, rounds: 6, games: 63, href: "/64-team-bracket" },
];

export default function EliminationBracketTemplatePage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/elimination-bracket-template")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Elimination Bracket Templates
      </h1>
      <p className="mt-3 text-slate-400">
        Printable brackets you can fill in by hand or customize digitally
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-800/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#0d1220] text-left text-slate-400">
              <th className="px-4 py-3 font-medium">Teams</th>
              <th className="px-4 py-3 font-medium">Rounds</th>
              <th className="px-4 py-3 font-medium">Games</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {templates.map((t, i) => (
              <tr
                key={t.teams}
                className={`border-t border-slate-800/40 ${i % 2 === 0 ? "bg-[#0a0e1a]" : "bg-[#0c1020]"}`}
              >
                <td className="px-4 py-3 font-medium text-white">
                  {t.teams} Teams
                </td>
                <td className="px-4 py-3 text-slate-400">{t.rounds}</td>
                <td className="px-4 py-3 text-slate-400">{t.games}</td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={t.href}
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    View &rarr;
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 prose prose-invert max-w-none">
        <p>
          An elimination bracket template gives you the structure of a
          tournament without the work of drawing it yourself. Each template
          includes pre-drawn matchup lines, labeled rounds, and blank slots
          where you write in team names — either on screen before printing, or
          by hand after. It&apos;s the fastest way to get a bracket on paper and
          posted at your venue.
        </p>
        <p>
          Single elimination is the most common format: one loss and you&apos;re
          done. An 8-team single elimination bracket takes 3 rounds and 7
          games to produce a champion. A 16-team bracket takes 4 rounds and 15
          games. The math is simple — the number of games is always one less
          than the number of teams — which makes scheduling straightforward for
          organizers working with limited court time or field availability.
        </p>
        <p>
          Double elimination adds a losers bracket that gives every team a
          second chance. It requires roughly twice as many games but produces a
          more definitive result, since the champion must be beaten twice. This
          format is popular in esports, cornhole, and beer pong tournaments
          where participants want more playing time for the entry fee. Our Pro
          tier supports double elimination brackets with automatic losers
          bracket routing.
        </p>
        <p>
          Every template exports as a clean PDF sized for standard letter or A4
          paper. Lines are crisp, text is readable, and there&apos;s enough white
          space to write in scores. For printed brackets posted at a gym or
          recreation center, this matters more than fancy graphics — legibility
          from across the room is the goal.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-emerald-500 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
        >
          Create a Bracket — Free
        </Link>
        <Link
          href="/pricing"
          className="rounded-lg border border-slate-700 px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:bg-slate-800 transition-colors"
        >
          View Pro Plans
        </Link>
      </div>
    </LandingPageLayout>
  );
}
