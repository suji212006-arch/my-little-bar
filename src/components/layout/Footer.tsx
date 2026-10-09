import React from "react";
import Link from "next/link";
import { DESTINATIONS } from "@/data/destinations";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FBF7F0] border-t-2 border-[#241714] text-[#321B18] mt-20">
      {/* Decorative awning hem on top */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b-2 border-[#241714]/20">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">
                ☕
              </span>
              <span className="font-serif text-2xl font-black text-[#321B18]">
                My Little Bar
              </span>
            </div>
            <p className="font-handwriting text-xl text-[#A51F32] font-bold">
              &ldquo;Your bar. Your rules. Your recipe.&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-[#321B18]/80 max-w-sm leading-relaxed font-serif">
              A playful Parisian café and beverage laboratory where everyone is
              their own master mixologist. Stir, steep, shake, and celebrate.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#321B18] mb-3">
              Corners of the Bar
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-serif">
              {DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <Link
                    href={`/${dest.id}`}
                    className="text-[#321B18]/80 hover:text-[#A51F32] transition-colors"
                  >
                    • {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#321B18] mb-3">
              Studio
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-serif">
              <li>
                <Link
                  href="/mixer"
                  className="text-[#321B18]/80 hover:text-[#A51F32] transition-colors"
                >
                  • Drink Mixer
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="text-[#321B18]/80 hover:text-[#A51F32] transition-colors"
                >
                  • Personal Blends
                </Link>
              </li>
              <li>
                <Link
                  href="/#mixer-intro"
                  className="text-[#321B18]/80 hover:text-[#A51F32] transition-colors"
                >
                  • How to Mix
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & playful closing */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-[#321B18]/70 font-serif">
          <p>© 2026 My Little Bar • Tous droits réservés.</p>
          <p className="font-handwriting text-base sm:text-lg text-[#A51F32] font-bold">
            Fait avec amour à Paris &bull; Bonne dégustation! 🥐
          </p>
        </div>

        {/* Creator credit */}
        <div className="pt-4 mt-4 border-t border-[#241714]/15 text-center">
          <p className="font-handwriting text-base sm:text-lg text-[#321B18]/90 font-medium tracking-wide">
            A little world of drinks, imagined &amp; created by{" "}
            <span className="font-bold text-[#A51F32] underline decoration-[#D99A2B]/60 underline-offset-2">
              Sujithra
            </span>{" "}
            <span className="text-[#A51F32] inline-block font-sans" aria-hidden="true">
              ♡
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
