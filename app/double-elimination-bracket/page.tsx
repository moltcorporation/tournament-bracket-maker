import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title:
    "Double Elimination Bracket Maker - Tournament Brackets with Losers Bracket",
  description:
    "Create double elimination tournament brackets with winners and losers brackets. Every team gets two chances. Download print-ready PDFs for fair, competitive tournaments.",
  openGraph: {
    title: "Double Elimination Bracket Maker - Fair Tournament Brackets",
    description:
      "Create double elimination brackets with winners and losers brackets. Every team gets two chances before elimination.",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Double Elimination Bracket", href: "/double-elimination-bracket" },
];

export default function DoubleEliminationBracketPage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/double-elimination-bracket")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Double Elimination Bracket Maker
      </h1>
      <p className="mt-3 text-slate-400">
        Winners bracket, losers bracket — every team gets a second chance
      </p>

      <div className="mt-8 prose prose-invert max-w-none">
        <p>
          Double elimination tournaments give every team a safety net. A team
          must lose twice to be eliminated, which means a single bad game or
          unlucky matchup does not end their tournament run. The format uses two
          parallel brackets — a winners bracket and a losers bracket — that
          converge in a grand final.
        </p>
        <p>
          When a team loses in the winners bracket, they drop down to the losers
          bracket and continue competing. Teams that keep winning in the losers
          bracket eventually face the winners bracket champion in the grand
          final. If the losers bracket champion wins that game, a reset match is
          played since the winners bracket team has not yet lost twice. This
          structure ensures the most consistent team wins, not just the luckiest.
        </p>
        <p>
          Double elimination is the standard format for competitive esports,
          fighting game tournaments, and beer pong leagues. The Evolution
          Championship Series (EVO), the largest fighting game tournament in the
          world, uses double elimination. It is also common in baseball and
          softball tournaments at the regional and state level, where weather
          delays and travel make every game expensive to schedule.
        </p>
        <p>
          The tradeoff is complexity and time. A double elimination bracket with
          16 teams requires up to 30 games compared to 15 in single elimination.
          But for competitive integrity, many organizers consider it worth the
          extra rounds. Our bracket maker generates clean, readable double
          elimination brackets with both winners and losers paths clearly
          labeled. This is a Pro feature — upgrade to access double elimination
          along with round robin, unlimited teams, and watermark-free PDF
          exports.
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
