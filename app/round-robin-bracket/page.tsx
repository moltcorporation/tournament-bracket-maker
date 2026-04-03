import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title:
    "Round Robin Bracket Maker - Tournament Schedule Generator",
  description:
    "Create round robin tournament schedules where every team plays every other team. Generate fair matchup grids and standings tables. Download print-ready PDFs for leagues and group stages.",
  openGraph: {
    title: "Round Robin Bracket Maker - Fair Tournament Schedules",
    description:
      "Create round robin tournament schedules where every team plays every other team. Generate matchup grids and download PDFs.",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Round Robin Bracket", href: "/round-robin-bracket" },
];

export default function RoundRobinBracketPage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/round-robin-bracket")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Round Robin Bracket Maker
      </h1>
      <p className="mt-3 text-slate-400">
        Every team plays every other team — the fairest format
      </p>

      <div className="mt-8 prose prose-invert max-w-none">
        <p>
          Round robin is the most comprehensive tournament format. Every team
          plays against every other team, guaranteeing that results reflect true
          skill rather than bracket luck. There are no early eliminations and no
          path advantages — the team with the best overall record wins.
        </p>
        <p>
          This format is ideal for league play, group stages, and situations
          where every participant deserves a full schedule of games. Soccer
          leagues worldwide use round robin as their primary format, from the
          English Premier League to local recreational divisions. It is also the
          standard for pool play at volleyball and ultimate frisbee tournaments,
          where groups of four to six teams play round robin before advancing to
          an elimination bracket.
        </p>
        <p>
          The math behind round robin is straightforward: with N teams, you play
          N times (N minus 1) divided by 2 total games. A group of 8 teams plays
          28 games, while 16 teams play 120 games. This is why round robin works
          best for smaller groups or when split into pools. Our tool generates
          balanced schedules that minimize bye rounds and distribute home and
          away assignments as evenly as possible.
        </p>
        <p>
          Round robin tournaments produce the clearest standings and the most
          complete picture of how teams compare. Tiebreakers based on head-to-head
          results, point differential, or other criteria give organizers
          flexibility in resolving close finishes. Our bracket maker creates
          clean round robin schedules with matchup grids and standings tables,
          all exportable as print-ready PDFs. Round robin is a Pro feature —
          upgrade to access it along with double elimination, unlimited teams,
          and custom branding.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
        >
          Try the Bracket Editor
        </Link>
        <Link
          href="/pricing"
          className="rounded-lg border border-slate-700 px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:bg-slate-800 transition-colors"
        >
          Upgrade to Pro
        </Link>
      </div>
    </LandingPageLayout>
  );
}
