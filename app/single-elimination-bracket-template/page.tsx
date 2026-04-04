import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title:
    "Single Elimination Bracket Template - Free Printable PDF Download",
  description:
    "Download free single elimination bracket templates for 4 to 64 teams. Print-ready PDFs with seeded or blank brackets. Perfect for tournaments, leagues, and classroom competitions.",
  openGraph: {
    title: "Single Elimination Bracket Template - Free Printable PDF",
    description:
      "Download free single elimination bracket templates for 4 to 64 teams. Print-ready PDFs with seeded or blank brackets.",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  {
    name: "Single Elimination Bracket Template",
    href: "/single-elimination-bracket-template",
  },
];

export default function SingleEliminationBracketTemplatePage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/single-elimination-bracket-template")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Single Elimination Bracket Template
      </h1>
      <p className="mt-3 text-slate-400">
        Ready-to-print bracket templates for any tournament size
      </p>

      <div className="mt-8 prose prose-invert max-w-none">
        <p>
          Need a bracket template you can print and fill in by hand? Or a
          pre-seeded bracket with your team names already in place? Our single
          elimination bracket templates cover tournament sizes from 4 to 64
          teams, with clean layouts designed for printing on standard letter
          or A4 paper.
        </p>

        <h2>Available Template Sizes</h2>
        <p>
          Each template is generated as a crisp PDF with clearly labeled
          rounds, numbered seeds, and connector lines between matchups. Choose
          the size that fits your tournament:
        </p>
        <ul>
          <li>
            <strong>4-team bracket</strong> — 3 games, fits on a single page.
            Great for quick office competitions or semifinal stages.
          </li>
          <li>
            <strong>8-team bracket</strong> — 7 games across 3 rounds. The
            most popular size for recreational leagues and school tournaments.
          </li>
          <li>
            <strong>16-team bracket</strong> — 15 games across 4 rounds.
            Standard for regional competitions and club championships.
          </li>
          <li>
            <strong>32-team bracket</strong> — 31 games across 5 rounds. Used
            in larger leagues and qualifying stages.
          </li>
          <li>
            <strong>64-team bracket</strong> — 63 games across 6 rounds. The
            March Madness format. Prints best on landscape or tabloid paper.
          </li>
        </ul>

        <h2>Blank vs. Pre-filled Templates</h2>
        <p>
          You can generate two types of bracket templates. A blank template
          has empty slots where you write in team names by hand — perfect when
          you are drawing names from a hat or running a live draft. A
          pre-filled template lets you type in all team names first, then
          prints a bracket with names and seeds already placed. Both export as
          high-resolution PDFs with no watermarks on the free tier for
          brackets up to 8 teams.
        </p>

        <h2>How to Use</h2>
        <p>
          Click the button below to open our bracket generator. Select single
          elimination as your format, choose a team count or enter your own
          team names, and hit download. The PDF is generated entirely in your
          browser — no signup required, no data stored on our servers. For
          tournaments larger than 8 teams or custom branding, our Pro plan
          unlocks all sizes and removes the watermark.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
        >
          Generate a Bracket Template — Free
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
