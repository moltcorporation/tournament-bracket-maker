import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title:
    "Single Elimination Bracket Maker - Free Printable Tournament Brackets",
  description:
    "Create single elimination tournament brackets online for free. Enter teams, generate seeded brackets, and download print-ready PDFs. The fastest way to run a knockout tournament.",
  openGraph: {
    title: "Single Elimination Bracket Maker - Free Printable Brackets",
    description:
      "Create single elimination tournament brackets online for free. Generate seeded brackets and download print-ready PDFs.",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Single Elimination Bracket", href: "/single-elimination-bracket" },
];

export default function SingleEliminationBracketPage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/single-elimination-bracket")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Single Elimination Bracket Maker
      </h1>
      <p className="mt-3 text-slate-400">
        The classic knockout format — lose once and you are out
      </p>

      <div className="mt-8 prose prose-invert max-w-none">
        <p>
          Single elimination is the most widely used tournament format in sports
          and competition. Every matchup is win-or-go-home, creating high-stakes
          games from the very first round. One loss and a team is eliminated,
          making every point, play, and decision matter.
        </p>
        <p>
          This format is popular because it is simple to organize and fast to
          complete. A 16-team single elimination bracket requires only 15 games
          to crown a champion, while a 64-team bracket needs just 63. Compare
          that to round robin, where 16 teams would play 120 games. When time
          and venue availability are limited, single elimination is the practical
          choice.
        </p>
        <p>
          Seeding plays a major role in single elimination brackets. Because
          there are no second chances, the bracket structure determines which
          teams face each other and when. Proper seeding ensures the strongest
          teams are placed on opposite sides of the bracket, reducing the chance
          of top contenders knocking each other out early. Our bracket maker
          automatically applies standard seeding when you enter teams in ranked
          order.
        </p>
        <p>
          Single elimination brackets are used everywhere — from March Madness
          and the FIFA World Cup knockout rounds to local softball tournaments
          and office ping pong championships. The format scales cleanly from 4
          teams to 64 teams, and the bracket visual itself has become iconic in
          sports culture. Our tool generates clean SVG brackets with round
          labels, connector lines, and team names, then exports them as
          print-ready PDFs you can post at your venue or share with participants.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
        >
          Create a Single Elimination Bracket — Free
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
