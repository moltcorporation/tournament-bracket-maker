import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title:
    "March Madness Bracket - Printable NCAA Tournament Bracket | Bracket Maker",
  description:
    "Create a printable March Madness bracket for your office pool or friend group. 64-team NCAA tournament format with seeded matchups. Download a clean PDF and track the Big Dance.",
  openGraph: {
    title: "March Madness Bracket - Printable NCAA Tournament Bracket",
    description:
      "Create a printable 64-team March Madness bracket. Perfect for office pools and friend groups. Download as PDF.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "March Madness Bracket - Printable NCAA Tournament Bracket",
    description:
      "Create a printable 64-team March Madness bracket for your pool. Download as PDF.",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "March Madness Bracket", href: "/march-madness-bracket" },
];

export default function MarchMadnessBracketPage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/march-madness-bracket")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        March Madness Bracket
      </h1>
      <p className="mt-3 text-slate-400">
        Print a 64-team bracket for your office pool or pick&apos;em group
      </p>

      <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 text-amber-400"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.75h2.25A1.5 1.5 0 0120.25 5.25v1.5a3 3 0 01-3 3h-.044M7.5 3.75H5.25A1.5 1.5 0 003.75 5.25v1.5a3 3 0 003 3h.044M12 15.75v3M9 21h6M7.5 3.75h9v6a4.5 4.5 0 01-9 0v-6z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">
              How March Madness brackets work
            </h2>
            <p className="mt-1.5 text-sm text-slate-400">
              The NCAA Division I Men&apos;s Basketball Tournament is a 68-team
              single-elimination event, with the main bracket featuring 64
              teams divided into four regions of 16. Each region is seeded 1
              through 16, with matchups set so the 1 seed plays the 16, 2
              plays 15, and so on. Six rounds — from the Round of 64 through
              the National Championship — determine one winner.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 prose prose-invert max-w-none">
        <p>
          Bracket pools are the biggest tradition around March Madness. Offices,
          friend groups, and bar leagues print brackets after Selection Sunday,
          everyone fills in their picks, and the person with the most correct
          predictions wins the pot. Our tool lets you create a clean 64-team
          bracket with all four regions, print copies for the group, and have
          everyone fill in their picks by hand — the way it&apos;s been done for
          decades.
        </p>
        <p>
          To set up your March Madness pool bracket, enter the 64 teams from the
          official selection (available the Sunday before the tournament starts).
          The generator will lay them out in proper bracket format with seeding
          that mirrors the NCAA&apos;s structure. Print as many copies as you need —
          one per participant. Each person fills in their predicted winners
          through the championship, and you compare against the actual results
          as the tournament plays out.
        </p>
        <p>
          Beyond the big tournament, March Madness-style brackets are popular
          for any 64-team event: company competitions with 64 employees voting
          on the best snack, classroom projects where students bracket their
          favorite books, or community events pitting 64 local restaurants
          against each other. The format is universally understood — if
          someone has watched one NCAA game, they know how a bracket works.
        </p>
        <p>
          The free tier supports brackets up to 8 teams, which is perfect for
          a single-region mini bracket or a Final Four prediction sheet. For a
          full 64-team March Madness bracket with all four regions, upgrade to
          Pro — you&apos;ll also get watermark-free PDFs and the ability to save
          your bracket for future years.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
        >
          Create a March Madness Bracket — Free
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
