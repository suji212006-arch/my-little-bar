"use client";

import React from "react";
import { DestinationId, GlasswareId, RecipeIngredient } from "@/types";
import { Badge, Button } from "@/components/ui";
import { INGREDIENT_STEP_AMOUNTS } from "@/data/ingredients";
import { getGlasswareById } from "@/data/glassware";

interface RecipeTicketProps {
  destination: DestinationId;
  glasswareId?: GlasswareId;
  ingredients: RecipeIngredient[];
  drinkName: string;
  isMocktail: boolean;
  onNameChange: (name: string) => void;
  onUpdateQuantity: (ingredientId: string, newQty: number) => void;
  onRemoveIngredient: (ingredientId: string) => void;
  onReset: () => void;
  onSave?: () => void;
  saveSuccessMessage?: string | null;
}

export const RecipeTicket: React.FC<RecipeTicketProps> = ({
  destination,
  glasswareId,
  ingredients,
  drinkName,
  isMocktail,
  onNameChange,
  onUpdateQuantity,
  onRemoveIngredient,
  onReset,
  onSave,
  saveSuccessMessage,
}) => {
  const destinationTitles: Record<DestinationId, string> = {
    coffee: "Coffee Barista",
    chai: "Chai House",
    soda: "Soda Lab",
    "high-bar": "High Bar",
  };

  const hasAlcohol = ingredients.some((i) => i.isAlcoholic);
  const totalVolume = ingredients
    .filter((i) => i.unit === "ml")
    .reduce((sum, curr) => sum + curr.quantity, 0);

  const handleStep = (item: RecipeIngredient, direction: "up" | "down") => {
    const config = INGREDIENT_STEP_AMOUNTS[item.unit] || {
      step: 10,
      min: 10,
      max: 250,
    };
    const step = config.step;
    const newQty =
      direction === "up" ? item.quantity + step : item.quantity - step;

    if (newQty < config.min) {
      onRemoveIngredient(item.ingredientId);
    } else if (newQty <= config.max) {
      onUpdateQuantity(item.ingredientId, newQty);
    }
  };

  return (
    <div className="relative bg-[#FFFDF9] border-2 border-[#241714] rounded-2xl shadow-[5px_5px_0px_#241714] p-5 sm:p-6 flex flex-col justify-between">
      {/* Decorative brass café clip */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 rounded-b-md bg-[#241714] border-t border-[#F4EBDD]/40 shadow-xs flex items-center justify-center z-10"
        aria-hidden="true"
      >
        <div className="w-4 h-1 bg-[#EDB856] rounded-full" />
      </div>

      <div>
        {/* Ticket Header */}
        <div className="border-b-2 border-dashed border-[#241714]/30 pb-3 mb-4 flex items-center justify-between">
          <div>
            <span className="font-mono text-[11px] tracking-widest text-[#321B18]/60 uppercase">
              Commande N° 42 &bull; Paris
            </span>
            <div className="flex flex-wrap items-center gap-1.5 mt-1">
              <Badge variant="ochre" size="sm">
                {destinationTitles[destination]}
              </Badge>
              {glasswareId && (
                <Badge variant="latte" size="sm">
                  {getGlasswareById(glasswareId).icon} {getGlasswareById(glasswareId).name}
                </Badge>
              )}
              {destination === "high-bar" && (
                <Badge
                  variant={hasAlcohol ? "cherry" : "ochre"}
                  size="sm"
                  isStamp={true}
                >
                  {hasAlcohol
                    ? "21+ ALCOHOLIC"
                    : isMocktail
                    ? "ZERO-PROOF MOCKTAIL"
                    : "ALCOHOL-FREE"}
                </Badge>
              )}
            </div>
          </div>

          {ingredients.length > 0 && (
            <button
              type="button"
              onClick={onReset}
              className="text-xs font-serif text-[#A51F32] hover:underline cursor-pointer"
              title="Reset mixer and start fresh"
            >
              Reset Recipe
            </button>
          )}
        </div>

        {/* Drink Name Input */}
        <div className="mb-5">
          <label
            htmlFor="drink-name-input"
            className="block text-xs font-mono uppercase tracking-wider text-[#321B18]/70 mb-1"
          >
            Recipe Title / Nom de Création:
          </label>
          <div className="relative">
            <input
              id="drink-name-input"
              type="text"
              value={drinkName}
              onChange={(e) => onNameChange(e.target.value)}
              placeholder="e.g. Midnight in Montmartre..."
              maxLength={45}
              className="w-full px-3 py-2 text-base sm:text-lg font-serif font-bold text-[#321B18] bg-[#FBF7F0] border-2 border-[#241714] rounded-lg shadow-[2px_2px_0px_#241714] focus:outline-none focus:ring-2 focus:ring-[#D99A2B]"
            />
            <span className="absolute right-3 top-2.5 text-xs text-[#321B18]/40 font-mono">
              ✎
            </span>
          </div>
        </div>

        {/* Selected Ingredients Breakdown */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#321B18]/70 mb-2">
            <span>Ingredients ({ingredients.length})</span>
            <span>Quantity / Units</span>
          </div>

          {ingredients.length === 0 ? (
            /* Empty State */
            <div className="p-6 text-center border-2 border-dashed border-[#241714]/25 rounded-xl bg-[#F4EBDD]/40">
              <span className="text-2xl" aria-hidden="true">
                🫙
              </span>
              <p className="font-serif font-semibold text-sm text-[#321B18] mt-1">
                Your recipe ticket is blank!
              </p>
              <p className="font-serif text-xs text-[#321B18]/70 max-w-xs mx-auto mt-0.5">
                Pick ingredients from the shelves to the left to start building
                your signature blend.
              </p>
            </div>
          ) : (
            /* Ingredients List with Adjusters */
            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {ingredients.map((item) => (
                <div
                  key={item.ingredientId}
                  className="flex items-center justify-between p-2.5 bg-[#FBF7F0] border-1.5 border-[#241714] rounded-lg shadow-[1px_1px_0px_#241714]"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => onRemoveIngredient(item.ingredientId)}
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-[#A51F32] hover:bg-[#A51F32] hover:text-[#FBF7F0] border border-[#A51F32]/40 transition-colors cursor-pointer"
                      title={`Remove ${item.name}`}
                      aria-label={`Remove ${item.name}`}
                    >
                      ×
                    </button>
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#321B18] truncate">
                      {item.name}
                    </span>
                    {item.isAlcoholic && (
                      <span className="text-[10px] px-1 py-0.2 rounded bg-[#A51F32] text-[#FBF7F0] font-bold">
                        21+
                      </span>
                    )}
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleStep(item, "down")}
                      className="w-6 h-6 flex items-center justify-center bg-[#F4EBDD] hover:bg-[#D5B99A] text-[#321B18] font-mono font-bold text-xs border border-[#241714] rounded cursor-pointer"
                      title={`Decrease ${item.name} quantity`}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      -
                    </button>
                    <span className="font-mono text-xs font-bold text-[#321B18] w-14 text-center">
                      {item.quantity} {item.unit}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleStep(item, "up")}
                      className="w-6 h-6 flex items-center justify-center bg-[#F4EBDD] hover:bg-[#D5B99A] text-[#321B18] font-mono font-bold text-xs border border-[#241714] rounded cursor-pointer"
                      title={`Increase ${item.name} quantity`}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Ticket Footer / Live Totals */}
      <div className="pt-3 border-t-2 border-dashed border-[#241714]/30">
        <div className="flex items-center justify-between text-xs font-mono text-[#321B18]/80 mb-3">
          <span>Total Liquid Volume:</span>
          <span className="font-bold text-sm text-[#321B18]">
            {totalVolume} ml
          </span>
        </div>

        {/* Instructions / Recipe summary quote */}
        <div className="p-2.5 bg-[#F4EBDD] rounded-lg border border-[#241714]/20 text-xs font-serif italic text-[#321B18]/85 mb-4">
          {ingredients.length === 0 ? (
            <span>&ldquo;A clean cup is the beginning of all poetry.&rdquo;</span>
          ) : (
            <span>
              &ldquo;Stir with patience, let flavours marry, and serve with Parisian flair.&rdquo;
            </span>
          )}
        </div>

        {/* Success Banner if recipe saved */}
        {saveSuccessMessage && (
          <div className="p-3 mb-3 bg-[#EAF5E9] border-2 border-[#241714] rounded-xl text-center shadow-[2px_2px_0px_#241714]">
            <span className="font-serif font-bold text-xs text-[#2A662B] block">
              ✓ {saveSuccessMessage}
            </span>
            <a
              href="/journal"
              className="font-handwriting text-base font-bold text-[#A51F32] underline hover:text-[#861625] block mt-0.5"
            >
              Open Blends by Sujithra ➔
            </a>
          </div>
        )}

        {/* Action Button & Validation Feedback */}
        <div className="text-center space-y-2">
          {ingredients.length === 0 ? (
            <p className="text-[11px] font-serif text-[#A51F32] italic">
              Drop at least one ingredient into your glass to save.
            </p>
          ) : !drinkName.trim() ? (
            <p className="text-[11px] font-serif text-[#A51F32] italic">
              Please enter a recipe title before saving.
            </p>
          ) : null}

          <Button
            variant="primary"
            size="md"
            className="w-full"
            disabled={ingredients.length === 0 || !drinkName.trim()}
            onClick={onSave}
          >
            Save to Journal 📖
          </Button>

          <div className="pt-1">
            <a
              href="/journal"
              className="text-xs font-serif text-[#321B18]/70 hover:text-[#A51F32] hover:underline"
            >
              View Saved Recipes in Journal ➔
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
