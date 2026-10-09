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
import { CoffeeIllustration } from "@/components/illustrations/DestinationIllustrations";
import { INGREDIENTS } from "@/data/ingredients";

// Curated signature recipes for Coffee Barista
const SIGNATURE_COFFEE_DRINKS = [
  {
    name: "Café Crème Ristretto",
    frenchTitle: "La Crème Parisienne",
    description:
      "A silky Parisian morning staple. A concentrated ristretto shot poured beneath sweet steamed whole milk with a dusting of Dutch cocoa.",
    ingredients: [
      { name: "Dark Roast Espresso", amount: "60 ml" },
      { name: "Steamed Whole Milk", amount: "120 ml" },
      { name: "Madagascar Vanilla Syrup", amount: "15 ml" },
      { name: "Dutch Cocoa Powder", amount: "1 pinch" },
    ],
    tastingNote: "Velvety microfoam, dark cacao & warm vanilla bean",
  },
  {
    name: "Montmartre Salted Mocha",
    frenchTitle: "Le Moka Salé",
    description:
      "Inspired by the bohemian chocolatiers of Montmartre. Slow-steeped cold brew blended with melted Valrhona fudge sauce and Brittany salted caramel.",
    ingredients: [
      { name: "Cold Brew Concentrate", amount: "100 ml" },
      { name: "Dark Mocha Fudge Sauce", amount: "30 ml" },
      { name: "Salted Caramel Drizzle", amount: "15 ml" },
      { name: "Barista Oat Milk", amount: "80 ml" },
      { name: "Dark Chocolate Shavings", amount: "5 g" },
    ],
    tastingNote: "Bittersweet chocolate, buttery caramel & toasted oat",
  },
  {
    name: "Praline Iced Velvet",
    frenchTitle: "Le Velours Glacé",
    description:
      "A crisp chilled indulgence for warm afternoons. Double espresso shaken over roasted French hazelnut syrup and floated with rich double cream.",
    ingredients: [
      { name: "Dark Roast Espresso", amount: "60 ml" },
      { name: "Roasted Hazelnut Syrup", amount: "20 ml" },
      { name: "Rich Double Cream", amount: "40 ml" },
      { name: "Chilled Ice Cubes", amount: "4 cubes" },
    ],
    tastingNote: "Toasted praline, clinking frost & decadent creaminess",
  },
];

export default function CoffeePage() {
  const coffeeIngredients = INGREDIENTS.filter((i) =>
    i.compatibleDestinations.includes("coffee")
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EBDD] text-[#321B18] overflow-x-hidden">
      <Awning height="sm" />
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 space-y-12">
        {/* =========================================
            HERO SECTION: Coffee Barista
            ========================================= */}
        <PaperContainer variant="cream" padding="lg" withPin={true}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Illustrated Emblem */}
            <div className="md:col-span-5 w-44 h-44 sm:w-52 sm:h-52 mx-auto">
              <CoffeeIllustration />
            </div>

            {/* Description & Story */}
            <div className="md:col-span-7 text-center md:text-left space-y-4">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <Badge variant="espresso" size="sm" tilt="left">
                  Corner I
                </Badge>
                <Badge variant="ochre" size="sm" isStamp={true}>
                  Dark Roasts &amp; Crema
                </Badge>
                <span className="font-handwriting text-xl text-[#A51F32] font-bold">
                  Le Bar à Café
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#321B18] leading-tight">
                Coffee Barista
              </h1>

              <p className="font-serif text-sm sm:text-base text-[#321B18]/85 leading-relaxed">
                Step up to the polished brass counter where dark-roasted beans crackle and velvet microfoam flows. From dense, chocolatey ristrettos to 18-hour cold brews and chilled hazelnut creams, master the time-honoured art of Parisian coffee-making.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
                <Link href="/mixer?destination=coffee">
                  <Button variant="primary" size="lg">
                    Open Mixer with Coffee ☕
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
        <section aria-labelledby="coffee-signatures-heading" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="cherry" size="sm" tilt="right">
              Recettes Signatures
            </Badge>
            <h2
              id="coffee-signatures-heading"
              className="font-serif text-3xl sm:text-4xl font-black text-[#321B18]"
            >
              Signature Coffee Creations
            </h2>
            <p className="font-serif text-xs sm:text-sm text-[#321B18]/75">
              Tried-and-true recipes crafted from our house coffee pantry. Mix them as-is or use them as springboards for your own inventions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SIGNATURE_COFFEE_DRINKS.map((drink) => (
              <div
                key={drink.name}
                className="bg-[#FFFDF9] border-2 border-[#241714] rounded-2xl p-5 shadow-[4px_4px_0px_#241714] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#241714]/15">
                    <span className="font-mono text-xs uppercase text-[#A51F32] font-bold">
                      Barista Special
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
                  <div className="bg-[#F8EFE4] p-3 rounded-lg border border-[#241714]/20 space-y-1 mb-4">
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
                  <Link href="/mixer?destination=coffee">
                    <Button variant="secondary" size="sm">
                      Mix This ☕
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
        <section aria-labelledby="coffee-pantry-heading" className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <Badge variant="ochre" size="sm" tilt="left">
              Ingrédients d&apos;Origine
            </Badge>
            <h2
              id="coffee-pantry-heading"
              className="font-serif text-2xl sm:text-3xl font-black text-[#321B18]"
            >
              The Coffee Pantry Spotlight
            </h2>
            <p className="font-serif text-xs sm:text-sm text-[#321B18]/75">
              Available in the Drink Mixer. Click &ldquo;Open Mixer&rdquo; to adjust quantities, blend with milks, and design your personal roast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coffeeIngredients.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-[#FBF7F0] border-2 border-[#241714] rounded-xl shadow-[3px_3px_0px_#241714] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs uppercase text-[#A51F32] font-bold">
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
          <Badge variant="cherry" size="md" tilt="right">
            Prêt à Créer?
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#321B18]">
            Step behind the Coffee Bar counter.
          </h2>
          <p className="font-serif text-sm sm:text-base text-[#321B18]/80 max-w-lg mx-auto">
            Pull shots, froth velvety milks, layer artisan syrups, and watch your illustrated bistro mug animate in real time.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/mixer?destination=coffee">
              <Button variant="primary" size="lg">
                Open Mixer at Coffee Barista 🧪
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
            <Link href="/chai">
              <Button variant="secondary" size="sm">
                🫖 Chai House
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
