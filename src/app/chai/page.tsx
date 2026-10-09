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
import { ChaiIllustration } from "@/components/illustrations/DestinationIllustrations";
import { INGREDIENTS } from "@/data/ingredients";

// Curated signature recipes for Chai House
const SIGNATURE_CHAI_DRINKS = [
  {
    name: "Royal Cardamom Masala Chai",
    frenchTitle: "Le Chaï Impérial",
    description:
      "A comforting salon classic. Robust Assam black tea simmered with sweet crushed green cardamom and Ceylon cinnamon, softened with sweet whole milk and honey.",
    ingredients: [
      { name: "Assam Black Tea", amount: "120 ml" },
      { name: "Steamed Whole Milk", amount: "100 ml" },
      { name: "Cracked Green Cardamom", amount: "2 pods" },
      { name: "Ceylon Cinnamon", amount: "1 pinch" },
      { name: "Provence Wildflower Honey", amount: "15 ml" },
    ],
    tastingNote: "Malty tannin, eucalyptus sweetness & golden floral honey",
  },
  {
    name: "Uji Jade Cloud Matcha",
    frenchTitle: "Le Nuage de Matcha",
    description:
      "Vibrant ceremonial green tea whisked until frothy, layered over warm oat milk, kissed with Madagascar vanilla, and capped with a fluffy Chantilly cream cloud.",
    ingredients: [
      { name: "Ceremonial Uji Matcha", amount: "45 ml" },
      { name: "Barista Oat Milk", amount: "120 ml" },
      { name: "Madagascar Vanilla Syrup", amount: "15 ml" },
      { name: "Whipped Chantilly Cream", amount: "30 ml" },
    ],
    tastingNote: "Grassy umami, velvety microfoam & delicate vanilla",
  },
  {
    name: "Saffron & Golden Almond Elixir",
    frenchTitle: "L'Élixir d'Or",
    description:
      "A soothing Ayurvedic-inspired infusion. Muscatel Darjeeling first flush paired with warm almond milk, royal Kashmiri saffron threads, zesty ginger, and pistachios.",
    ingredients: [
      { name: "Darjeeling First Flush", amount: "120 ml" },
      { name: "Warm Almond Milk", amount: "100 ml" },
      { name: "Kashmir Saffron Threads", amount: "2 threads" },
      { name: "Fresh Grated Ginger", amount: "6 g" },
      { name: "Crushed Raw Pistachios", amount: "5 g" },
    ],
    tastingNote: "Warm ginger heat, floral saffron perfume & nutty crunch",
  },
];

