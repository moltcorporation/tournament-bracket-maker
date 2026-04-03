import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title: "Basketball Bracket Maker - Free March Madness & Tournament Brackets",
  description:
    "Create basketball tournament brackets for March Madness pools, youth leagues, and pickup tournaments. Enter teams, generate seeded brackets, and download print-ready PDFs.",
  openGraph: {
    title: "Basketball Bracket Maker - Free Tournament Brackets",
    description:
      "Create basketball brackets for March Madness, youth leagues, and tournaments. Download print-ready PDFs.",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Basketball Bracket", href: "/basketball-bracket" },
];

export default function BasketballBracketPage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/basketball-bracket")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Basketball Bracket Maker
      </h1>
      <p className="mt-3 text-slate-400">
        March Madness pools, youth leagues, and pickup tournaments
      </p>

      <div className="mt-8 prose prose-invert max-w-none">
        <p>
          Basketball and tournament brackets go hand in hand. From the NCAA March
          Madness tournament that captivates millions every spring to the weekend
          youth league playoff at your local recreation center, brackets are how
          basketball crowns its champions. Our bracket maker is built to handle
          basketball tournaments of any size, from a 4-team pickup bracket to a
          full 64-team March Madness-style field.
        </p>
        <p>
          For March Madness bracket pools, our tool makes it easy to set up a
          clean 64-team bracket with all four regions. Enter the teams after
          Selection Sunday, print copies for your office pool or friend group,
          and track results as the tournament unfolds. The bracket format is the
          same one used by the NCAA — single elimination with proper seeding that
          places 1 seeds against 16 seeds, 2 against 15, and so on.
        </p>
        <p>
          Youth basketball tournaments typically use 8 or 16 team brackets with
          single elimination. Coaches and league organizers need brackets they
          can print and post at the gym — on the scorer&apos;s table, on the wall by
          the entrance, or in the team binder. Our PDF export is optimized for
          exactly this use case, with clean lines, readable team names, and
          standard paper sizing.
        </p>
        <p>
          For recreational and pickup basketball, a simple 4 or 8 team bracket
          keeps things organized without overcomplicating the day. Our free tier
          supports brackets up to 8 teams in single elimination format — no
          account required. Upgrade to Pro for larger brackets, double
          elimination, round robin pool play, and watermark-free PDFs that look
          professional when posted at your venue.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
        >
          Create a Basketball Bracket — Free
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
