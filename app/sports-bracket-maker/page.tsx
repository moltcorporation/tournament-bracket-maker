import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title: "Sports Bracket Maker - Create Brackets for Any Sport | Bracket Maker",
  description:
    "Make tournament brackets for basketball, football, soccer, esports, and any other sport. Enter teams, choose elimination or round robin, and print a clean PDF bracket.",
  openGraph: {
    title: "Sports Bracket Maker - Brackets for Any Sport",
    description:
      "Create tournament brackets for basketball, football, soccer, esports, and more. Print-ready PDFs in seconds.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sports Bracket Maker - Brackets for Any Sport",
    description:
      "Create tournament brackets for basketball, football, soccer, esports, and more.",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Sports Bracket Maker", href: "/sports-bracket-maker" },
];

const sports = [
  {
    name: "Basketball",
    href: "/basketball-bracket",
    desc: "March Madness pools, youth leagues, 3v3 tournaments",
  },
  {
    name: "Football",
    href: "/football-bracket",
    desc: "Playoff brackets, fantasy football, flag football leagues",
  },
  {
    name: "Soccer",
    href: "/soccer-bracket",
    desc: "Club tournaments, World Cup pools, indoor futsal",
  },
  {
    name: "Esports",
    href: "/esports-bracket",
    desc: "LAN parties, online ladders, streaming tournaments",
  },
  {
    name: "Baseball",
    href: "/editor",
    desc: "Little league playoffs, softball tournaments, rec leagues",
  },
  {
    name: "Volleyball",
    href: "/editor",
    desc: "Beach tournaments, intramural leagues, club championships",
  },
];

export default function SportsBracketMakerPage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/sports-bracket-maker")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Sports Bracket Maker
      </h1>
      <p className="mt-3 text-slate-400">
        One tool for every sport — basketball, football, soccer, and beyond
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {sports.map((sport) => (
          <Link
            key={sport.name}
            href={sport.href}
            className="group rounded-xl border border-slate-800/60 bg-[#0d1220] p-5 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all"
          >
            <h3 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
              {sport.name}
            </h3>
            <p className="mt-1.5 text-sm text-slate-500">{sport.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 prose prose-invert max-w-none">
        <p>
          Every sport has its own bracket culture. Basketball runs single
          elimination from the NCAA tournament down to weekend shootouts at the
          park. Football playoffs follow a seeded bracket where higher seeds get
          home-field advantage. Soccer tournaments often mix group-stage round
          robin play with a knockout bracket in the later rounds. Esports events
          commonly use double elimination to give competitors a second life
          through the losers bracket.
        </p>
        <p>
          Our bracket maker handles all of these formats with one simple
          interface. You don&apos;t need to find a sport-specific tool or template —
          just enter your teams, pick your format, and the bracket is generated
          instantly. The output is a clean PDF that prints well on standard
          paper, whether you&apos;re posting it on the sideline at a youth soccer
          tournament or projecting it on screen at a LAN event.
        </p>
        <p>
          For coaches and league organizers running recurring events, the Pro
          tier adds saved brackets so you can reuse your setup each season,
          custom branding to add your league logo, and watermark-free exports
          that look professional in printed programs and social media posts.
          Whether you run one tournament a year or one a week, the same tool
          scales to fit.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-emerald-500 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
        >
          Create a Sports Bracket — Free
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
