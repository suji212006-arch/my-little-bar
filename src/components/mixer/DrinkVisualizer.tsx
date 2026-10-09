"use client";

import React from "react";
import { DestinationId, GlasswareId, RecipeIngredient } from "@/types";
import { getDefaultGlasswareForDestination, getGlasswareById } from "@/data/glassware";

interface DrinkVisualizerProps {
  destination: DestinationId;
  glasswareId?: GlasswareId;
  ingredients: RecipeIngredient[];
  drinkName: string;
}

export const DrinkVisualizer: React.FC<DrinkVisualizerProps> = ({
  destination,
  glasswareId,
  ingredients,
  drinkName,
}) => {
  // Resolved glassware with safe default fallback
  const activeGlassId = glasswareId || getDefaultGlasswareForDestination(destination);
  const glassInfo = getGlasswareById(activeGlassId);

  // Separate liquid ingredients (ml) from solids/garnishes
  const liquidIngredients = ingredients.filter((i) => i.unit === "ml");
  const totalVolume = liquidIngredients.reduce((acc, curr) => acc + curr.quantity, 0);

  // Garnishes detection
  const hasCherry = ingredients.some((i) => i.ingredientId === "luxardo-cherry");
  const hasOrange = ingredients.some((i) => i.ingredientId === "orange-twist");
  const hasLemon = ingredients.some(
    (i) => i.ingredientId === "fresh-lemon" || i.ingredientId === "fresh-lime"
  );
  const hasMint = ingredients.some((i) => i.ingredientId === "fresh-mint");
  const hasCinnamon = ingredients.some((i) => i.ingredientId === "cinnamon-bark");
  const hasWhippedCream = ingredients.some((i) => i.ingredientId === "whipped-cream");
  const hasSaffron = ingredients.some((i) => i.ingredientId === "saffron-threads");
  const hasPistachio = ingredients.some((i) => i.ingredientId === "crushed-pistachios");
  const hasChocolate = ingredients.some((i) => i.ingredientId === "chocolate-shavings");
  const hasIce = ingredients.some((i) =>
    ["coffee-ice", "chai-ice", "soda-ice", "bar-ice"].includes(i.ingredientId)
  );

  // Glassware specific layout configuration
  // Controls liquid base height, max stack height, and garnish positioning
  interface GlassMetrics {
    clipId: string;
    liquidBaseY: number;
    maxLiquidHeight: number;
    garnishRimY: number;
    liquidRectX: number;
    liquidRectWidth: number;
  }

  const getGlassMetrics = (id: GlasswareId): GlassMetrics => {
    switch (id) {
      // COFFEE
      case "espresso-cup":
        return {
          clipId: "espresso-liquid-clip",
          liquidBaseY: 176,
          maxLiquidHeight: 68,
          garnishRimY: 98,
          liquidRectX: 50,
          liquidRectWidth: 100,
        };
      case "cappuccino-cup":
        return {
          clipId: "cappuccino-liquid-clip",
          liquidBaseY: 180,
          maxLiquidHeight: 118,
          garnishRimY: 50,
          liquidRectX: 45,
          liquidRectWidth: 110,
        };
      case "latte-glass":
        return {
          clipId: "latte-liquid-clip",
          liquidBaseY: 180,
          maxLiquidHeight: 128,
          garnishRimY: 42,
          liquidRectX: 40,
          liquidRectWidth: 120,
        };
      case "iced-coffee-tumbler":
        return {
          clipId: "iced-coffee-clip",
          liquidBaseY: 186,
          maxLiquidHeight: 136,
          garnishRimY: 40,
          liquidRectX: 45,
          liquidRectWidth: 110,
        };

      // CHAI
      case "teacup-saucer":
        return {
          clipId: "teacup-liquid-clip",
          liquidBaseY: 162,
          maxLiquidHeight: 74,
          garnishRimY: 80,
          liquidRectX: 40,
          liquidRectWidth: 120,
        };
      case "traditional-chai":
        return {
          clipId: "chai-liquid-clip",
          liquidBaseY: 183,
          maxLiquidHeight: 135,
          garnishRimY: 40,
          liquidRectX: 40,
          liquidRectWidth: 120,
        };
      case "matcha-bowl":
        return {
          clipId: "matcha-liquid-clip",
          liquidBaseY: 180,
          maxLiquidHeight: 88,
          garnishRimY: 82,
          liquidRectX: 25,
          liquidRectWidth: 150,
        };
      case "iced-tea-glass":
        return {
          clipId: "iced-tea-clip",
          liquidBaseY: 190,
          maxLiquidHeight: 145,
          garnishRimY: 36,
          liquidRectX: 50,
          liquidRectWidth: 100,
        };

      // SODA
      case "soda-fountain":
        return {
          clipId: "soda-fountain-clip",
          liquidBaseY: 166,
          maxLiquidHeight: 120,
          garnishRimY: 38,
          liquidRectX: 40,
          liquidRectWidth: 120,
        };
      case "highball-glass":
        return {
          clipId: "highball-liquid-clip",
          liquidBaseY: 191,
          maxLiquidHeight: 145,
          garnishRimY: 35,
          liquidRectX: 55,
          liquidRectWidth: 90,
        };
      case "mason-jar":
        return {
          clipId: "mason-jar-clip",
          liquidBaseY: 190,
          maxLiquidHeight: 140,
          garnishRimY: 38,
          liquidRectX: 45,
          liquidRectWidth: 110,
        };
      case "sundae-glass":
        return {
          clipId: "sundae-liquid-clip",
          liquidBaseY: 160,
          maxLiquidHeight: 110,
          garnishRimY: 42,
          liquidRectX: 40,
          liquidRectWidth: 120,
        };

      // HIGH BAR
      case "coupe-glass":
        return {
          clipId: "coupe-liquid-clip",
          liquidBaseY: 118,
          maxLiquidHeight: 68,
          garnishRimY: 45,
          liquidRectX: 30,
          liquidRectWidth: 140,
        };
      case "martini-glass":
        return {
          clipId: "martini-liquid-clip",
          liquidBaseY: 122,
          maxLiquidHeight: 76,
          garnishRimY: 38,
          liquidRectX: 25,
          liquidRectWidth: 150,
        };
      case "rocks-glass":
        return {
          clipId: "rocks-liquid-clip",
          liquidBaseY: 165,
          maxLiquidHeight: 92,
          garnishRimY: 65,
          liquidRectX: 50,
          liquidRectWidth: 100,
        };
      case "hurricane-glass":
        return {
          clipId: "hurricane-liquid-clip",
          liquidBaseY: 173,
          maxLiquidHeight: 130,
          garnishRimY: 35,
          liquidRectX: 40,
          liquidRectWidth: 120,
        };

      default:
        return {
          clipId: "cappuccino-liquid-clip",
          liquidBaseY: 180,
          maxLiquidHeight: 118,
          garnishRimY: 50,
          liquidRectX: 45,
          liquidRectWidth: 110,
        };
    }
  };

  const metrics = getGlassMetrics(activeGlassId);
  const showFizz = destination === "soda" || activeGlassId === "highball-glass" || activeGlassId === "soda-fountain";

  return (
    <div className="relative flex flex-col items-center justify-between p-5 sm:p-6 bg-[#FBF7F0] border-2 border-[#241714] rounded-2xl shadow-[4px_4px_0px_#241714] min-h-[400px]">
      {/* Top Glass Caption */}
      <div className="w-full text-center border-b-2 border-dashed border-[#241714]/25 pb-2.5 mb-2">
        <span className="font-handwriting text-2xl text-[#A51F32] font-bold block truncate px-2">
          {drinkName.trim() ? `“${drinkName}”` : "Le Verre du Barista"}
        </span>
        <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#321B18]/70 uppercase tracking-widest mt-1">
          <span className="font-bold text-[#A51F32]">{glassInfo.name}</span>
          <span>&bull;</span>
          <span>{totalVolume > 0 ? `${totalVolume} ml liquid` : "Empty vessel"}</span>
          <span>&bull;</span>
          <span>
            {ingredients.length} {ingredients.length === 1 ? "element" : "elements"}
          </span>
        </div>
      </div>

      {/* Glass Container Graphic */}
      <div className="relative w-56 h-64 flex items-center justify-center my-auto">
        <svg
          viewBox="0 0 200 240"
          className="w-full h-full select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ===================================================
              SVG CLIP PATH DEFINITIONS FOR ALL GLASS SILHOUETTES
              =================================================== */}
          <defs>
            {/* Coffee Glassware Clips */}
            <clipPath id="espresso-liquid-clip">
              <rect x="62" y="100" width="76" height="78" rx="8" />
            </clipPath>
            <clipPath id="cappuccino-liquid-clip">
              <rect x="52" y="52" width="96" height="128" rx="12" />
            </clipPath>
            <clipPath id="latte-liquid-clip">
              <polygon points="48,44 152,44 134,180 66,180" />
            </clipPath>
            <clipPath id="iced-coffee-clip">
              <polygon points="52,42 148,42 140,186 60,186" />
            </clipPath>

            {/* Chai Glassware Clips */}
            <clipPath id="teacup-liquid-clip">
              <path d="M 46 82 C 46 163, 154 163, 154 82 Z" />
            </clipPath>
            <clipPath id="chai-liquid-clip">
              <polygon points="54,42 146,42 133,183 67,183" />
            </clipPath>
            <clipPath id="matcha-liquid-clip">
              <path d="M 34 84 C 36 138, 62 180, 100 180 C 138 180, 164 138, 166 84 Z" />
            </clipPath>
            <clipPath id="iced-tea-clip">
              <rect x="60" y="38" width="80" height="154" rx="4" />
            </clipPath>

            {/* Soda Glassware Clips */}
            <clipPath id="soda-fountain-clip">
              <path d="M 48 40 L 152 40 L 132 166 C 118 172, 82 172, 68 166 Z" />
            </clipPath>
            <clipPath id="highball-liquid-clip">
              <rect x="62" y="37" width="76" height="156" rx="4" />
            </clipPath>
            <clipPath id="mason-jar-clip">
              <rect x="50" y="40" width="100" height="152" rx="12" />
            </clipPath>
            <clipPath id="sundae-liquid-clip">
              <path d="M 46 44 C 50 105, 75 160, 100 160 C 125 160, 150 105, 154 44 Z" />
            </clipPath>

            {/* High Bar Glassware Clips */}
            <clipPath id="coupe-liquid-clip">
              <path d="M 34 47 C 34 123, 166 123, 166 47 Z" />
            </clipPath>
            <clipPath id="martini-liquid-clip">
              <polygon points="29,40 171,40 100,122" />
            </clipPath>
            <clipPath id="rocks-liquid-clip">
              <rect x="54" y="67" width="92" height="98" rx="4" />
            </clipPath>
            <clipPath id="hurricane-liquid-clip">
              <path d="M 50 37 C 62 75, 44 110, 66 148 C 76 168, 90 173, 100 173 C 110 173, 124 168, 134 148 C 156 110, 138 75, 150 37 Z" />
            </clipPath>
          </defs>

          {/* ===================================================
              BACKGROUND GLASS DETAILS (Saucers, Coasters, Handles)
              =================================================== */}
          {/* 1. ESPRESSO CUP */}
          {activeGlassId === "espresso-cup" && (
            <g id="espresso-silhouette-bg">
              <ellipse cx="100" cy="188" rx="58" ry="8" fill="#F4EBDD" stroke="#241714" strokeWidth="2.5" />
              <path d="M 138 116 C 166 118, 166 150, 138 154" stroke="#241714" strokeWidth="5" fill="none" />
              <path d="M 138 116 C 166 118, 166 150, 138 154" stroke="#D5B99A" strokeWidth="2.5" fill="none" />
              <rect x="60" y="98" width="80" height="82" rx="10" fill="#FFFDF9" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* 2. CAPPUCCINO CUP */}
          {activeGlassId === "cappuccino-cup" && (
            <g id="cappuccino-silhouette-bg">
              <path d="M 148 70 C 185 70, 185 150, 145 155" stroke="#241714" strokeWidth="7" fill="none" />
              <path d="M 148 70 C 185 70, 185 150, 145 155" stroke="#D5B99A" strokeWidth="4" fill="none" />
              <ellipse cx="100" cy="192" rx="72" ry="10" fill="#F4EBDD" stroke="#241714" strokeWidth="2.5" />
              <rect x="50" y="50" width="100" height="132" rx="14" fill="#FFFDF9" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* 3. LATTE GLASS */}
          {activeGlassId === "latte-glass" && (
            <g id="latte-silhouette-bg">
              <ellipse cx="100" cy="196" rx="46" ry="7" fill="#EDF5F7" stroke="#241714" strokeWidth="2" />
              <rect x="90" y="180" width="20" height="14" fill="#F7FCFD" stroke="#241714" strokeWidth="2" />
              <path d="M 50 78 C 22 78, 22 145, 54 145" stroke="#241714" strokeWidth="5" fill="none" />
              <polygon points="46,42 154,42 136,182 64,182" fill="#FFFDF9" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* 4. ICED COFFEE TUMBLER */}
          {activeGlassId === "iced-coffee-tumbler" && (
            <g id="iced-tumbler-silhouette-bg">
              <ellipse cx="100" cy="196" rx="54" ry="8" fill="#F4EBDD" stroke="#241714" strokeWidth="2" />
              <polygon points="50,40 150,40 142,188 58,188" fill="#F8FAFC" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* 5. TEACUP WITH SAUCER */}
          {activeGlassId === "teacup-saucer" && (
            <g id="teacup-silhouette-bg">
              <ellipse cx="100" cy="188" rx="74" ry="12" fill="#FBF7F0" stroke="#241714" strokeWidth="2.5" />
              <ellipse cx="100" cy="188" rx="52" ry="8" stroke="#D99A2B" strokeWidth="1.5" fill="none" />
              <path d="M 152 88 C 182 88, 182 142, 144 146" stroke="#241714" strokeWidth="6" fill="none" />
              <path d="M 152 88 C 182 88, 182 142, 144 146" stroke="#D5B99A" strokeWidth="3" fill="none" />
              <path d="M 44 80 C 44 165, 156 165, 156 80 Z" fill="#FFFDF9" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* 6. TRADITIONAL CHAI GLASS */}
          {activeGlassId === "traditional-chai" && (
            <g id="chai-silhouette-bg">
              <ellipse cx="100" cy="192" rx="58" ry="8" fill="#F4EBDD" stroke="#241714" strokeWidth="2" />
              <polygon points="52,40 148,40 135,185 65,185" fill="#FCF5E8" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* 7. MATCHA BOWL (CHAWAN) */}
          {activeGlassId === "matcha-bowl" && (
            <g id="matcha-silhouette-bg">
              <ellipse cx="100" cy="186" rx="46" ry="7" fill="#D5B99A" stroke="#241714" strokeWidth="2.5" />
              <path d="M 32 82 C 34 140, 60 182, 100 182 C 140 182, 166 140, 168 82 Z" fill="#F5EFE6" stroke="#241714" strokeWidth="3.5" />
            </g>
          )}

          {/* 8. ICED TEA GLASS */}
          {activeGlassId === "iced-tea-glass" && (
            <g id="iced-tea-silhouette-bg">
              <ellipse cx="100" cy="196" rx="52" ry="7" fill="#F4EBDD" stroke="#241714" strokeWidth="2" />
              <rect x="58" y="36" width="84" height="158" rx="6" fill="#F8FAFC" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* 9. SODA FOUNTAIN GLASS */}
          {activeGlassId === "soda-fountain" && (
            <g id="soda-fountain-silhouette-bg">
              <ellipse cx="100" cy="196" rx="48" ry="8" fill="#EDF5F7" stroke="#241714" strokeWidth="2.5" />
              <rect x="88" y="168" width="24" height="24" fill="#F7FCFD" stroke="#241714" strokeWidth="2" />
              <path d="M 46 38 L 154 38 L 134 168 C 120 174, 80 174, 66 168 Z" fill="#FFFDF9" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* 10. HIGHBALL GLASS */}
          {activeGlassId === "highball-glass" && (
            <g id="highball-silhouette-bg">
              <ellipse cx="100" cy="198" rx="52" ry="7" fill="#EDF5F7" stroke="#241714" strokeWidth="2" />
              <rect x="60" y="35" width="80" height="160" rx="6" fill="#F7FCFD" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* 11. MASON JAR */}
          {activeGlassId === "mason-jar" && (
            <g id="mason-jar-silhouette-bg">
              <path d="M 50 65 C 18 65, 18 145, 50 145" stroke="#241714" strokeWidth="7" fill="none" />
              <path d="M 50 65 C 18 65, 18 145, 50 145" stroke="#D5B99A" strokeWidth="3.5" fill="none" />
              <rect x="60" y="28" width="80" height="10" rx="2" fill="#F4EBDD" stroke="#241714" strokeWidth="2" />
              <line x1="64" y1="32" x2="136" y2="32" stroke="#241714" strokeWidth="1" />
              <line x1="64" y1="35" x2="136" y2="35" stroke="#241714" strokeWidth="1" />
              <rect x="48" y="38" width="104" height="156" rx="14" fill="#FFFDF9" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* 12. SUNDAE GLASS */}
          {activeGlassId === "sundae-glass" && (
            <g id="sundae-silhouette-bg">
              <ellipse cx="100" cy="196" rx="46" ry="7" fill="#EDF5F7" stroke="#241714" strokeWidth="2" />
              <rect x="92" y="162" width="16" height="32" fill="#F7FCFD" stroke="#241714" strokeWidth="2" />
              <path d="M 44 42 C 48 105, 75 162, 100 162 C 125 162, 152 105, 156 42 Z" fill="#FFFDF9" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* 13. COUPE GLASS */}
          {activeGlassId === "coupe-glass" && (
            <g id="coupe-silhouette-bg">
              <line x1="100" y1="120" x2="100" y2="188" stroke="#241714" strokeWidth="4" />
              <ellipse cx="100" cy="190" rx="42" ry="8" fill="#F4EBDD" stroke="#241714" strokeWidth="2.5" />
              <path d="M 32 45 C 32 125, 168 125, 168 45 Z" fill="#FFFDF9" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* 14. MARTINI GLASS */}
          {activeGlassId === "martini-glass" && (
            <g id="martini-silhouette-bg">
              <line x1="100" y1="124" x2="100" y2="188" stroke="#241714" strokeWidth="4" />
              <ellipse cx="100" cy="190" rx="42" ry="8" fill="#F4EBDD" stroke="#241714" strokeWidth="2.5" />
              <polygon points="26,38 174,38 100,124" fill="#FFFDF9" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* 15. ROCKS GLASS */}
          {activeGlassId === "rocks-glass" && (
            <g id="rocks-silhouette-bg">
              <ellipse cx="100" cy="196" rx="56" ry="7" fill="#F4EBDD" stroke="#241714" strokeWidth="2" />
              <rect x="52" y="65" width="96" height="125" rx="6" fill="#FFFDF9" stroke="#241714" strokeWidth="3" />
              <rect x="54" y="162" width="92" height="26" rx="3" fill="#D5B99A" opacity="0.35" stroke="#241714" strokeWidth="1.5" />
            </g>
          )}

          {/* 16. HURRICANE GLASS */}
          {activeGlassId === "hurricane-glass" && (
            <g id="hurricane-silhouette-bg">
              <ellipse cx="100" cy="196" rx="44" ry="7" fill="#EDF5F7" stroke="#241714" strokeWidth="2" />
              <rect x="92" y="174" width="16" height="18" fill="#F7FCFD" stroke="#241714" strokeWidth="2" />
              <path d="M 48 35 C 60 75, 42 110, 64 150 C 74 170, 90 175, 100 175 C 110 175, 126 170, 136 150 C 158 110, 140 75, 152 35 Z" fill="#FFFDF9" stroke="#241714" strokeWidth="3" />
            </g>
          )}

          {/* ===================================================
              STACKED LIQUID LAYERS (Clipped dynamically by active shape)
              =================================================== */}
          <g clipPath={`url(#${metrics.clipId})`}>
            {liquidIngredients.map((item, idx) => {
              const maxH = metrics.maxLiquidHeight;
              const portionHeight = Math.max(
                10,
                Math.min(maxH, (item.quantity / (totalVolume || 1)) * maxH)
              );
              const prevHeights = liquidIngredients
                .slice(0, idx)
                .reduce(
                  (sum, p) =>
                    sum +
                    Math.max(
                      10,
                      Math.min(maxH, (p.quantity / (totalVolume || 1)) * maxH)
                    ),
                  0
                );
              const yPos = metrics.liquidBaseY - prevHeights - portionHeight;
              const color = item.color || "#8B4513";

              return (
                <rect
                  key={item.ingredientId}
                  x={metrics.liquidRectX}
                  y={yPos}
                  width={metrics.liquidRectWidth}
                  height={portionHeight}
                  fill={color}
                  opacity={0.92}
                  className="transition-all duration-500 ease-out"
                />
              );
            })}

            {/* Rising Carbonation Fizz Bubbles */}
            {totalVolume > 0 && showFizz && (
              <g fill="#FFF" stroke="#241714" strokeWidth="0.8">
                <circle cx="75" cy="155" r="2.5" className="animate-pulse" />
                <circle cx="88" cy="125" r="3" />
                <circle cx="115" cy="140" r="2.5" className="animate-pulse" />
                <circle cx="95" cy="90" r="3" />
                <circle cx="120" cy="75" r="2.5" />
                <circle cx="80" cy="65" r="2" />
              </g>
            )}
          </g>

          {/* ===================================================
              FOREGROUND GLASS DETAILS (Ribs, facets, highlights)
              =================================================== */}
          {activeGlassId === "traditional-chai" && (
            <g stroke="#241714" strokeWidth="1" opacity={0.25}>
              <line x1="75" y1="45" x2="80" y2="180" />
              <line x1="100" y1="45" x2="100" y2="180" />
              <line x1="125" y1="45" x2="120" y2="180" />
            </g>
          )}

          {activeGlassId === "iced-coffee-tumbler" && (
            <g stroke="#241714" strokeWidth="1" opacity={0.25}>
              <line x1="72" y1="45" x2="76" y2="182" />
              <line x1="100" y1="45" x2="100" y2="182" />
              <line x1="128" y1="45" x2="124" y2="182" />
            </g>
          )}

          {activeGlassId === "rocks-glass" && (
            <g stroke="#241714" strokeWidth="1.2" opacity={0.3}>
              <line x1="74" y1="72" x2="74" y2="155" />
              <line x1="100" y1="72" x2="100" y2="155" />
              <line x1="126" y1="72" x2="126" y2="155" />
            </g>
          )}

          {activeGlassId === "mason-jar" && (
            <text
              x="100"
              y="115"
              textAnchor="middle"
              fill="#241714"
              fontSize="8"
              fontFamily="monospace"
              opacity={0.35}
              letterSpacing="2"
            >
              PARIS CAFE
            </text>
          )}

          {/* ===================================================
              DYNAMIC GARNISHES (Adaptively anchored to rim)
              =================================================== */}
          {/* Whipped Cream Cloud on Top */}
          {hasWhippedCream && (
            <g
              id="whipped-cream-topping"
              transform={`translate(0, ${metrics.garnishRimY - 46})`}
              className="transition-all duration-300"
            >
              <path
                d="M 68 46 Q 80 32, 100 36 Q 120 30, 132 46 Z"
                fill="#FFFFFF"
                stroke="#241714"
                strokeWidth="2"
              />
              <path
                d="M 85 36 Q 100 24, 115 36"
                stroke="#241714"
                strokeWidth="1.5"
                fill="none"
              />
            </g>
          )}

          {/* Ice Cubes */}
          {hasIce && (
            <g
              id="ice-cubes"
              transform={`translate(0, ${metrics.garnishRimY - 40})`}
              className="transition-opacity duration-300"
            >
              <rect
                x="76"
                y="65"
                width="20"
                height="20"
                rx="4"
                fill="#FFFFFF"
                stroke="#241714"
                strokeWidth="1.5"
                opacity={0.82}
              />
              <rect
                x="104"
                y="76"
                width="18"
                height="18"
                rx="4"
                fill="#FFFFFF"
                stroke="#241714"
                strokeWidth="1.5"
                opacity={0.82}
                transform="rotate(15 104 76)"
              />
            </g>
          )}

          {/* Maraschino Cherry on Pick */}
          {hasCherry && (
            <g
              id="cherry-garnish"
              transform={`translate(0, ${metrics.garnishRimY - 40})`}
              className="transition-transform duration-300"
            >
              <line x1="85" y1="15" x2="125" y2="55" stroke="#241714" strokeWidth="2.5" />
              <circle cx="95" cy="28" r="8" fill="#861625" stroke="#241714" strokeWidth="2" />
            </g>
          )}

          {/* Orange Twist */}
          {hasOrange && (
            <g
              id="orange-garnish"
              transform={`translate(140, ${metrics.garnishRimY - 15}) rotate(35)`}
              className="transition-transform duration-300"
            >
              <circle cx="14" cy="14" r="14" fill="#EDB856" stroke="#241714" strokeWidth="2" />
              <line x1="14" y1="3" x2="14" y2="25" stroke="#FFF" strokeWidth="1.5" />
              <line x1="3" y1="14" x2="25" y2="14" stroke="#FFF" strokeWidth="1.5" />
            </g>
          )}

          {/* Lemon / Lime Wheel */}
          {hasLemon && !hasOrange && (
            <g
              id="lemon-garnish"
              transform={`translate(136, ${metrics.garnishRimY - 12}) rotate(20)`}
              className="transition-transform duration-300"
            >
              <circle cx="14" cy="14" r="14" fill="#F6E86B" stroke="#241714" strokeWidth="2" />
              <circle cx="14" cy="14" r="11" fill="#FFFBE6" stroke="#241714" strokeWidth="1" strokeDasharray="2 2" />
            </g>
          )}

          {/* Fresh Mint Sprig */}
          {hasMint && (
            <g
              id="mint-garnish"
              transform={`translate(42, ${metrics.garnishRimY - 20})`}
              className="transition-transform duration-300"
            >
              <ellipse
                cx="12"
                cy="10"
                rx="9"
                ry="6"
                fill="#5E7D58"
                stroke="#241714"
                strokeWidth="1.5"
                transform="rotate(-30)"
              />
              <ellipse
                cx="20"
                cy="14"
                rx="9"
                ry="6"
                fill="#4B6646"
                stroke="#241714"
                strokeWidth="1.5"
                transform="rotate(20)"
              />
            </g>
          )}

          {/* Cinnamon Stick */}
          {hasCinnamon && (
            <g
              id="cinnamon-garnish"
              transform={`translate(120, ${metrics.garnishRimY - 25}) rotate(22 120 15)`}
              className="transition-transform duration-300"
            >
              <rect
                x="0"
                y="0"
                width="10"
                height="65"
                rx="3"
                fill="#8B4513"
                stroke="#241714"
                strokeWidth="2"
              />
            </g>
          )}

          {/* Saffron Threads */}
          {hasSaffron && (
            <g
              id="saffron-garnish"
              transform={`translate(0, ${metrics.garnishRimY - 45})`}
            >
              <line x1="88" y1="50" x2="96" y2="46" stroke="#D95B28" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="94" y1="48" x2="104" y2="52" stroke="#D95B28" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          )}

          {/* Pistachio / Chocolate Crumbs */}
          {(hasPistachio || hasChocolate) && (
            <g
              id="crumbs-garnish"
              transform={`translate(0, ${metrics.garnishRimY - 45})`}
            >
              <circle cx="85" cy="48" r="1.5" fill={hasPistachio ? "#92A769" : "#2D140C"} />
              <circle cx="95" cy="50" r="1.5" fill={hasPistachio ? "#92A769" : "#2D140C"} />
              <circle cx="108" cy="49" r="1.5" fill={hasPistachio ? "#92A769" : "#2D140C"} />
              <circle cx="118" cy="51" r="1.5" fill={hasPistachio ? "#92A769" : "#2D140C"} />
            </g>
          )}

          {/* Empty State Overlay */}
          {ingredients.length === 0 && (
            <g className="transition-opacity duration-300">
              <text
                x="100"
                y={metrics.garnishRimY + (metrics.liquidBaseY - metrics.garnishRimY) / 2 - 8}
                textAnchor="middle"
                fill="#241714"
                fontSize="12"
                fontFamily="cursive"
                opacity={0.65}
              >
                Drop in your first
              </text>
              <text
                x="100"
                y={metrics.garnishRimY + (metrics.liquidBaseY - metrics.garnishRimY) / 2 + 10}
                textAnchor="middle"
                fill="#A51F32"
                fontSize="13"
                fontFamily="cursive"
                fontWeight="bold"
                opacity={0.85}
              >
                artisan ingredient! 🍃
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Bottom Ingredients Quick Tally */}
      <div className="w-full text-center pt-2 border-t border-[#241714]/15">
        <span className="font-serif text-xs text-[#321B18]/70">
          {ingredients.length === 0
            ? `${glassInfo.name} ready on the counter`
            : `Layering ${liquidIngredients.length} liquid${liquidIngredients.length === 1 ? "" : "s"} & ${
                ingredients.length - liquidIngredients.length
              } garnish${ingredients.length - liquidIngredients.length === 1 ? "" : "es"}`}
        </span>
      </div>
    </div>
  );
};
