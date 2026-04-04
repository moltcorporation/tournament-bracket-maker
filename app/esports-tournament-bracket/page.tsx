import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title:
    "Esports Tournament Bracket Maker - Free Online Bracket Generator",
  description:
    "Create esports tournament brackets for League of Legends, Valorant, CS2, Dota 2, and more. Single or double elimination formats with PDF export. Free for up to 8 teams.",
  openGraph: {
    title: "Esports Tournament Bracket Maker - Free Bracket Generator",
    description:
      "Create esports tournament brackets for LoL, Valorant, CS2, and more. Single or double elimination with PDF export.",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  {
    name: "Esports Tournament Bracket",
    href: "/esports-tournament-bracket",
  },
];

export default function EsportsTournamentBracketPage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/esports-tournament-bracket")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Esports Tournament Bracket Maker
      </h1>
      <p className="mt-3 text-slate-400">
        Run competitive gaming tournaments with clean, shareable brackets
      </p>

      <div className="mt-8 prose prose-invert max-w-none">
        <p>
          Running an esports tournament — whether it is a local LAN party, a
          Discord community event, or an online qualifier — starts with a
          solid bracket. Our bracket maker lets you set up single elimination
          or double elimination brackets in seconds, then share or print them
          for your participants.
        </p>

        <h2>Built for Competitive Gaming</h2>
        <p>
          Esports tournaments have specific needs that generic bracket tools
          miss. Team names in competitive gaming are often longer (clan tags,
          sponsor names, player handles), and organizers need brackets they
          can screenshot and post in Discord or stream overlays. Our brackets
          render as clean SVGs with high contrast text that stays readable at
          any zoom level, making them perfect for sharing in chat or
          displaying on stream.
        </p>

        <h2>Popular Esports Formats</h2>
        <ul>
          <li>
            <strong>Single elimination</strong> — Fast and decisive. One loss
            and you are out. Best for quick community tournaments, showmatches,
            and events with limited time. A 16-team bracket finishes in just
            15 matches.
          </li>
          <li>
            <strong>Double elimination</strong> — The competitive standard.
            Teams get a second chance through the losers bracket, and the
            grand final features a bracket reset if the losers bracket winner
            takes game one. Used in FGC majors, Valorant community cups, and
            most serious competitive events.
          </li>
          <li>
            <strong>Round robin into playoffs</strong> — Groups play round
            robin to seed a single or double elimination playoff bracket. Common
            in league-style seasons and longer events.
          </li>
        </ul>

        <h2>Works with Any Game</h2>
        <p>
          Our bracket maker is game-agnostic — it works for League of
          Legends, Valorant, Counter-Strike 2, Dota 2, Rocket League, Super
          Smash Bros., Street Fighter, Apex Legends, Fortnite, and any other
          competitive title. Enter your team or player names, pick a format,
          and download a bracket PDF you can post in your Discord server,
          print for a LAN event, or embed in a tournament announcement.
        </p>

        <h2>Free to Start</h2>
        <p>
          Create brackets for up to 8 teams completely free — no account
          required. Pro unlocks 64-team brackets, double elimination, custom
          branding with your community logo, and saved bracket history so you
          can track results across a tournament series.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
        >
          Create an Esports Bracket — Free
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