export default function ChaiPage() {
  const chaiIngredients = INGREDIENTS.filter((i) =>
    i.compatibleDestinations.includes("chai")
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EBDD] text-[#321B18] overflow-x-hidden">
      <Awning height="sm" />
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 space-y-12">
        {/* =========================================
            HERO SECTION: Chai House
            ========================================= */}
        <PaperContainer variant="cream" padding="lg" withPin={true}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Illustrated Emblem */}
            <div className="md:col-span-5 w-44 h-44 sm:w-52 sm:h-52 mx-auto">
              <ChaiIllustration />
            </div>

            {/* Description & Story */}
            <div className="md:col-span-7 text-center md:text-left space-y-4">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <Badge variant="ochre" size="sm" tilt="left">
                  Corner II
                </Badge>
                <Badge variant="espresso" size="sm" isStamp={true}>
                  Botanicals &amp; Kettles
                </Badge>
                <span className="font-handwriting text-xl text-[#D99A2B] font-bold">
                  La Maison du Chaï
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#321B18] leading-tight">
                Chai House
              </h1>

              <p className="font-serif text-sm sm:text-base text-[#321B18]/85 leading-relaxed">
                Step into the aromatic warmth of our tea salon, where copper pots simmer and clay kulhars warm chilly palms. From spiced Assam decoctions and floral Darjeelings to jade-frosted ceremonial matcha, discover deep comfort in every steeped leaf.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
                <Link href="/mixer?destination=chai">
                  <Button variant="ochre" size="lg">
                    Open Mixer with Chai 🫖
                  </Button>
                </Link>
                <Link href="/#destinations">
                  <Button variant="secondary" size="lg">
                    Explore Other Corners
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </PaperContainer>

        <Divider variant="flourish" icon="cup" />

        {/* =========================================
            SIGNATURE CREATIONS
            ========================================= */}
        <section aria-labelledby="chai-signatures-heading" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="ochre" size="sm" tilt="right">
              Recettes Signatures
            </Badge>
            <h2
              id="chai-signatures-heading"
              className="font-serif text-3xl sm:text-4xl font-black text-[#321B18]"
            >
              Signature Chai &amp; Tea Blends
            </h2>
            <p className="font-serif text-xs sm:text-sm text-[#321B18]/75">
              Harmonious tea recipes steeped with whole botanicals, warming spices, and creamy plant milks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SIGNATURE_CHAI_DRINKS.map((drink) => (
              <div
                key={drink.name}
                className="bg-[#FFFDF9] border-2 border-[#241714] rounded-2xl p-5 shadow-[4px_4px_0px_#241714] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#241714]/15">
                    <span className="font-mono text-xs uppercase text-[#D99A2B] font-bold">
                      House Blend
                    </span>
                    <span className="font-handwriting text-base text-[#321B18]/70">
                      {drink.frenchTitle}
                    </span>
                  </div>

                  <h3 className="font-serif font-black text-xl text-[#321B18] mb-2">
                    {drink.name}
                  </h3>

                  <p className="font-serif text-xs text-[#321B18]/80 leading-relaxed mb-4">
                    {drink.description}
                  </p>

                  {/* Ingredients Breakdown */}
                  <div className="bg-[#FAF3E5] p-3 rounded-lg border border-[#241714]/20 space-y-1 mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#321B18]/60 block mb-1">
                      Recipe Proportions:
                    </span>
                    {drink.ingredients.map((ing) => (
                      <div
                        key={ing.name}
                        className="flex justify-between text-xs font-mono text-[#321B18]/90"
                      >
                        <span>• {ing.name}</span>
                        <span className="font-bold">{ing.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#241714]/15 flex items-center justify-between">
                  <span className="text-[11px] font-serif italic text-[#321B18]/70">
                    {drink.tastingNote}
                  </span>
                  <Link href="/mixer?destination=chai">
                    <Button variant="ochre" size="sm">
                      Mix This 🫖
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider variant="wavy" />

        {/* =========================================
            ARTISANAL PANTRY SPOTLIGHT
            ========================================= */}
        <section aria-labelledby="chai-pantry-heading" className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <Badge variant="ochre" size="sm" tilt="left">
              Herbes &amp; Épices
            </Badge>
            <h2
              id="chai-pantry-heading"
              className="font-serif text-2xl sm:text-3xl font-black text-[#321B18]"
            >
              The Spice &amp; Tea Apothecary
            </h2>
            <p className="font-serif text-xs sm:text-sm text-[#321B18]/75">
              Available in the Drink Mixer. Infuse whole spices, sweeten with honey, and whisk ceremonial matcha in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chaiIngredients.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-[#FCF5E8] border-2 border-[#241714] rounded-xl shadow-[3px_3px_0px_#241714] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs uppercase text-[#D99A2B] font-bold">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {item.color && (
                        <span
                          className="w-3 h-3 rounded-full border border-[#241714]"
                          style={{ backgroundColor: item.color }}
                          title={`Color: ${item.color}`}
                        />
                      )}
                      <span className="font-mono text-xs text-[#321B18]/60">
                        Default: {item.defaultUnit}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#321B18]">
                    {item.name}
                  </h3>
                  {item.flavourNote && (
                    <p className="font-serif text-xs text-[#321B18]/75 italic mt-1">
                      &ldquo;{item.flavourNote}&rdquo;
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            PROMINENT MIXER CTA
            ========================================= */}
        <PaperContainer variant="parchment" padding="lg" withTape={true} className="text-center space-y-4">
          <Badge variant="ochre" size="md" tilt="right">
            L&apos;Art du Chaï
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#321B18]">
            Simmer your own tea creation.
          </h2>
          <p className="font-serif text-sm sm:text-base text-[#321B18]/80 max-w-lg mx-auto">
            Choose whole spices, pour warm oat or almond milks, whisk vibrant matcha, and watch your ribbed tea glass fill with layered warmth.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/mixer?destination=chai">
              <Button variant="ochre" size="lg">
                Open Mixer at Chai House 🫖
              </Button>
            </Link>
          </div>
        </PaperContainer>

        {/* =========================================
            CORNER-TO-CORNER NAVIGATION
            ========================================= */}
        <div className="pt-6 border-t-2 border-[#241714]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-xs font-bold uppercase tracking-wider text-[#321B18]/60">
            Stroll to another corner:
          </span>
          <div className="flex flex-wrap gap-2">
            <Link href="/coffee">
              <Button variant="secondary" size="sm">
                ☕ Coffee Barista
              </Button>
            </Link>
            <Link href="/soda">
              <Button variant="secondary" size="sm">
                🫧 Soda Lab
              </Button>
            </Link>
            <Link href="/high-bar">
              <Button variant="secondary" size="sm">
                🍸 High Bar
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                🏠 Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
