import type { Metadata } from "next";
import { Playfair_Display, Lora, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "My Little Bar | Your bar. Your rules. Your recipe.",
  description:
    "An interactive virtual barista and drink-mixing studio inspired by hand-drawn Parisian cafés.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-[#D99A2B]/30 selection:text-[#321B18]">
        {children}
      </body>
    </html>
  );
}
