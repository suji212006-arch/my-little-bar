"use client";

import { useSyncExternalStore } from "react";
import { DestinationId, GlasswareId, Recipe, RecipeIngredient } from "@/types";
import { getDefaultGlasswareForDestination } from "@/data/glassware";

const RECIPES_STORAGE_KEY = "my_little_bar_saved_recipes";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("recipes-changed", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("recipes-changed", callback);
  };
}

function getSnapshot(): string {
  if (typeof window === "undefined") return "[]";
  try {
    const raw = localStorage.getItem(RECIPES_STORAGE_KEY);
    return raw || "[]";
  } catch {
    return "[]";
  }
}

function getServerSnapshot(): string {
  return "[]";
}

export function useRecipes() {
  const rawRecipes = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  let recipes: Recipe[] = [];
  try {
    const parsed = JSON.parse(rawRecipes);
    if (Array.isArray(parsed)) {
      recipes = parsed.map((r: Recipe) => ({
        ...r,
        // Fallback for older recipes created without glasswareId
        glasswareId: r.glasswareId || getDefaultGlasswareForDestination(r.destination),
      }));
    }
  } catch {
    recipes = [];
  }

  const persistRecipes = (updatedList: Recipe[]) => {
    try {
      localStorage.setItem(RECIPES_STORAGE_KEY, JSON.stringify(updatedList));
      window.dispatchEvent(new Event("recipes-changed"));
    } catch (err) {
      console.error("Failed to save recipe to localStorage:", err);
    }
  };

  const saveRecipe = (recipeData: {
    name: string;
    destination: DestinationId;
    glasswareId?: GlasswareId;
    ingredients: RecipeIngredient[];
    instructions?: string;
    notes?: string;
    isMocktail?: boolean;
    existingId?: string;
  }): Recipe => {
    const isMocktail =
      recipeData.destination === "high-bar"
        ? !recipeData.ingredients.some((i) => i.isAlcoholic)
        : true;

    const resolvedGlassware =
      recipeData.glasswareId ||
      getDefaultGlasswareForDestination(recipeData.destination);

    if (recipeData.existingId) {
      // Update existing
      const updated = recipes.map((r) =>
        r.id === recipeData.existingId
          ? {
              ...r,
              name: recipeData.name.trim(),
              destination: recipeData.destination,
              glasswareId: resolvedGlassware,
              ingredients: recipeData.ingredients,
              instructions: recipeData.instructions,
              notes: recipeData.notes,
              isMocktail,
              updatedAt: new Date().toISOString(),
            }
          : r
      );
      persistRecipes(updated);
      return updated.find((r) => r.id === recipeData.existingId)!;
    } else {
      // Create new
      const newRecipe: Recipe = {
        id: `recipe_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        name: recipeData.name.trim(),
        destination: recipeData.destination,
        glasswareId: resolvedGlassware,
        ingredients: recipeData.ingredients,
        instructions: recipeData.instructions,
        notes: recipeData.notes,
        isMocktail,
        createdAt: new Date().toISOString(),
      };
      const updated = [newRecipe, ...recipes];
      persistRecipes(updated);
      return newRecipe;
    }
  };

  const deleteRecipe = (id: string) => {
    const updated = recipes.filter((r) => r.id !== id);
    persistRecipes(updated);
  };

  const getRecipe = (id: string): Recipe | undefined => {
    return recipes.find((r) => r.id === id);
  };

  return {
    recipes,
    saveRecipe,
    deleteRecipe,
    getRecipe,
  };
}
