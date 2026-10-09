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
import { HighBarIllustration } from "@/components/illustrations/DestinationIllustrations";
import { INGREDIENTS } from "@/data/ingredients";

// Curated signature recipes for High Bar (Cocktails & Mocktails)
const SIGNATURE_HIGH_BAR_DRINKS = [
  {
    name: "Boulevardier Parisien",
    frenchTitle: "Le Classique Rive Gauche",
    isAlcoholic: true,
    description:
      "A rich, smoky Parisian salon icon created in 1920s Paris. Kentucky bourbon stirred with French dry vermouth and bitter gentian aperitivo, finished with flamed orange.",
    ingredients: [
      { name: "Kentucky Straight Bourbon", amount: "45 ml" },
      { name: "French Dry Vermouth", amount: "30 ml" },
      { name: "Aperitivo Red Bitter", amount: "30 ml" },
      { name: "Flamed Orange Peel Twist", amount: "1 peel" },
    ],
    tastingNote: "Charred oak vanilla, bittersweet gentian & aromatic citrus oils",
  },
  {
    name: "Le Petit Cognac Sour",
    frenchTitle: "Le Sour au Cognac",
    isAlcoholic: true,
    description:
      "A velvety balance of aged Limousin oak French cognac and freshly squeezed tart lemon, smoothed with pure cane syrup and crowned with a dark Maraschino cherry.",
    ingredients: [
      { name: "Aged French Cognac", amount: "45 ml" },
      { name: "Fresh Pressed Lemon Juice", amount: "25 ml" },
      { name: "Pure Cane Simple Syrup", amount: "20 ml" },
      { name: "Maraschino Cherry on Pick", amount: "1 cherry" },
    ],
    tastingNote: "Dried apricot, oak warmth, bright lemon acidity & dark cherry",
  },
  {
    name: "Zero-Proof Garden Highball",
    frenchTitle: "Le Highball Botanique (0.0%)",
    isAlcoholic: false,
    description:
      "An alcohol-free masterpiece of crisp piney juniper, coriander, and angelica root. Topped with sparkling botanical tonic, fresh lime, and bruised garden mint.",
    ingredients: [
      { name: "Zero-Proof Botanical Spirit", amount: "45 ml" },
      { name: "Botanical Tonic Water", amount: "90 ml" },
      { name: "Fresh Pressed Lime Juice", amount: "20 ml" },
      { name: "Bruised Garden Mint", amount: "4 leaves" },
    ],
    tastingNote: "Juniper pine, bitter quinine fizz & refreshing lime herbal kick",
  },
  {
    name: "Ruby Bittersweet Fizz",
    frenchTitle: "Le Spritz Sans Alcool (0.0%)",
    isAlcoholic: false,
    description:
      "A zero-proof bittersweet spritz with Italian rhubarb notes and Seville orange peel, stirred into ruby blood orange purée and bubbling club soda.",
    ingredients: [
      { name: "Zero-Proof Bittersweet Aperitif", amount: "35 ml" },
      { name: "Sicilian Blood Orange Purée", amount: "30 ml" },
      { name: "Artisanal Club Soda", amount: "100 ml" },
      { name: "Flamed Orange Peel Twist", amount: "1 peel" },
    ],
    tastingNote: "Gentian root, sweet-tart ruby citrus & effervescent mineral fizz",
  },
];

