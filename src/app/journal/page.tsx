"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Awning,
  Badge,
  Button,
  Divider,
  PaperContainer,
  RecipeCard,
} from "@/components/ui";
import { useRecipes } from "@/hooks/useRecipes";
import { useDisplayName } from "@/hooks/useDisplayName";
import { Recipe } from "@/types";
import { getDefaultGlasswareForDestination, getGlasswareById } from "@/data/glassware";

export default function JournalPage() {
  const router = useRouter();
  const { recipes, deleteRecipe } = useRecipes();
  const { displayName } = useDisplayName();
  const [selectedDestination, setSelectedDestination] = useState<string>("all");
  const [viewingRecipe, setViewingRecipe] = useState<Recipe | null>(null);

  // Filter recipes
  const filteredRecipes =
    selectedDestination === "all"
      ? recipes
      : recipes.filter((r) => r.destination === selectedDestination);

  // Handlers
  const handleLoadIntoMixer = (recipe: Recipe) => {
    router.push(`/mixer?destination=${recipe.destination}&recipeId=${recipe.id}`);
  };

  const handleEdit = (recipe: Recipe) => {
    handleLoadIntoMixer(recipe);
  };

  const handleDelete = (id: string) => {
    deleteRecipe(id);
    if (viewingRecipe?.id === id) {
      setViewingRecipe(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EBDD] text-[#321B18] overflow-x-hidden">
      <Awning height="sm" />
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 space-y-10">
        {/* =========================================
            JOURNAL HEADER
            ========================================= */}
        <header className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2">
            <Badge variant="ochre" size="sm" tilt="left" isStamp={true}>
              Carnet de Recettes Privé
            </Badge>
            <span className="text-xs font-mono text-[#321B18]/60 uppercase tracking-widest">
              Device-Local Collection
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#321B18] tracking-tight">
            Blends by <span className="font-handwriting text-[#A51F32]">{displayName}</span>
          </h1>

          <p className="font-handwriting text-2xl sm:text-3xl text-[#A51F32] font-bold">
            &ldquo;Every little blend has a story.&rdquo;
          </p>

          <p className="font-serif text-xs sm:text-sm text-[#321B18]/80 max-w-lg mx-auto leading-relaxed">
            Your personal, hand-bound collection of crafted beverages. Every custom drink you proportion and save in the Drink Mixer is preserved here in your local notebook.
          </p>
        </header>

        {/* =========================================
            FILTER TABS & ACTION BAR
            ========================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b-2 border-[#241714] pb-4">
          {/* Destination Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {[
              { id: "all", label: `All Blends (${recipes.length})` },
              { id: "coffee", label: "☕ Coffee" },
              { id: "chai", label: "🫖 Chai" },
              { id: "soda", label: "🫧 Soda" },
              { id: "high-bar", label: "🍸 High Bar" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedDestination(tab.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-serif font-bold border-2 border-[#241714] rounded-lg transition-all cursor-pointer ${
                  selectedDestination === tab.id
                    ? "bg-[#A51F32] text-[#FBF7F0] shadow-[2px_2px_0px_#241714] -translate-y-0.5"
                    : "bg-[#FBF7F0] text-[#321B18] hover:bg-[#D5B99A]/30 shadow-[1px_1px_0px_#241714]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Mix CTA */}
          <Link href="/mixer">
            <Button variant="primary" size="sm">
              + Mix a New Drink 🧪
            </Button>
          </Link>
        </div>

        {/* =========================================
            RECIPE CARDS OR EMPTY STATE
            ========================================= */}
        {recipes.length === 0 ? (
          /* Entire Journal Empty State */
          <PaperContainer variant="cream" padding="lg" withPin={true} className="text-center py-12">
            <div className="max-w-md mx-auto space-y-4">
              <span className="text-5xl select-none" aria-hidden="true">
                📖 🫙 ✨
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#321B18]">
                Your recipe notebook is blank!
              </h2>

              <p className="font-serif text-sm text-[#321B18]/80 leading-relaxed">
                Step behind the counter in the Drink Mixer to invent your first signature blend. Select ingredients, tweak proportions, give your creation a title, and pin it to this page!
              </p>

              <div className="pt-2 flex flex-wrap gap-3 justify-center">
                <Link href="/mixer">
                  <Button variant="primary" size="md">
                    Mix Your First Drink Now 🧪
                  </Button>
                </Link>
                <Link href="/#destinations">
                  <Button variant="secondary" size="md">
                    Explore Bar Corners 📜
                  </Button>
                </Link>
              </div>

              <p className="text-[11px] font-mono text-[#321B18]/60 pt-4">
                Saved recipes will persist automatically in your browser on this device.
              </p>
            </div>
          </PaperContainer>
        ) : filteredRecipes.length === 0 ? (
          /* Filtered Category Empty State */
          <PaperContainer variant="cream" padding="md" className="text-center py-10">
            <p className="font-serif text-base text-[#321B18] font-bold">
              No saved recipes found for this bar corner.
            </p>
            <p className="font-serif text-xs text-[#321B18]/70 mt-1">
              Select &ldquo;All Blends&rdquo; or open the mixer to craft a drink in this category.
            </p>
            <div className="pt-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedDestination("all")}
              >
                Show All Blends
              </Button>
            </div>
          </PaperContainer>
        ) : (
          /* Grid of Saved Recipe Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onLoadIntoMixer={handleLoadIntoMixer}
                onEdit={handleEdit}
                onView={(r) => setViewingRecipe(r)}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        <Divider variant="flourish" icon="cup" />

        {/* Local Storage Clarification Note */}
        <div className="p-4 bg-[#F5EBDA] border-2 border-dashed border-[#241714]/30 rounded-xl text-center">
          <p className="text-xs font-serif text-[#321B18]/80">
            💡 <strong>Barista Note:</strong> This personal journal is stored locally on this device in your browser&apos;s storage. No passwords or cloud accounts are required.
          </p>
        </div>
      </main>

      {/* =========================================
          VIEW RECIPE DETAIL MODAL
          ========================================= */}
      {viewingRecipe && (
        <div
          className="fixed inset-0 z-50 bg-[#241714]/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-recipe-title"
        >
          <div className="relative w-full max-w-lg bg-[#FFFDF9] border-2 border-[#241714] rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_#241714]">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setViewingRecipe(null)}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#F4EBDD] hover:bg-[#A51F32] hover:text-white border-2 border-[#241714] flex items-center justify-center text-sm font-bold text-[#321B18] cursor-pointer transition-colors"
              aria-label="Close details"
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="space-y-4">
              <div className="border-b-2 border-dashed border-[#241714]/25 pb-3">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant="ochre" size="sm" tilt="left">
                    {viewingRecipe.destination.toUpperCase()} BAR
                  </Badge>
                  {(() => {
                    const g = getGlasswareById(
                      viewingRecipe.glasswareId ||
                        getDefaultGlasswareForDestination(viewingRecipe.destination)
                    );
                    return (
                      <Badge variant="latte" size="sm">
                        {g.icon} {g.name} &bull; {g.capacityMl} ml
                      </Badge>
                    );
                  })()}
                </div>
                <h3
                  id="modal-recipe-title"
                  className="font-serif text-2xl sm:text-3xl font-black text-[#321B18]"
                >
                  {viewingRecipe.name}
                </h3>
                <span className="font-mono text-xs text-[#321B18]/60">
                  Crafted on{" "}
                  {new Date(viewingRecipe.createdAt).toLocaleDateString(undefined, {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#321B18]/70 mb-2">
                  Measured Ingredients ({viewingRecipe.ingredients.length})
                </h4>
                <div className="space-y-2 bg-[#F8EFE4] p-3 rounded-xl border border-[#241714]/20">
                  {viewingRecipe.ingredients.map((ing) => (
                    <div
                      key={ing.ingredientId}
                      className="flex items-center justify-between text-xs font-mono text-[#321B18]"
                    >
                      <span className="font-bold">• {ing.name}</span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#241714]/20 font-bold">
                        {ing.quantity} {ing.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {viewingRecipe.instructions && (
                <div className="p-3 bg-[#FAF3E5] rounded-xl border border-[#241714]/20 text-xs sm:text-sm font-serif italic text-[#321B18]/85">
                  &ldquo;{viewingRecipe.instructions}&rdquo;
                </div>
              )}

              <div className="pt-2 flex flex-wrap gap-3 justify-end">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    handleLoadIntoMixer(viewingRecipe);
                  }}
                >
                  Open &amp; Mix in Bar 🧪
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setViewingRecipe(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
