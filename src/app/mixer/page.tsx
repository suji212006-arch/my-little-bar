"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Awning } from "@/components/ui";
import { DrinkMixer } from "@/components/mixer/DrinkMixer";
import { DestinationId } from "@/types";

function MixerContent() {
  const searchParams = useSearchParams();
  const destParam = searchParams.get("destination") as DestinationId | null;
  const recipeIdParam = searchParams.get("recipeId");
  const validDests: DestinationId[] = ["coffee", "chai", "soda", "high-bar"];
  const initialDestination = validDests.includes(destParam as DestinationId)
    ? (destParam as DestinationId)
    : "coffee";

  return (
    <DrinkMixer
      key={`${initialDestination}_${recipeIdParam || "new"}`}
      initialDestination={initialDestination}
      recipeIdToLoad={recipeIdParam}
    />
  );
}

export default function MixerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4EBDD] text-[#321B18] overflow-x-hidden">
      <Awning height="sm" />
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        <Suspense
          fallback={
            <div className="p-12 text-center font-serif text-[#321B18]">
              <span className="text-3xl" aria-hidden="true">
                🧪
              </span>
              <p className="mt-2 font-bold">Setting up the bar counter...</p>
            </div>
          }
        >
          <MixerContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
