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
import { SodaIllustration } from "@/components/illustrations/DestinationIllustrations";
import { INGREDIENTS } from "@/data/ingredients";

// Curated signature recipes for Soda Lab
const SIGNATURE_SODA_DRINKS = [
  {
    name: "Le Pêche Pétillante",
    frenchTitle: "L'Orchard Pétillant",
    description:
      "A sparkling summer refresher. Effervescent club soda layered with tart white peach shrub, freshly squeezed lemon juice, and bruised garden mint.",
    ingredients: [
      { name: "Artisanal Club Soda", amount: "150 ml" },
      { name: "White Peach Shrub", amount: "40 ml" },
      { name: "Fresh Pressed Lemon Juice", amount: "20 ml" },
      { name: "Bruised Garden Mint", amount: "4 leaves" },
      { name: "Chilled Ice Cubes", amount: "4 cubes" },
    ],
    tastingNote: "Sun-ripened stone fruit, tart cider vinegar & cool menthol",
  },
  {
    name: "Sicilian Ruby Spritz",
    frenchTitle: "Le Spritz Écarlate",
    description:
      "A luminous crimson fizz. Sun-drenched blood orange purée paired with delicate elderflower cordial, topped with bubbling lemon-lime soda over ice.",
    ingredients: [
      { name: "Sparkling Lemon-Lime Soda", amount: "120 ml" },
      { name: "Sicilian Blood Orange Purée", amount: "40 ml" },
      { name: "French Elderflower Cordial", amount: "20 ml" },
      { name: "Chilled Ice Cubes", amount: "4 cubes" },
    ],
    tastingNote: "Sweet bittersweet citrus, floral honeysuckle & fine fizz",
  },
  {
    name: "Botanical Paris Cola",
    frenchTitle: "Le Cola des Boulevards",
    description:
      "A bespoke Parisian craft cola elevated with tart fresh key lime juice and aromatic non-alcoholic herb bitters over frosted ice.",
    ingredients: [
      { name: "Parisian Botanical Cola", amount: "120 ml" },
      { name: "Fresh Pressed Lime Juice", amount: "20 ml" },
      { name: "Non-Alcoholic Herb Bitters", amount: "3 dashes" },
      { name: "Chilled Ice Cubes", amount: "4 cubes" },
    ],
    tastingNote: "Spiced cinnamon bark, zesty lime & gentian root balance",
  },
];

export default function SodaPage() {
  const sodaIngredients = INGREDIENTS.filter((i) =>
    i.compatibleDestinations.includes("soda")
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EBDD] text-[#321B18] overflow-x-hidden">
      <Awning height="sm" />
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 space-y-12">
        {/* =========================================
            HERO SECTION: Soda Lab
            ========================================= */}
        <PaperContainer variant="cream" padding="lg" withPin={true}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Illustrated Emblem */}
            <div className="md:col-span-5 w-44 h-44 sm:w-52 sm:h-52 mx-auto">
              <SodaIllustration />
            </div>

            {/* Description & Story */}
            <div className="md:col-span-7 text-center md:text-left space-y-4">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <Badge variant="latte" size="sm" tilt="left">
                  Corner III
                </Badge>
                <Badge variant="ochre" size="sm" isStamp={true}>
                  Fizz &amp; Effervescence
                </Badge>
                <span className="font-handwriting text-xl text-[#321B18] font-bold">
                  Le Laboratoire Pétillant
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#321B18] leading-tight">
                Soda Lab
              </h1>

              <p className="font-serif text-sm sm:text-base text-[#321B18]/85 leading-relaxed">
                Step inside the cheerful effervescence of our Parisian soda fountain! Hear the energetic hiss of vintage glass siphons, smell fresh bruised mint, and stir vibrant fruit shrubs into sparkling waters that tickle the nose.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
                <Link href="/mixer?destination=soda">
                  <Button variant="secondary" size="lg">
                    Open Mixer with Soda 🫧
                  </Button>
                </Link>
                <Link href="/#destinations">
                  <Button variant="outline" size="lg">
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
        <section aria-labelledby="soda-signatures-heading" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="latte" size="sm" tilt="right">
              Recettes Pétillantes
            </Badge>
            <h2
              id="soda-signatures-heading"
              className="font-serif text-3xl sm:text-4xl font-black text-[#321B18]"
            >
              Signature Sparkling Sodas
            </h2>
            <p className="font-serif text-xs sm:text-sm text-[#321B18]/75">
              Crisp fruit shrubs, garden cordials, and effervescent bubbles balanced to perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SIGNATURE_SODA_DRINKS.map((drink) => (
              <div
                key={drink.name}
                className="bg-[#FFFDF9] border-2 border-[#241714] rounded-2xl p-5 shadow-[4px_4px_0px_#241714] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#241714]/15">
                    <span className="font-mono text-xs uppercase text-blue-900 font-bold">
                      Fountain Special
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
                  <div className="bg-[#EDF6F7] p-3 rounded-lg border border-[#241714]/20 space-y-1 mb-4">
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
                  <Link href="/mixer?destination=soda">
                    <Button variant="secondary" size="sm">
                      Mix This 🫧
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
        <section aria-labelledby="soda-pantry-heading" className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <Badge variant="latte" size="sm" tilt="left">
              Fruits &amp; Siphons
            </Badge>
            <h2
              id="soda-pantry-heading"
              className="font-serif text-2xl sm:text-3xl font-black text-[#321B18]"
            >
              The Soda Fountain Pantry
            </h2>
            <p className="font-serif text-xs sm:text-sm text-[#321B18]/75">
              Available in the Drink Mixer. Blend sparkling waters with fruit purees, mint, and ice in a highball glass.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sodaIngredients.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-[#EDF6F7] border-2 border-[#241714] rounded-xl shadow-[3px_3px_0px_#241714] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs uppercase text-blue-900 font-bold">
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
          <Badge variant="latte" size="md" tilt="right">
            Fontaine Pétillante
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#321B18]">
            Stir up a bubbly confection.
          </h2>
          <p className="font-serif text-sm sm:text-base text-[#321B18]/80 max-w-lg mx-auto">
            Choose sparkling sodas, crush fresh berries and citrus, drop in chilled ice, and watch effervescent bubbles dance in your tall highball glass.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/mixer?destination=soda">
              <Button variant="primary" size="lg">
                Open Mixer at Soda Lab 🧪
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
            <Link href="/chai">
              <Button variant="secondary" size="sm">
                🫖 Chai House
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
