"use client";

import React from "react";
import { Recipe } from "@/types";
import { PaperContainer } from "./PaperContainer";
import { Badge } from "./Badge";
import { IngredientTag } from "./IngredientTag";
import { Button } from "./Button";
import { getDefaultGlasswareForDestination, getGlasswareById } from "@/data/glassware";

export interface RecipeCardProps {
  recipe: Recipe;
  onEdit?: (recipe: Recipe) => void;
  onDelete?: (id: string) => void;
  onView?: (recipe: Recipe) => void;
  onLoadIntoMixer?: (recipe: Recipe) => void;
  className?: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onEdit,
  onDelete,
  onView,
  onLoadIntoMixer,
  className = "",
}) => {
  const destinationLabels: Record<
    string,
    { label: string; variant: "cherry" | "ochre" | "espresso" | "latte" }
  > = {
    coffee: { label: "Coffee Barista", variant: "espresso" },
    chai: { label: "Chai House", variant: "ochre" },
    soda: { label: "Soda Lab", variant: "latte" },
    "high-bar": { label: "High Bar", variant: "cherry" },
  };

  const destInfo = destinationLabels[recipe.destination] || {
    label: recipe.destination,
    variant: "ochre",
  };

  const glassInfo = getGlasswareById(
    recipe.glasswareId || getDefaultGlasswareForDestination(recipe.destination)
  );

  const totalVolume = recipe.ingredients
    .filter((i) => i.unit === "ml")
    .reduce((sum, curr) => sum + curr.quantity, 0);

  const formattedDate = recipe.createdAt
    ? new Date(recipe.createdAt).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Recently saved";

  const handleDeleteClick = () => {
    if (
      window.confirm(
        `Are you sure you want to remove "${recipe.name}" from your recipe journal?`
      )
    ) {
      onDelete?.(recipe.id);
    }
  };

  return (
    <PaperContainer
      variant="cream"
      padding="md"
      withPin={true}
      className={`transition-all duration-150 hover:-translate-y-1 ${className}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
            <Badge variant={destInfo.variant} size="sm" tilt="left">
              {destInfo.label}
            </Badge>
            <Badge variant="latte" size="sm">
              {glassInfo.icon} {glassInfo.name}
            </Badge>
            {recipe.isMocktail && (
              <Badge variant="ochre" size="sm" isStamp={true}>
                Mocktail
              </Badge>
            )}
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#321B18] tracking-tight">
            {recipe.name}
          </h3>
        </div>

        {totalVolume > 0 && (
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#241714]/10 text-[#321B18] font-bold">
            {totalVolume} ml
          </span>
        )}
      </div>

      <div className="mb-4">
        <p className="text-[11px] font-mono uppercase text-[#321B18]/60 tracking-wider mb-2">
          Ingredients ({recipe.ingredients.length})
        </p>
        <div className="flex flex-wrap gap-1.5">
          {recipe.ingredients.map((ing) => (
            <IngredientTag
              key={ing.ingredientId}
              name={ing.name}
              quantity={ing.quantity}
              unit={ing.unit}
              isAlcoholic={ing.isAlcoholic}
            />
          ))}
        </div>
      </div>

      {recipe.instructions && (
        <div className="bg-[#F4EBDD] p-3 rounded-lg border border-[#241714]/20 mb-4 text-xs sm:text-sm text-[#321B18]/90 font-serif italic">
          &ldquo;{recipe.instructions}&rdquo;
        </div>
      )}

      {/* Card Actions Footer */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#241714]/20 text-xs">
        <span className="text-[#321B18]/60 font-mono text-[11px]">
          {formattedDate}
        </span>

        <div className="flex items-center gap-2">
          {onLoadIntoMixer && (
            <Button
              size="sm"
              variant="primary"
              onClick={() => onLoadIntoMixer(recipe)}
              title="Open this recipe in the Drink Mixer"
            >
              Mix 🧪
            </Button>
          )}
          {onEdit && (
            <Button
              size="sm"
              variant="secondary"
              onClick={() => onEdit(recipe)}
              title="Edit in mixer"
            >
              Edit
            </Button>
          )}
          {onView && (
            <Button size="sm" variant="outline" onClick={() => onView(recipe)}>
              View
            </Button>
          )}
          {onDelete && (
            <button
              type="button"
              onClick={handleDeleteClick}
              className="text-[#A51F32] hover:underline font-serif px-1.5 py-1 text-xs cursor-pointer"
              title="Delete recipe from notebook"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </PaperContainer>
  );
};
