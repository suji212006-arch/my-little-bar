"use client";

import React from "react";
import { IngredientCategory } from "@/types";

export interface IngredientTagProps {
  name: string;
  category?: IngredientCategory;
  quantity?: number;
  unit?: string;
  flavourNote?: string;
  isAlcoholic?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
}

export const IngredientTag: React.FC<IngredientTagProps> = ({
  name,
  category,
  quantity,
  unit,
  flavourNote,
  isAlcoholic,
  onRemove,
  onClick,
  selected = false,
  className = "",
}) => {
  const categoryBg: Record<string, string> = {
    coffee: "bg-[#321B18]/10 text-[#321B18]",
    tea: "bg-[#D99A2B]/20 text-[#321B18]",
    milk: "bg-[#D5B99A]/30 text-[#321B18]",
    syrup: "bg-[#A51F32]/15 text-[#861625]",
    soda: "bg-blue-100 text-blue-900",
    spirit: "bg-amber-100 text-amber-950",
    fruit: "bg-orange-100 text-orange-950",
    spice: "bg-stone-200 text-stone-900",
  };

  const bg = category && categoryBg[category] ? categoryBg[category] : "bg-[#FBF7F0] text-[#321B18]";

  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`inline-flex items-center gap-2 px-3 py-1.5 border-1.5 border-[#241714] rounded-[255px_15px_225px_15px/15px_225px_15px_255px] text-xs sm:text-sm font-medium transition-all ${
        selected
          ? "bg-[#D99A2B] text-[#241714] shadow-[2px_2px_0px_#241714]"
          : `${bg} shadow-[1px_1px_0px_#241714] hover:shadow-[2px_2px_0px_#241714]`
      } ${onClick ? "cursor-pointer active:scale-95" : ""} ${className}`}
    >
      <span className="font-serif font-semibold">{name}</span>

      {quantity !== undefined && unit && (
        <span className="px-1.5 py-0.5 rounded bg-[#241714]/10 text-[11px] font-mono font-bold">
          {quantity} {unit}
        </span>
      )}

      {isAlcoholic && (
        <span
          title="Contains Alcohol"
          className="px-1 py-0.2 rounded bg-[#A51F32] text-[#FBF7F0] text-[10px] font-bold tracking-wider uppercase"
        >
          21+
        </span>
      )}

      {flavourNote && (
        <span className="text-[11px] text-[#321B18]/70 italic hidden sm:inline">
          ({flavourNote})
        </span>
      )}

      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-[#A51F32] hover:bg-[#A51F32] hover:text-[#FBF7F0] transition-colors cursor-pointer"
          aria-label={`Remove ${name}`}
        >
          ×
        </button>
      )}
    </div>
  );
};
