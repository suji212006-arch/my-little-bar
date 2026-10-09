"use client";

import React from "react";
import { Ingredient } from "@/types";
import { Badge } from "@/components/ui";

interface IngredientCardProps {
  ingredient: Ingredient;
  isAdded: boolean;
  currentQuantity?: number;
  disabled?: boolean;
  onAdd: (ingredient: Ingredient) => void;
  onIncrease?: (ingredient: Ingredient) => void;
  onDecrease?: (ingredient: Ingredient) => void;
}

export const IngredientCard: React.FC<IngredientCardProps> = ({
  ingredient,
  isAdded,
  currentQuantity,
  disabled = false,
  onAdd,
  onIncrease,
  onDecrease,
}) => {
  // Category emoji icons
  const categoryIcons: Record<string, string> = {
    coffee: "☕",
    tea: "🫖",
    milk: "🥛",
    syrup: "🍯",
    spice: "🌿",
    soda: "🫧",
    fruit: "🍋",
    garnish: "🍒",
    spirit: "🥃",
    liqueur: "🍷",
    base: "🍸",
  };

  const icon = categoryIcons[ingredient.category] || "✨";

  return (
    <div
      className={`group relative flex flex-col justify-between p-3 sm:p-3.5 bg-[#FFFDF9] border-2 border-[#241714] rounded-xl shadow-[3px_3px_0px_#241714] transition-all ${
        disabled
          ? "opacity-35 grayscale pointer-events-none"
          : "hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#241714]"
      } ${isAdded ? "ring-2 ring-[#D99A2B] bg-[#FFFBEF]" : ""}`}
    >
      <div>
        {/* Top bar: Icon, color swatch & badges */}
        <div className="flex items-start justify-between gap-1 mb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-xl select-none" aria-hidden="true">
              {icon}
            </span>
            {ingredient.color && (
              <span
                className="w-3 h-3 rounded-full border border-[#241714] shadow-xs"
                style={{ backgroundColor: ingredient.color }}
                title={`Liquid tint: ${ingredient.color}`}
              />
            )}
          </div>

          <div className="flex items-center gap-1">
            {ingredient.isAlcoholic && (
              <Badge variant="cherry" size="sm" isStamp={true}>
                21+
              </Badge>
            )}
            {isAdded && (
              <Badge variant="ochre" size="sm">
                In Glass
              </Badge>
            )}
          </div>
        </div>

        {/* Title */}
        <h4 className="font-serif font-bold text-sm sm:text-base text-[#321B18] leading-snug">
          {ingredient.name}
        </h4>

        {/* Flavor Notes */}
        {ingredient.flavourNote && (
          <p className="text-xs font-serif text-[#321B18]/70 italic mt-1 line-clamp-2">
            &ldquo;{ingredient.flavourNote}&rdquo;
          </p>
        )}
      </div>

      {/* Action Row */}
      <div className="mt-3 pt-2 border-t border-[#241714]/15 flex items-center justify-between gap-2">
        {/* If not added yet: display default measure and "+ Add" button */}
        {!isAdded ? (
          <>
            <span className="text-xs font-mono text-[#321B18]/60">
              +{ingredient.defaultUnit}
            </span>
            <button
              type="button"
              disabled={disabled}
              onClick={() => onAdd(ingredient)}
              className="inline-flex items-center justify-center px-3 py-1 bg-[#F4EBDD] hover:bg-[#A51F32] hover:text-[#FBF7F0] text-[#321B18] text-xs font-serif font-bold border-1.5 border-[#241714] rounded-lg shadow-[1px_1px_0px_#241714] active:shadow-none active:translate-x-[1px] active:translate-y-[1px] cursor-pointer transition-colors"
              aria-label={`Add ${ingredient.name}`}
            >
              + Add
            </button>
          </>
        ) : (
          /* If added: show stepper with current quantity */
          <div className="w-full flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-[#A51F32]">
              {currentQuantity} {ingredient.defaultUnit}
            </span>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => onDecrease?.(ingredient)}
                className="w-6 h-6 flex items-center justify-center bg-[#F4EBDD] hover:bg-[#D5B99A] text-[#321B18] font-mono font-bold text-xs border border-[#241714] rounded cursor-pointer active:scale-95"
                title={`Decrease ${ingredient.name}`}
                aria-label={`Decrease ${ingredient.name}`}
              >
                -
              </button>
              <button
                type="button"
                onClick={() => onIncrease?.(ingredient)}
                className="w-6 h-6 flex items-center justify-center bg-[#D99A2B] hover:bg-[#EDB856] text-[#241714] font-mono font-bold text-xs border border-[#241714] rounded cursor-pointer active:scale-95"
                title={`Add more ${ingredient.name}`}
                aria-label={`Add more ${ingredient.name}`}
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
