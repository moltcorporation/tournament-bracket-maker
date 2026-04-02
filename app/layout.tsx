import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
