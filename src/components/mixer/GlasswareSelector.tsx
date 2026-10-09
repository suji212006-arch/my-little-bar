"use client";

import React from "react";
import { DestinationId, GlasswareId, GlasswareInfo } from "@/types";
import { getGlasswareForDestination } from "@/data/glassware";

interface GlasswareSelectorProps {
  destination: DestinationId;
  selectedGlasswareId: GlasswareId;
  onSelect: (glassId: GlasswareId) => void;
}

export const GlasswareSelector: React.FC<GlasswareSelectorProps> = ({
  destination,
  selectedGlasswareId,
  onSelect,
}) => {
  const options = getGlasswareForDestination(destination);

  return (
    <div className="w-full bg-[#FBF7F0] border-2 border-[#241714] rounded-2xl p-4 shadow-[3px_3px_0px_#241714]">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#241714]/20">
        <div className="flex items-center gap-2">
          <span className="text-lg select-none" aria-hidden="true">
            🍷
          </span>
          <div>
            <h4 className="font-serif font-bold text-sm text-[#321B18] tracking-wide">
              Choix du Verre &bull; Glassware
            </h4>
            <span className="text-[11px] font-handwriting text-[#A51F32] font-bold block sm:inline">
              Select your serving vessel
            </span>
          </div>
        </div>
        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#241714]/10 text-[#321B18]/70 font-bold">
          {options.length} styles
        </span>
      </div>

      {/* Glassware Options Grid / Row */}
      <div
        role="radiogroup"
        aria-label="Glassware selection"
        className="grid grid-cols-2 sm:grid-cols-4 gap-2.5"
      >
        {options.map((glass: GlasswareInfo) => {
          const isSelected = selectedGlasswareId === glass.id;

          return (
            <button
              key={glass.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelect(glass.id)}
              className={`group relative p-2.5 rounded-xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between min-h-[78px] ${
                isSelected
                  ? "bg-[#FFFDF9] border-[#A51F32] shadow-[3px_3px_0px_#A51F32] -translate-y-0.5 ring-2 ring-[#A51F32]/20"
                  : "bg-[#F4EBDD]/60 border-[#241714]/40 hover:border-[#241714] hover:bg-[#F4EBDD] shadow-[1px_1px_0px_#241714]"
              }`}
            >
              {/* Selected Badge Indicator */}
              {isSelected && (
                <div className="absolute -top-2 -right-1 bg-[#A51F32] text-white text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full border border-[#241714] shadow-xs">
                  ✓
                </div>
              )}

              {/* Icon & Capacity */}
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-xl select-none" aria-hidden="true">
                  {glass.icon}
                </span>
                <span className="text-[10px] font-mono text-[#321B18]/60 font-semibold">
                  {glass.capacityMl} ml
                </span>
              </div>

              {/* Glass Name & French Subtitle */}
              <div>
                <p
                  className={`font-serif text-xs font-bold leading-tight line-clamp-1 ${
                    isSelected ? "text-[#A51F32]" : "text-[#321B18]"
                  }`}
                >
                  {glass.name}
                </p>
                <p className="font-handwriting text-[11px] text-[#321B18]/70 leading-none truncate mt-0.5">
                  {glass.frenchName}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
