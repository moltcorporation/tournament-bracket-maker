import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title:
    "Soccer Bracket Maker - Free Tournament Brackets for Football & Futsal",
  description:
    "Create soccer tournament brackets for World Cup pools, youth soccer leagues, and futsal tournaments. Generate seeded brackets and download print-ready PDFs.",
  openGraph: {
    title: "Soccer Bracket Maker - Tournament Brackets for Football & Futsal",
    description:
      "Create soccer brackets for World Cup pools, youth leagues, and futsal. Download print-ready PDFs.",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Soccer Bracket", href: "/soccer-bracket" },
];

export default function SoccerBracketPage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/soccer-bracket")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Soccer Bracket Maker
      </h1>
      <p className="mt-3 text-slate-400">
        World Cup pools, youth leagues, and futsal tournaments
      </p>

      <div className="mt-8 prose prose-invert max-w-none">
        <p>
          Soccer tournaments use brackets at every level, from the FIFA World
          Cup knockout rounds watched by billions to the Saturday morning youth
          tournament at your local park. With the 2026 World Cup expanding to 48
          teams and being held across North America, interest in soccer brackets
          is surging. Our bracket maker helps you create clean, professional
          brackets for any soccer competition.
        </p>
        <p>
          Youth soccer tournaments are one of the most common uses for printable
          brackets. Travel teams, recreational leagues, and club tournaments
          regularly run 8 or 16 team events that need a bracket posted at the
          field complex. Coaches, parents, and players all check the bracket to
          know their next opponent and track results. A clean, readable bracket
          printed on standard paper is a tournament essential.
        </p>
        <p>
          Many soccer tournaments combine round robin group stages with a single
          elimination knockout round. Teams are divided into groups of 4, play
          round robin within their group, and the top finishers advance to an
          elimination bracket. Our tool supports both formats — use round robin
          for group play and single elimination for the knockout stage. Pro users
          can create both and print them together for a complete tournament
          packet.
        </p>
        <p>
          For World Cup prediction brackets and office pools, create a bracket
          with qualified nations and distribute printed copies to participants.
          The 2026 FIFA World Cup in the United States, Mexico, and Canada will
          feature a new expanded format, making brackets even more central to
          following the tournament. Our free tier supports brackets up to 8
          teams, while Pro unlocks larger tournaments, round robin scheduling,
          and watermark-free PDFs.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
        >
          Create a Soccer Bracket — Free
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
