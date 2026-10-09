"use client";

import React, { useState } from "react";
import { DestinationId, GlasswareId, Ingredient, RecipeIngredient } from "@/types";
import { INGREDIENTS, INGREDIENT_STEP_AMOUNTS } from "@/data/ingredients";
import { DESTINATIONS } from "@/data/destinations";
import { getDefaultGlasswareForDestination } from "@/data/glassware";
import { Badge } from "@/components/ui";
import { useRecipes } from "@/hooks/useRecipes";
import { IngredientCard } from "./IngredientCard";
import { DrinkVisualizer } from "./DrinkVisualizer";
import { RecipeTicket } from "./RecipeTicket";
import { GlasswareSelector } from "./GlasswareSelector";

interface DrinkMixerProps {
  initialDestination?: DestinationId;
  recipeIdToLoad?: string | null;
}

export const DrinkMixer: React.FC<DrinkMixerProps> = ({
  initialDestination = "chai",
  recipeIdToLoad,
}) => {
  const { saveRecipe, getRecipe } = useRecipes();
  const initialRecipe = recipeIdToLoad ? getRecipe(recipeIdToLoad) : null;

  const [currentDestination, setCurrentDestination] = useState<DestinationId>(
    initialRecipe ? initialRecipe.destination : initialDestination
  );
  const [selectedGlassware, setSelectedGlassware] = useState<GlasswareId>(
    initialRecipe?.glasswareId
      ? initialRecipe.glasswareId
      : getDefaultGlasswareForDestination(
          initialRecipe ? initialRecipe.destination : initialDestination
        )
  );
  const [mocktailMode, setMocktailMode] = useState<boolean>(
    initialRecipe ? Boolean(initialRecipe.isMocktail) : false
  );
  const [selectedIngredients, setSelectedIngredients] = useState<
    RecipeIngredient[]
  >(initialRecipe ? initialRecipe.ingredients : []);
  const [drinkName, setDrinkName] = useState<string>(
    initialRecipe
      ? initialRecipe.name
      : initialDestination === "coffee"
      ? "Café Crème Ristretto"
      : initialDestination === "soda"
      ? "Peach Rosemary Sparkler"
      : initialDestination === "high-bar"
      ? "Montmartre Boulevardier"
      : "Imperial Cardamom Chai"
  );
  const [loadedRecipeId, setLoadedRecipeId] = useState<string | null>(
    initialRecipe ? initialRecipe.id : null
  );
  const [saveSuccessMessage, setSaveSuccessMessage] = useState<string | null>(
    initialRecipe ? `Loaded "${initialRecipe.name}" from your notebook!` : null
  );

  // Filter ingredients for current destination
  const availableIngredients = INGREDIENTS.filter((item) =>
    item.compatibleDestinations.includes(currentDestination)
  );

  // Group by clear categories
  const categories: { label: string; icon: string; items: Ingredient[] }[] = [
    {
      label: "Bases & Brews",
      icon: currentDestination === "coffee" ? "☕" : currentDestination === "chai" ? "🫖" : currentDestination === "soda" ? "🫧" : "🍸",
      items: availableIngredients.filter((i) =>
        ["tea", "coffee", "soda", "spirit", "base"].includes(i.category)
      ),
    },
    {
      label: "Milks & Creams",
      icon: "🥛",
      items: availableIngredients.filter((i) => i.category === "milk"),
    },
    {
      label: "Sweeteners & Syrups",
      icon: "🍯",
      items: availableIngredients.filter((i) =>
        ["syrup", "liqueur"].includes(i.category)
      ),
    },
    {
      label: "Spices, Fruits & Botanicals",
      icon: "🌿",
      items: availableIngredients.filter((i) =>
        ["spice", "fruit"].includes(i.category)
      ),
    },
    {
      label: "Garnishes & Ice",
      icon: "🍒",
      items: availableIngredients.filter((i) => i.category === "garnish"),
    },
  ].filter((cat) => cat.items.length > 0);

  // Helper step amounts
  const getStepConfig = (unit: string) => {
    return (
      INGREDIENT_STEP_AMOUNTS[unit] || {
        default: 30,
        step: 10,
        min: 10,
        max: 250,
      }
    );
  };

  // Add ingredient or increment if already present
  const handleAddIngredient = (ingredient: Ingredient) => {
    if (mocktailMode && ingredient.isAlcoholic) return;

    setSelectedIngredients((prev) => {
      const existing = prev.find((i) => i.ingredientId === ingredient.id);
      const stepConfig = getStepConfig(ingredient.defaultUnit);

      if (existing) {
        return prev.map((item) =>
          item.ingredientId === ingredient.id
            ? {
                ...item,
                quantity: Math.min(
                  stepConfig.max,
                  item.quantity + stepConfig.step
                ),
              }
            : item
        );
      } else {
        return [
          ...prev,
          {
            ingredientId: ingredient.id,
            name: ingredient.name,
            quantity: stepConfig.default,
            unit: ingredient.defaultUnit,
            category: ingredient.category,
            isAlcoholic: ingredient.isAlcoholic,
            color: ingredient.color,
          },
        ];
      }
    });
  };

  const handleIncrease = (ingredient: Ingredient) => {
    handleAddIngredient(ingredient);
  };

  const handleDecrease = (ingredient: Ingredient) => {
    setSelectedIngredients((prev) => {
      const existing = prev.find((i) => i.ingredientId === ingredient.id);
      if (!existing) return prev;

      const stepConfig = getStepConfig(ingredient.defaultUnit);
      const newQty = existing.quantity - stepConfig.step;

      if (newQty < stepConfig.min) {
        // Remove ingredient if below min
        return prev.filter((i) => i.ingredientId !== ingredient.id);
      }

      return prev.map((item) =>
        item.ingredientId === ingredient.id
          ? { ...item, quantity: newQty }
          : item
      );
    });
  };

  const handleUpdateQuantity = (ingredientId: string, newQty: number) => {
    setSelectedIngredients((prev) =>
      prev.map((i) =>
        i.ingredientId === ingredientId ? { ...i, quantity: newQty } : i
      )
    );
  };

  const handleRemoveIngredient = (ingredientId: string) => {
    setSelectedIngredients((prev) =>
      prev.filter((i) => i.ingredientId !== ingredientId)
    );
  };

  const handleReset = () => {
    if (
      selectedIngredients.length === 0 ||
      window.confirm("Start fresh with a clean glass and recipe ticket?")
    ) {
      setSelectedIngredients([]);
      setLoadedRecipeId(null);
      setSaveSuccessMessage(null);
      setSelectedGlassware(getDefaultGlasswareForDestination(currentDestination));
      if (currentDestination === "chai") setDrinkName("Imperial Cardamom Chai");
      else if (currentDestination === "coffee") setDrinkName("Café Crème Ristretto");
      else if (currentDestination === "soda") setDrinkName("Peach Rosemary Sparkler");
      else setDrinkName("Montmartre Boulevardier");
    }
  };

  const handleSaveRecipe = () => {
    if (selectedIngredients.length === 0 || !drinkName.trim()) return;

    const saved = saveRecipe({
      name: drinkName,
      destination: currentDestination,
      glasswareId: selectedGlassware,
      ingredients: selectedIngredients,
      isMocktail: mocktailMode,
      existingId: loadedRecipeId || undefined,
    });

    setLoadedRecipeId(saved.id);
    setSaveSuccessMessage(`"${saved.name}" pinned to your recipe journal!`);
  };

  const handleDestinationChange = (destId: DestinationId) => {
    setCurrentDestination(destId);
    setSelectedGlassware(getDefaultGlasswareForDestination(destId));
    if (destId === "chai") setDrinkName("Imperial Cardamom Chai");
    else if (destId === "coffee") setDrinkName("Café Crème Ristretto");
    else if (destId === "soda") setDrinkName("Peach Rosemary Sparkler");
    else setDrinkName("Montmartre Boulevardier");
  };

  const currentDestInfo =
    DESTINATIONS.find((d) => d.id === currentDestination) || DESTINATIONS[1];

  return (
    <div className="w-full space-y-6">
      {/* 1. Destination Navigation Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b-2 border-[#241714] pb-4">
        <div>
          <span className="font-handwriting text-xl text-[#A51F32] font-bold">
            Choisissez votre coin du bar
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#321B18]">
            {currentDestInfo.name} &bull;{" "}
            <span className="font-normal italic text-lg sm:text-xl text-[#321B18]/70">
              {currentDestInfo.frenchSubtitle}
            </span>
          </h2>
        </div>

        {/* Destination Switcher Buttons */}
        <div className="flex flex-wrap gap-2">
          {DESTINATIONS.map((dest) => (
            <button
              key={dest.id}
              type="button"
              onClick={() => handleDestinationChange(dest.id)}
              className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-serif font-bold border-2 border-[#241714] rounded-xl transition-all cursor-pointer ${
                currentDestination === dest.id
                  ? "bg-[#A51F32] text-[#FBF7F0] shadow-[3px_3px_0px_#241714] -translate-y-0.5"
                  : "bg-[#FBF7F0] text-[#321B18] hover:bg-[#D5B99A]/40 shadow-[1px_1px_0px_#241714]"
              }`}
            >
              {dest.name}
            </button>
          ))}
        </div>
      </div>

      {/* 2. High Bar Safety & Mocktail Mode Switch */}
      {currentDestination === "high-bar" && (
        <div className="p-4 bg-[#FBECEF] border-2 border-[#A51F32] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-[2px_2px_0px_#241714]">
          <div className="flex items-center gap-2">
            <span className="text-xl" aria-hidden="true">
              🍹
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-sm text-[#321B18]">
                  Zero-Proof Mocktail Mode
                </span>
                <Badge variant={mocktailMode ? "ochre" : "espresso"} size="sm">
                  {mocktailMode ? "ACTIVE (0.0% ABV)" : "OFF"}
                </Badge>
              </div>
              <p className="text-xs font-serif text-[#321B18]/80 mt-0.5">
                Toggle to filter for alcohol-free spirits, botanical syrups, and zero-proof bitters.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const nextMode = !mocktailMode;
              setMocktailMode(nextMode);
              if (nextMode) {
                // Remove alcoholic ingredients if currently selected
                setSelectedIngredients((prev) =>
                  prev.filter((item) => !item.isAlcoholic)
                );
              }
            }}
            className={`px-4 py-1.5 text-xs font-serif font-bold border-2 border-[#241714] rounded-lg shadow-[2px_2px_0px_#241714] cursor-pointer transition-colors ${
              mocktailMode
                ? "bg-[#D99A2B] text-[#241714]"
                : "bg-[#FBF7F0] text-[#321B18] hover:bg-[#F4EBDD]"
            }`}
          >
            {mocktailMode ? "Switch to Full Bar (21+)" : "Enable Mocktail Mode"}
          </button>
        </div>
      )}

      {/* 3. Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Independently Scrollable Ingredient Shelves (Col 6) */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Section Subheader */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#241714]/20">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg font-bold text-[#321B18]">
                🥫 The Pantry Shelves
              </h3>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#241714]/10 text-[#321B18]/80 font-bold">
                {availableIngredients.length} items
              </span>
            </div>
            <span className="text-xs font-handwriting text-[#A51F32] font-bold text-base hidden sm:inline">
              Scroll shelves &bull; Click + to add
            </span>
          </div>

          {/* Independently Scrollable Shelves Container with Vintage Scrollbar */}
          <div className="max-h-[720px] overflow-y-auto pr-2 sm:pr-3 space-y-6 cafe-scrollbar">
            {categories.map((category) => (
              <div
                key={category.label}
                className="p-4 bg-[#FBF7F0] border-2 border-[#241714] rounded-xl shadow-[3px_3px_0px_#241714]"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#241714]/20">
                  <div className="flex items-center gap-2">
                    <span className="text-lg select-none" aria-hidden="true">
                      {category.icon}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#321B18] uppercase tracking-wider">
                      {category.label}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[#321B18]/60">
                    {category.items.length} options
                  </span>
                </div>

                {/* Ingredient Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.items.map((ing) => {
                    const inRecipe = selectedIngredients.find(
                      (i) => i.ingredientId === ing.id
                    );
                    const isBlockedByMocktail =
                      mocktailMode && Boolean(ing.isAlcoholic);

                    return (
                      <IngredientCard
                        key={ing.id}
                        ingredient={ing}
                        isAdded={Boolean(inRecipe)}
                        currentQuantity={inRecipe?.quantity}
                        disabled={isBlockedByMocktail}
                        onAdd={handleAddIngredient}
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Drink Glass, Glassware Selector & Recipe Ticket (Col 6) */}
        <div className="lg:col-span-6 lg:sticky lg:top-24 space-y-5">
          {/* 1. Visually Attractive Glassware Selector */}
          <GlasswareSelector
            destination={currentDestination}
            selectedGlasswareId={selectedGlassware}
            onSelect={setSelectedGlassware}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 items-start">
            {/* 2. The Animated Glass Visualizer */}
            <div className="w-full">
              <DrinkVisualizer
                destination={currentDestination}
                glasswareId={selectedGlassware}
                ingredients={selectedIngredients}
                drinkName={drinkName}
              />
            </div>

            {/* 3. The Synchronized Live Recipe Ticket */}
            <div className="w-full">
              <RecipeTicket
                destination={currentDestination}
                glasswareId={selectedGlassware}
                ingredients={selectedIngredients}
                drinkName={drinkName}
                isMocktail={
                  currentDestination === "high-bar"
                    ? !selectedIngredients.some((i) => i.isAlcoholic)
                    : true
                }
                onNameChange={setDrinkName}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveIngredient={handleRemoveIngredient}
                onReset={handleReset}
                onSave={handleSaveRecipe}
                saveSuccessMessage={saveSuccessMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