export default function HighBarPage() {
  const highBarIngredients = INGREDIENTS.filter((i) =>
    i.compatibleDestinations.includes("high-bar")
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EBDD] text-[#321B18] overflow-x-hidden">
      <Awning height="sm" />
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 space-y-12">
        {/* =========================================
            HERO SECTION: High Bar
            ========================================= */}
        <PaperContainer variant="cream" padding="lg" withPin={true}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Illustrated Emblem */}
            <div className="md:col-span-5 w-44 h-44 sm:w-52 sm:h-52 mx-auto">
              <HighBarIllustration />
            </div>

            {/* Description & Story */}
            <div className="md:col-span-7 text-center md:text-left space-y-4">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <Badge variant="cherry" size="sm" tilt="left">
                  Corner IV
                </Badge>
                <Badge variant="ochre" size="sm" isStamp={true}>
                  Cocktails &amp; Zero-Proof
                </Badge>
                <span className="font-handwriting text-xl text-[#A51F32] font-bold">
                  Le Bar de Nuit
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#321B18] leading-tight">
                High Bar
              </h1>

              <p className="font-serif text-sm sm:text-base text-[#321B18]/85 leading-relaxed">
                Dim lamps, jazz riffs on the gramophone, and clinking crystal coupe glasses. Step into our vintage Parisian evening lounge. Stir spirited classics with fine cognacs and bourbons (21+), or easily toggle into Zero-Proof Mocktail Mode to craft botanical concoctions without the alcohol.
              </p>

              <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
                <Link href="/mixer?destination=high-bar">
                  <Button variant="primary" size="lg">
                    Open Mixer with High Bar 🍸
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
            SIGNATURE CREATIONS (Spirited & Mocktails)
            ========================================= */}
        <section aria-labelledby="highbar-signatures-heading" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="cherry" size="sm" tilt="right">
              Cocktails &amp; Mocktails
            </Badge>
            <h2
              id="highbar-signatures-heading"
              className="font-serif text-3xl sm:text-4xl font-black text-[#321B18]"
            >
              Signature Cocktails &amp; Mocktails
            </h2>
            <p className="font-serif text-xs sm:text-sm text-[#321B18]/75">
              Carefully balanced aperitifs and zero-proof refreshments. Alcohol is clearly marked for safety and inclusivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SIGNATURE_HIGH_BAR_DRINKS.map((drink) => (
              <div
                key={drink.name}
                className="bg-[#FFFDF9] border-2 border-[#241714] rounded-2xl p-5 shadow-[4px_4px_0px_#241714] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#241714]/15">
                    {drink.isAlcoholic ? (
                      <Badge variant="cherry" size="sm" isStamp={true}>
                        21+ Alcoholic
                      </Badge>
                    ) : (
                      <Badge variant="ochre" size="sm">
                        Zero-Proof (0.0%)
                      </Badge>
                    )}
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
                  <div className="bg-[#FAF0F2] p-3 rounded-lg border border-[#241714]/20 space-y-1 mb-4">
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
                  <span className="text-[11px] font-serif italic text-[#321B18]/70 max-w-[200px] truncate">
                    {drink.tastingNote}
                  </span>
                  <Link href="/mixer?destination=high-bar">
                    <Button variant="primary" size="sm">
                      Mix This 🍸
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
        <section aria-labelledby="highbar-pantry-heading" className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <Badge variant="cherry" size="sm" tilt="left">
              Spiritueux &amp; Botaniques
            </Badge>
            <h2
              id="highbar-pantry-heading"
              className="font-serif text-2xl sm:text-3xl font-black text-[#321B18]"
            >
              The Spirits &amp; Botanicals Shelf
            </h2>
            <p className="font-serif text-xs sm:text-sm text-[#321B18]/75">
              Available in the Drink Mixer. You can toggle Zero-Proof Mode in the mixer to hide alcoholic bottles anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highBarIngredients.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-[#FAECEF] border-2 border-[#241714] rounded-xl shadow-[3px_3px_0px_#241714] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs uppercase text-[#A51F32] font-bold">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {item.isAlcoholic ? (
                        <Badge variant="cherry" size="sm" isStamp={true}>
                          21+
                        </Badge>
                      ) : (
                        <Badge variant="ochre" size="sm">
                          0.0%
                        </Badge>
                      )}
                      {item.color && (
                        <span
                          className="w-3 h-3 rounded-full border border-[#241714]"
                          style={{ backgroundColor: item.color }}
                          title={`Color: ${item.color}`}
                        />
                      )}
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
            Salon des Cocktails
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#321B18]">
            Craft your evening concoction.
          </h2>
          <p className="font-serif text-sm sm:text-base text-[#321B18]/80 max-w-lg mx-auto">
            Choose your spirits or zero-proof bases, pour bitters and citrus, add dark maraschino cherries, and watch your coupe glass fill with glowing amber.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/mixer?destination=high-bar">
              <Button variant="primary" size="lg">
                Open Mixer at High Bar 🍸
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
            <Link href="/soda">
              <Button variant="secondary" size="sm">
                🫧 Soda Lab
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
