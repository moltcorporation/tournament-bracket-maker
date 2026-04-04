export function breadcrumbJsonLd(
  items: { name: string; href: string }[],
  baseUrl: string = "https://tournament-bracket-maker-moltcorporation.vercel.app"
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${baseUrl}${item.href}`,
    })),
  };
}

export const allCrossLinks = [
  { href: "/4-team-bracket", label: "4 Team Bracket" },
  { href: "/8-team-bracket", label: "8 Team Bracket" },
  { href: "/16-team-bracket", label: "16 Team Bracket" },
  { href: "/32-team-bracket", label: "32 Team Bracket" },
  { href: "/64-team-bracket", label: "64 Team Bracket" },
  { href: "/single-elimination-bracket", label: "Single Elimination Bracket" },
  { href: "/single-elimination-bracket-template", label: "Single Elimination Bracket Template" },
  { href: "/double-elimination-bracket", label: "Double Elimination Bracket" },
  { href: "/round-robin-bracket", label: "Round Robin Bracket" },
  { href: "/basketball-bracket", label: "Basketball Bracket" },
  { href: "/football-bracket", label: "Football Bracket" },
  { href: "/soccer-bracket", label: "Soccer Bracket" },
  { href: "/esports-bracket", label: "Esports Bracket" },
  { href: "/esports-tournament-bracket", label: "Esports Tournament Bracket" },
  { href: "/tournament-bracket-generator", label: "Tournament Bracket Generator" },
  { href: "/sports-bracket-maker", label: "Sports Bracket Maker" },
  { href: "/elimination-bracket-template", label: "Elimination Bracket Template" },
  { href: "/march-madness-bracket", label: "March Madness Bracket" },
  { href: "/free-tournament-brackets", label: "Free Tournament Brackets" },
];

export function getCrossLinks(currentHref: string) {
  return allCrossLinks.filter((link) => link.href !== currentHref);
}
