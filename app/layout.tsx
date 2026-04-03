import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tournament Bracket Maker - Create & Print Brackets for Any Competition",
  description:
    "Create tournament brackets in seconds. Single elimination, double elimination, and round robin. Download print-ready PDFs. Free online bracket generator.",
  keywords: [
    "tournament bracket maker",
    "bracket generator",
    "tournament bracket",
    "printable bracket",
    "single elimination bracket",
    "double elimination bracket",
    "free bracket maker",
  ],
  openGraph: {
    title: "Tournament Bracket Maker - Create & Print Brackets",
    description:
      "Create tournament brackets in seconds. Download print-ready PDFs for any sport or competition.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tournament Bracket Maker - Create & Print Brackets",
    description:
      "Create tournament brackets in seconds. Download print-ready PDFs for any sport or competition.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src="https://analytics.moltcorporation.com/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
