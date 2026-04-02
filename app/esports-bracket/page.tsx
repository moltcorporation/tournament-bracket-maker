import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title:
    "Esports Bracket Maker - Free Gaming Tournament Brackets",
  description:
    "Create esports tournament brackets for gaming competitions. Perfect for Smash Bros, Valorant, League of Legends, and fighting game tournaments. Download print-ready PDFs.",
  openGraph: {
    title: "Esports Bracket Maker - Gaming Tournament Brackets",
    description:
      "Create esports brackets for gaming tournaments. Supports all competitive games. Download print-ready PDFs.",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Esports Bracket", href: "/esports-bracket" },
];

export default function EsportsBracketPage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/esports-bracket")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        Esports Bracket Maker
      </h1>
      <p className="mt-3 text-zinc-500">
        Gaming tournaments for any competitive title
      </p>

      <div className="mt-8 prose prose-zinc dark:prose-invert max-w-none">
        <p>
          Esports tournaments run on brackets. Whether you are organizing a
          local Smash Bros weekly, a Valorant community cup, or a League of
          Legends amateur league, a clean bracket is the backbone of your event.
          Our bracket maker generates professional tournament brackets that work
          for any competitive game, from fighting games to shooters to MOBAs.
        </p>
        <p>
          The esports community has strong preferences about bracket formats.
          Fighting game tournaments like EVO and local weeklies almost always use
          double elimination, giving players a second chance through the losers
          bracket. Team-based games like Counter-Strike and Valorant commonly use
          a group stage with round robin pools leading into a single or double
          elimination playoff. Our tool supports all of these formats.
        </p>
        <p>
          For tournament organizers running events at a gaming cafe, college
          campus, or community center, a printed bracket serves as the central
          information hub. Players check in, find their matchups, and report
          results on the bracket. Even in an age of digital tools, a physical
          bracket posted on the wall remains the fastest way to communicate
          tournament progress to a room full of players.
        </p>
        <p>
          Online tournaments benefit from our bracket maker too. Generate a
          bracket image to share in your Discord server, stream overlay, or
          social media posts. The clean SVG rendering looks sharp at any
          resolution. Pro features include double elimination brackets (the
          standard for competitive esports), support for up to 64 players or
          teams, and watermark-free PDFs. Whether you are running a weekly local
          or a regional qualifier, our tool has you covered.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
        >
          Create an Esports Bracket — Free
        </Link>
        <Link
          href="/pricing"
          className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-center text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
        >
          View Pro Plans
        </Link>
      </div>
    </LandingPageLayout>
  );
}
