"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Awning,
  Badge,
  Button,
  Divider,
  PaperContainer,
} from "@/components/ui";
import { CafeInteriorIllustration } from "@/components/illustrations/CafeInteriorIllustration";
import {
  CoffeeIllustration,
  ChaiIllustration,
  SodaIllustration,
  HighBarIllustration,
} from "@/components/illustrations/DestinationIllustrations";
import { DESTINATIONS } from "@/data/destinations";
import { useDisplayName } from "@/hooks/useDisplayName";

export default function Home() {
  const { displayName } = useDisplayName();

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EBDD] text-[#321B18] overflow-x-hidden">
      {/* Parisian Café Awning Banner */}
      <Awning height="md" />

      {/* Navigation */}
      <Navbar />

      <main className="flex-1 w-full space-y-16 sm:space-y-24 pb-20">
        {/* =========================================
            HERO SECTION
            ========================================= */}
        <section
          aria-labelledby="hero-title"
          className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="cherry" size="sm" tilt="left" isStamp={true}>
                  Atelier Virtuel
                </Badge>
                <span className="font-handwriting text-xl sm:text-2xl text-[#A51F32] font-bold">
                  Bienvenue au comptoir!
                </span>
              </div>

              <h1
                id="hero-title"
                className="font-serif text-4xl sm:text-5xl xl:text-6xl font-black text-[#321B18] leading-[1.1] tracking-tight"
              >
                Your bar. <br />
                Your rules. <br />
                <span className="text-[#A51F32] italic">Your recipe.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#321B18]/85 font-serif leading-relaxed max-w-md mx-auto lg:mx-0">
                Step behind the counter, mix a little magic, and create something
                that&apos;s entirely yours. No corporate menus, no strict formulas—just pure flavour and curiosity.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/mixer" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Enter the bar 🍸
                  </Button>
                </Link>
                <Link href="#destinations" className="w-full sm:w-auto">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Explore the menu 📜
                  </Button>
                </Link>
              </div>

              {/* Hand-written Barista Note */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#321B18]/70">
                <span className="text-base">☕</span>
                <span className="font-handwriting text-lg sm:text-xl text-[#321B18] font-bold">
                  Today&apos;s special barista on duty:{" "}
                  <span className="text-[#A51F32] underline decoration-[#D99A2B]">
                    {displayName}
                  </span>
                </span>
              </div>
            </div>

            {/* Right Column: Hand-Drawn Parisian Café Interior Illustration */}
            <div className="lg:col-span-7 relative">
              {/* Decorative vintage pin in corner */}
              <div
                className="absolute -top-3 -right-2 z-20 hidden sm:block"
                aria-hidden="true"
              >
                <Badge variant="ochre" size="md" tilt="right">
                  Est. 1924 Paris
                </Badge>
              </div>

              {/* The Hero Illustration */}
              <CafeInteriorIllustration />

              {/* Handwritten caption sticker */}
              <div className="mt-3 text-center lg:text-right">
                <span className="font-handwriting text-base sm:text-lg text-[#321B18]/80 font-bold">
                  ✎ The brass counter at 42 Rue des Petits Bars, Paris
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4">
          <Divider variant="flourish" icon="cup" />
        </div>

        {/* =========================================
            FOUR BAR DESTINATIONS
            ========================================= */}
        <section
          id="destinations"
          aria-labelledby="destinations-title"
          className="max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-24"
        >
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <Badge variant="ochre" size="md" tilt="right">
              Quatre Destinations
            </Badge>
            <h2
              id="destinations-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#321B18]"
            >
              Pick your corner of the bar.
            </h2>
            <p className="font-serif text-base text-[#321B18]/80">
              Four curated realms of flavor. Step inside each workshop to discover
              artisanal bases, botanical infusions, syrups, and sparkling siphons.
            </p>
          </div>

          {/* Distinct Non-Generic Destination Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. Coffee Barista */}
            <div className="relative group">
              <div className="h-full bg-[#F5EADA] rounded-2xl border-2 border-[#241714] p-6 sm:p-8 shadow-[5px_5px_0px_#241714] flex flex-col justify-between transition-transform duration-150 hover:-translate-y-1">
                {/* Washi tape detail */}
                <div
                  className="absolute -top-3.5 left-10 w-24 h-5 bg-[#D5B99A]/80 border border-[#241714]/40 rotate-1 backdrop-blur-xs pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="espresso" size="sm" tilt="left">
                      Espresso &amp; Roasts
                    </Badge>
                    <span className="font-handwriting text-lg text-[#A51F32] font-bold">
                      Le Bar à Café
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-4">
                    <div className="sm:col-span-4 w-28 h-28 mx-auto sm:mx-0">
                      <CoffeeIllustration />
                    </div>
                    <div className="sm:col-span-8">
                      <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#321B18] mb-1">
                        Coffee Barista
                      </h3>
                      <p className="text-xs sm:text-sm font-serif italic text-[#A51F32] font-semibold mb-2">
                        {DESTINATIONS[0].tagline}
                      </p>
                      <p className="text-xs sm:text-sm font-serif text-[#321B18]/80 leading-relaxed">
                        {DESTINATIONS[0].description}
                      </p>
                    </div>
                  </div>

                  {/* Flavor ingredients note */}
                  <div className="bg-[#FAF6EE] p-2.5 rounded-lg border border-[#241714]/20 text-xs font-mono text-[#321B18]/90 mb-5">
                    <strong>Pantry:</strong> Dark roast espresso, oat milk, hazelnut, vanilla syrup, cold brew.
                  </div>
                </div>

                <div className="pt-2 border-t border-[#241714]/20 flex items-center justify-between">
                  <span className="text-xs font-handwriting text-xl text-[#321B18]/70">
                    Pull a fresh shot
                  </span>
                  <Link href="/coffee">
                    <Button variant="primary" size="sm">
                      Step inside ☕
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Chai House */}
            <div className="relative group">
              <div className="h-full bg-[#FCF4E6] rounded-2xl border-2 border-[#241714] p-6 sm:p-8 shadow-[5px_5px_0px_#241714] flex flex-col justify-between transition-transform duration-150 hover:-translate-y-1">
                {/* Brass pin detail */}
                <div
                  className="absolute -top-3 right-10 w-6 h-6 rounded-full bg-[#D99A2B] border-2 border-[#241714] shadow-[1px_1px_0px_#241714] flex items-center justify-center z-10"
                  aria-hidden="true"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#321B18]/60" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="ochre" size="sm" tilt="right">
                      Spices &amp; Infusions
                    </Badge>
                    <span className="font-handwriting text-lg text-[#D99A2B] font-bold">
                      La Maison du Chaï
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-4">
                    <div className="sm:col-span-4 w-28 h-28 mx-auto sm:mx-0">
                      <ChaiIllustration />
                    </div>
                    <div className="sm:col-span-8">
                      <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#321B18] mb-1">
                        Chai House
                      </h3>
                      <p className="text-xs sm:text-sm font-serif italic text-[#D99A2B] font-semibold mb-2">
                        {DESTINATIONS[1].tagline}
                      </p>
                      <p className="text-xs sm:text-sm font-serif text-[#321B18]/80 leading-relaxed">
                        {DESTINATIONS[1].description}
                      </p>
                    </div>
                  </div>

                  {/* Flavor ingredients note */}
                  <div className="bg-[#FAF6EE] p-2.5 rounded-lg border border-[#241714]/20 text-xs font-mono text-[#321B18]/90 mb-5">
                    <strong>Pantry:</strong> Spiced Assam chai, ceremonial matcha, green cardamom, honey, cinnamon.
                  </div>
                </div>

                <div className="pt-2 border-t border-[#241714]/20 flex items-center justify-between">
                  <span className="text-xs font-handwriting text-xl text-[#321B18]/70">
                    Steep &amp; froth
                  </span>
                  <Link href="/chai">
                    <Button variant="ochre" size="sm">
                      Step inside 🫖
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Soda Lab */}
            <div className="relative group">
              <div className="h-full bg-[#EDF6F7] rounded-2xl border-2 border-[#241714] p-6 sm:p-8 shadow-[5px_5px_0px_#241714] flex flex-col justify-between transition-transform duration-150 hover:-translate-y-1">
                {/* Washi tape detail */}
                <div
                  className="absolute -top-3.5 left-12 w-20 h-5 bg-[#D5B99A]/80 border border-[#241714]/40 -rotate-2 backdrop-blur-xs pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="latte" size="sm">
                      Sparkling Siphons
                    </Badge>
                    <span className="font-handwriting text-lg text-[#321B18] font-bold">
                      Le Laboratoire Pétillant
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-4">
                    <div className="sm:col-span-4 w-28 h-28 mx-auto sm:mx-0">
                      <SodaIllustration />
                    </div>
                    <div className="sm:col-span-8">
                      <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#321B18] mb-1">
                        Soda Lab
                      </h3>
                      <p className="text-xs sm:text-sm font-serif italic text-[#321B18] font-semibold mb-2">
                        {DESTINATIONS[2].tagline}
                      </p>
                      <p className="text-xs sm:text-sm font-serif text-[#321B18]/80 leading-relaxed">
                        {DESTINATIONS[2].description}
                      </p>
                    </div>
                  </div>

                  {/* Flavor ingredients note */}
                  <div className="bg-[#FAF6EE] p-2.5 rounded-lg border border-[#241714]/20 text-xs font-mono text-[#321B18]/90 mb-5">
                    <strong>Pantry:</strong> Fizzy club soda, white peach shrub, lemon tonic, basil sprigs, crushed ice.
                  </div>
                </div>

                <div className="pt-2 border-t border-[#241714]/20 flex items-center justify-between">
                  <span className="text-xs font-handwriting text-xl text-[#321B18]/70">
                    Bubbles &amp; botanicals
                  </span>
                  <Link href="/soda">
                    <Button variant="secondary" size="sm">
                      Step inside 🫧
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. High Bar */}
            <div className="relative group">
              <div className="h-full bg-[#FAECEF] rounded-2xl border-2 border-[#241714] p-6 sm:p-8 shadow-[5px_5px_0px_#241714] flex flex-col justify-between transition-transform duration-150 hover:-translate-y-1">
                {/* Vintage stamp */}
                <div
                  className="absolute -top-3 right-8 z-10"
                  aria-hidden="true"
                >
                  <Badge variant="cherry" size="sm" isStamp={true}>
                    Mocktail Mode
                  </Badge>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="cherry" size="sm" tilt="left">
                      High Bar 21+
                    </Badge>
                    <span className="font-handwriting text-lg text-[#A51F32] font-bold">
                      Le Bar de Nuit
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-4">
                    <div className="sm:col-span-4 w-28 h-28 mx-auto sm:mx-0">
                      <HighBarIllustration />
                    </div>
                    <div className="sm:col-span-8">
                      <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#321B18] mb-1">
                        High Bar
                      </h3>
                      <p className="text-xs sm:text-sm font-serif italic text-[#A51F32] font-semibold mb-2">
                        {DESTINATIONS[3].tagline}
                      </p>
                      <p className="text-xs sm:text-sm font-serif text-[#321B18]/80 leading-relaxed">
                        {DESTINATIONS[3].description}
                      </p>
                    </div>
                  </div>

                  {/* Flavor ingredients note */}
                  <div className="bg-[#FAF6EE] p-2.5 rounded-lg border border-[#241714]/20 text-xs font-mono text-[#321B18]/90 mb-5">
                    <strong>Pantry:</strong> French vermouth, aromatic bitters, bourbon, zero-proof botanicals, cherry garnish.
                  </div>
                </div>

                <div className="pt-2 border-t border-[#241714]/20 flex items-center justify-between">
                  <span className="text-xs font-handwriting text-xl text-[#321B18]/70">
                    Shake or stir
                  </span>
                  <Link href="/high-bar">
                    <Button variant="primary" size="sm">
                      Step inside 🍸
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4">
          <Divider variant="wavy" />
        </div>

        {/* =========================================
            INTRODUCTION TO THE MIXING EXPERIENCE
            ========================================= */}
        <section
          id="mixer-intro"
          aria-labelledby="mixer-intro-title"
          className="max-w-5xl mx-auto px-4 sm:px-6"
        >
          <PaperContainer variant="cream" padding="lg" withPin={true}>
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <Badge variant="cherry" size="md" tilt="right">
                L&apos;Art du Mélange
              </Badge>
              <h2
                id="mixer-intro-title"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#321B18]"
              >
                A little of this. A little of that.
              </h2>
              <p className="font-serif text-base text-[#321B18]/80 leading-relaxed">
                Pick your ingredients, play with the proportions, give your
                creation a name, and make it yours. There are no culinary rules
                here—only happy accidents.
              </p>
            </div>

            {/* Playful Step-by-Step Chalkboard Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#F4EBDD] border-2 border-[#241714] shadow-[3px_3px_0px_#241714] text-center">
                <span className="w-8 h-8 rounded-full bg-[#A51F32] text-[#FBF7F0] font-serif font-bold inline-flex items-center justify-center text-sm border border-[#241714] mb-2">
                  1
                </span>
                <h4 className="font-serif font-bold text-base text-[#321B18] mb-1">
                  Choose a Base
                </h4>
                <p className="text-xs font-serif text-[#321B18]/80">
                  Espresso, Assam tea, tonic, or spirits.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4EBDD] border-2 border-[#241714] shadow-[3px_3px_0px_#241714] text-center">
                <span className="w-8 h-8 rounded-full bg-[#D99A2B] text-[#241714] font-serif font-bold inline-flex items-center justify-center text-sm border border-[#241714] mb-2">
                  2
                </span>
                <h4 className="font-serif font-bold text-base text-[#321B18] mb-1">
                  Splash Botanicals
                </h4>
                <p className="text-xs font-serif text-[#321B18]/80">
                  Vanilla syrups, spices, fruit &amp; milks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4EBDD] border-2 border-[#241714] shadow-[3px_3px_0px_#241714] text-center">
                <span className="w-8 h-8 rounded-full bg-[#321B18] text-[#F4EBDD] font-serif font-bold inline-flex items-center justify-center text-sm border border-[#241714] mb-2">
                  3
                </span>
                <h4 className="font-serif font-bold text-base text-[#321B18] mb-1">
                  Tune Measures
                </h4>
                <p className="text-xs font-serif text-[#321B18]/80">
                  Dial in milliliters, ounces, and splashes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4EBDD] border-2 border-[#241714] shadow-[3px_3px_0px_#241714] text-center">
                <span className="w-8 h-8 rounded-full bg-[#D5B99A] text-[#241714] font-serif font-bold inline-flex items-center justify-center text-sm border border-[#241714] mb-2">
                  4
                </span>
                <h4 className="font-serif font-bold text-base text-[#321B18] mb-1">
                  Name Your Drink
                </h4>
                <p className="text-xs font-serif text-[#321B18]/80">
                  Stamp it into your personal notebook.
                </p>
              </div>
            </div>

            {/* Big Action Call */}
            <div className="text-center pt-2">
              <Link href="/mixer">
                <Button variant="primary" size="lg">
                  Start mixing your first drink 🧪
                </Button>
              </Link>
            </div>
          </PaperContainer>
        </section>

        <div className="max-w-4xl mx-auto px-4">
          <Divider variant="dashed" />
        </div>

        {/* =========================================
            RECIPE JOURNAL TEASER
            ========================================= */}
        <section
          aria-labelledby="journal-teaser-title"
          className="max-w-5xl mx-auto px-4 sm:px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#FAF6EE] border-2 border-[#241714] rounded-2xl p-6 sm:p-10 shadow-[6px_6px_0px_#241714]">
            {/* Left Column: Story & Call to action */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="ochre" size="sm" tilt="left">
                  Carnet Personnel
                </Badge>
                <span className="font-handwriting text-xl text-[#A51F32] font-bold">
                  La Collection Privée
                </span>
              </div>

              <h2
                id="journal-teaser-title"
                className="font-serif text-3xl sm:text-4xl font-black text-[#321B18] leading-tight"
              >
                Every good experiment deserves a page.
              </h2>

              <p className="font-serif text-sm sm:text-base text-[#321B18]/85 leading-relaxed">
                Whether you struck gold on a cinnamon cardamom flat white or
                invented a refreshing lavender peach fizz, save your proportions in{" "}
                <strong className="text-[#A51F32]">
                  Blends by {displayName}
                </strong>
                . Revisit your personal blends anytime, tweak ingredients, and build
                your private collection over time.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Link href="/journal">
                  <Button variant="ochre" size="md">
                    Open Blends by {displayName} 📖
                  </Button>
                </Link>
                <span className="text-xs font-serif text-[#321B18]/60 italic">
                  Local browser notebook &bull; No login required
                </span>
              </div>
            </div>

            {/* Right Column: Hand-drawn Recipe Slip Preview */}
            <div className="md:col-span-5 relative">
              <div className="bg-[#FFFDF9] border-2 border-[#241714] rounded-lg p-5 shadow-[4px_4px_0px_#241714] rotate-2">
                {/* Red café stamp in header */}
                <div className="flex items-center justify-between border-b-2 border-dashed border-[#241714]/30 pb-2 mb-3">
                  <span className="font-mono text-xs text-[#321B18]/70">
                    N° 0042 &bull; PARIS
                  </span>
                  <Badge variant="cherry" size="sm" isStamp={true}>
                    SAVED
                  </Badge>
                </div>

                <h3 className="font-serif font-black text-xl text-[#321B18]">
                  Le Pêche Pétillante
                </h3>
                <p className="font-handwriting text-sm text-[#A51F32] font-semibold mb-3">
                  By {displayName}
                </p>

                <div className="space-y-1.5 text-xs font-mono text-[#321B18]/90 mb-3">
                  <div className="flex justify-between">
                    <span>• White Peach Purée</span>
                    <span className="font-bold">45 ml</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Sparkling Tonic</span>
                    <span className="font-bold">120 ml</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Fresh Thyme Sprig</span>
                    <span className="font-bold">1 sprig</span>
                  </div>
                </div>

                <div className="text-[11px] font-serif italic text-[#321B18]/70 pt-2 border-t border-[#241714]/20">
                  &ldquo;Stir gently over cracked ice; aroma blossoms with warmth.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Parisian Footer */}
      <Footer />
    </div>
  );
}
