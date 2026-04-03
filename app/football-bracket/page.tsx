import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title:
    "Football Bracket Maker - Free Playoff & Fantasy Football Brackets",
  description:
    "Create football tournament brackets for fantasy football playoffs, flag football leagues, and Super Bowl pools. Generate seeded brackets and download print-ready PDFs.",
  openGraph: {
    title: "Football Bracket Maker - Playoff & Fantasy Brackets",
    description:
      "Create football brackets for fantasy playoffs, flag football, and Super Bowl pools. Download print-ready PDFs.",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Football Bracket", href: "/football-bracket" },
];

export default function FootballBracketPage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/football-bracket")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Football Bracket Maker
      </h1>
      <p className="mt-3 text-slate-400">
        Fantasy football playoffs, flag football leagues, and more
      </p>

      <div className="mt-8 prose prose-invert max-w-none">
        <p>
          Football tournament brackets are essential for fantasy football
          leagues, flag football tournaments, and playoff prediction pools.
          Whether you are running a 4-team fantasy playoff or organizing a
          16-team flag football tournament for your company, a clean bracket
          keeps everyone informed and engaged.
        </p>
        <p>
          Fantasy football commissioners use brackets to visualize their
          league&apos;s playoff structure. Most fantasy leagues run a 4, 6, or 8 team
          playoff starting in week 14 or 15 of the NFL season. Print the bracket
          and post it in your league&apos;s group chat or hang it on the office wall
          to build excitement. Our bracket maker generates these instantly — enter
          your playoff teams in seeded order and download a clean PDF.
        </p>
        <p>
          Flag football and touch football tournaments are booming in popularity,
          especially at the recreational and corporate level. A weekend flag
          football tournament with 8 or 16 teams needs a bracket that is easy to
          read on a phone, printable for the field, and clear about who plays
          whom and when. Our SVG brackets render beautifully at any size with
          proper round labeling and team name display.
        </p>
        <p>
          For NFL playoff prediction brackets, our tool supports the standard
          formats. Create a bracket with all playoff teams seeded by conference
          standing, print copies for your group, and see who predicted the path
          to the Super Bowl most accurately. The free tier handles brackets up to
          8 teams. Pro unlocks larger fields, double elimination for flag
          football tournaments that want to give teams a second chance, and
          watermark-free exports for a professional look.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
        >
          Create a Football Bracket — Free
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
