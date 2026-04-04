import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title:
    "Tournament Bracket Generator - Create Brackets Instantly | Bracket Maker",
  description:
    "Generate tournament brackets in seconds. Enter team names, pick a format, and download a print-ready PDF. Supports 4 to 64 teams with single elimination, double elimination, and round robin.",
  openGraph: {
    title: "Tournament Bracket Generator - Create Brackets Instantly",
    description:
      "Generate tournament brackets in seconds. Enter teams, pick a format, download a PDF. 4 to 64 teams supported.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tournament Bracket Generator - Create Brackets Instantly",
    description:
      "Generate tournament brackets in seconds. Enter teams, pick a format, download a PDF.",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Tournament Bracket Generator", href: "/tournament-bracket-generator" },
];

export default function TournamentBracketGeneratorPage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/tournament-bracket-generator")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Tournament Bracket Generator
      </h1>
      <p className="mt-3 text-slate-400">
        Build any bracket in under a minute — no sign-up required
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          {
            step: "1",
            title: "Enter Teams",
            desc: "Type or paste your team names, one per line. Works with 4 to 64 teams.",
          },
          {
            step: "2",
            title: "Pick a Format",
            desc: "Single elimination, double elimination, or round robin pool play.",
          },
          {
            step: "3",
            title: "Download PDF",
            desc: "Get a clean, print-ready bracket sized for standard paper.",
          },
        ].map((item) => (
          <div
            key={item.step}
            className="rounded-xl border border-slate-800/60 bg-[#0d1220] p-5"
          >
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-sm font-bold text-emerald-400 border border-emerald-500/20">
              {item.step}
            </div>
            <h3 className="text-sm font-semibold text-white">{item.title}</h3>
            <p className="mt-1.5 text-sm text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 prose prose-invert max-w-none">
        <p>
          A tournament bracket generator takes the tedious work out of organizing
          competitions. Instead of drawing lines on a whiteboard or wrestling
          with spreadsheet templates, you enter your participants and the
          generator handles seeding, matchup placement, and visual layout
          automatically. The result is a bracket that looks professional whether
          you print it for a gym wall or share it digitally with your league.
        </p>
        <p>
          Our generator supports the three most common tournament formats.
          Single elimination is the classic — lose once and you&apos;re out — ideal
          when time is limited and you need a decisive winner. Double
          elimination gives every team a second chance through a losers bracket,
          which is fairer but takes roughly twice as many games. Round robin
          lets every team play every other team, producing the most complete
          ranking at the cost of more rounds.
        </p>
        <p>
          The generator works entirely in your browser. Your team names never
          leave your device, there&apos;s no account to create, and you can generate
          as many brackets as you need. The free tier covers brackets up to 8
          teams in single elimination. Pro unlocks all team sizes, every format,
          saved brackets, custom branding, and watermark-free exports.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
        <h2 className="text-base font-semibold text-white">
          What you get with the generator
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-slate-400">
          {[
            "4 to 64 team brackets",
            "Single, double, round robin",
            "Automatic seeding",
            "Print-ready PDF export",
            "Clean, readable layout",
            "Works on any device",
          ].map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-0.5 text-emerald-400">&#10003;</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-emerald-500 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
        >
          Generate a Bracket — Free
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
