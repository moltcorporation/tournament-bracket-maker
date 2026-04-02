import jsPDF from "jspdf";
import type { BracketData } from "./bracket";
import { getRoundLabel } from "./bracket";

export function generateBracketPDF(
  bracket: BracketData,
  watermark: boolean
): jsPDF {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 10;

  const { rounds, title } = bracket;
  const totalRounds = rounds.length;

  // Title
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(title, pageWidth / 2, margin + 5, { align: "center" });

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text(
    `Single Elimination - ${bracket.teams.length} Teams`,
    pageWidth / 2,
    margin + 11,
    { align: "center" }
  );
  doc.setTextColor(0, 0, 0);

  // Bracket layout
  const bracketTop = margin + 18;
  const bracketWidth = pageWidth - margin * 2;
  const bracketHeight = pageHeight - bracketTop - margin;

  const roundWidth = bracketWidth / totalRounds;
  const firstRoundMatches = rounds[0].length;
  const matchHeight = 12;

  for (let r = 0; r < totalRounds; r++) {
    const roundMatches = rounds[r];
    const x = margin + r * roundWidth;
    const spacing = bracketHeight / roundMatches.length;

    // Round label
    doc.setFontSize(7);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(100, 100, 100);
    doc.text(getRoundLabel(r, totalRounds), x + roundWidth / 2, bracketTop - 2, {
      align: "center",
    });
    doc.setTextColor(0, 0, 0);

    for (let m = 0; m < roundMatches.length; m++) {
      const match = roundMatches[m];
      const y = bracketTop + m * spacing + spacing / 2 - matchHeight / 2;
      const slotW = roundWidth - 8;

      // Match box
      doc.setDrawColor(180, 180, 180);
      doc.setLineWidth(0.3);
      doc.setFillColor(250, 250, 250);
      doc.rect(x + 2, y, slotW, matchHeight / 2, "FD");
      doc.rect(x + 2, y + matchHeight / 2, slotW, matchHeight / 2, "FD");

      // Divider
      doc.setDrawColor(150, 150, 150);
      doc.line(x + 2, y + matchHeight / 2, x + 2 + slotW, y + matchHeight / 2);

      // Team names
      doc.setFontSize(7);
      doc.setFont("helvetica", "normal");
      const t1 = match.team1 || (r === 0 ? "BYE" : "TBD");
      const t2 = match.team2 || (r === 0 ? "BYE" : "TBD");
      doc.text(t1, x + 4, y + matchHeight / 4 + 1.5);
      doc.text(t2, x + 4, y + (matchHeight * 3) / 4 + 1.5);

      // Connector lines to next round
      if (r < totalRounds - 1) {
        const nextSpacing = bracketHeight / rounds[r + 1].length;
        const nextM = Math.floor(m / 2);
        const nextY =
          bracketTop +
          nextM * nextSpacing +
          nextSpacing / 2 -
          matchHeight / 2;
        const lineX = x + 2 + slotW;
        const midY = y + matchHeight / 2;
        const nextX = x + roundWidth + 2;
        const nextMidY = nextY + matchHeight / 2;

        doc.setDrawColor(180, 180, 180);
        doc.setLineWidth(0.3);
        // Horizontal from match
        doc.line(lineX, midY, lineX + 3, midY);
        // Vertical connector
        if (m % 2 === 0) {
          doc.line(lineX + 3, midY, lineX + 3, nextMidY);
        }
        // Horizontal to next match
        if (m % 2 === 0) {
          doc.line(lineX + 3, nextMidY, nextX, nextMidY);
        }
      }
    }
  }

  // Watermark
  if (watermark) {
    doc.setFontSize(36);
    doc.setTextColor(220, 220, 220);
    doc.setFont("helvetica", "bold");
    doc.text("FREE - BracketMaker", pageWidth / 2, pageHeight / 2, {
      align: "center",
      angle: 30,
    });
    doc.setTextColor(0, 0, 0);
  }

  return doc;
}

export function downloadBracketPDF(
  bracket: BracketData,
  watermark: boolean
) {
  const doc = generateBracketPDF(bracket, watermark);
  doc.save(
    `${bracket.title.replace(/[^a-zA-Z0-9]/g, "-")}-bracket.pdf`
  );
}
