import { DestinationId, GlasswareId, GlasswareInfo } from "@/types";

export const GLASSWARE_OPTIONS: GlasswareInfo[] = [
  // ==========================================
  // 1. COFFEE BARISTA GLASSWARE
  // ==========================================
  {
    id: "espresso-cup",
    name: "Espresso Cup",
    frenchName: "Tasse à Espresso",
    destination: "coffee",
    description: "Petite ceramic demi-tasse with saucer, ideal for rich ristretto and doppio pulls.",
    capacityMl: 90,
    icon: "☕",
  },
  {
    id: "cappuccino-cup",
    name: "Cappuccino Cup",
    frenchName: "Tasse Bistro",
    destination: "coffee",
    description: "Classic rounded Parisian bistro ceramic mug with saucer for silky microfoam.",
    capacityMl: 220,
    icon: "🫖",
  },
  {
    id: "latte-glass",
    name: "Latte Glass",
    frenchName: "Verre à Latte",
    destination: "coffee",
    description: "Tall flared clear glass showcasing dramatic espresso and steamed milk layers.",
    capacityMl: 300,
    icon: "🥛",
  },
  {
    id: "iced-coffee-tumbler",
    name: "Iced Tumbler",
    frenchName: "Gobelet Glacé",
    destination: "coffee",
    description: "Faceted heavy tumbler crafted for chilled brews, cold foams, and clinking ice.",
    capacityMl: 350,
    icon: "🧊",
  },

  // ==========================================
  // 2. CHAI HOUSE GLASSWARE
  // ==========================================
  {
    id: "teacup-saucer",
    name: "Teacup with Saucer",
    frenchName: "Tasse en Porcelaine",
    destination: "chai",
    description: "Delicate vintage porcelain teacup with decorative handle and scalloped saucer.",
    capacityMl: 200,
    icon: "🫖",
  },
  {
    id: "traditional-chai",
    name: "Traditional Chai Glass",
    frenchName: "Verre à Chai Ciselé",
    destination: "chai",
    description: "Authentic tapered street glass with vertical fluted ribs and warm brass coaster.",
    capacityMl: 180,
    icon: "🍵",
  },
  {
    id: "matcha-bowl",
    name: "Matcha Bowl (Chawan)",
    frenchName: "Bol à Matcha",
    destination: "chai",
    description: "Wide earthenware ceremonial bowl crafted for whisking velvety jade clouds.",
    capacityMl: 260,
    icon: "🥣",
  },
  {
    id: "iced-tea-glass",
    name: "Iced Tea Glass",
    frenchName: "Verre à Thé Glacé",
    destination: "chai",
    description: "Tall cooling cylinder glass for floral, spiced, and botanical iced tea blends.",
    capacityMl: 320,
    icon: "🧊",
  },

  // ==========================================
  // 3. SODA LAB GLASSWARE
  // ==========================================
  {
    id: "soda-fountain",
    name: "Soda Fountain Glass",
    frenchName: "Verre Rétro Fontaine",
    destination: "soda",
    description: "Flared vintage soda parlour glass with a thick scalloped base and ample fizz room.",
    capacityMl: 350,
    icon: "🥤",
  },
  {
    id: "highball-glass",
    name: "Highball Glass",
    frenchName: "Verre Highball",
    destination: "soda",
    description: "Tall, sleek straight-sided tumbler letting carbonation bubbles rise effortlessly.",
    capacityMl: 320,
    icon: "🫧",
  },
  {
    id: "mason-jar",
    name: "Vintage Mason Jar",
    frenchName: "Bocal Rustique",
    destination: "soda",
    description: "Rustic embossed glass jar with threaded rim, sturdy side handle, and artisanal charm.",
    capacityMl: 400,
    icon: "🫙",
  },
  {
    id: "sundae-glass",
    name: "Sundae Float Glass",
    frenchName: "Coupe Soda Float",
    destination: "soda",
    description: "Fluted pedestal dish ideal for sparkling ice cream floats and cherry syrups.",
    capacityMl: 300,
    icon: "🍨",
  },

  // ==========================================
  // 4. HIGH BAR GLASSWARE
  // ==========================================
  {
    id: "coupe-glass",
    name: "Art Deco Coupe",
    frenchName: "Coupe Cocktail Rétro",
    destination: "high-bar",
    description: "Broad, shallow 1920s stemware celebrating Champagne cocktails, sours, and aperitifs.",
    capacityMl: 200,
    icon: "🍸",
  },
  {
    id: "martini-glass",
    name: "Martini Glass",
    frenchName: "Verre à Cocktail V",
    destination: "high-bar",
    description: "Dramatic inverted conical bowl with slender stem keeping chilled drinks crisp.",
    capacityMl: 180,
    icon: "🍸",
  },
  {
    id: "rocks-glass",
    name: "Rocks Glass",
    frenchName: "Verre Old Fashioned",
    destination: "high-bar",
    description: "Heavy-bottomed faceted lowball tumbler built for spirit-forward pours over large ice blocks.",
    capacityMl: 250,
    icon: "🥃",
  },
  {
    id: "hurricane-glass",
    name: "Hurricane Glass",
    frenchName: "Verre Ouragan",
    destination: "high-bar",
    description: "Sensuous, curvaceous silhouette shaped like a vintage lantern for tropical blends.",
    capacityMl: 420,
    icon: "🍹",
  },
];

export const DEFAULT_GLASSWARE_BY_DESTINATION: Record<DestinationId, GlasswareId> = {
  coffee: "cappuccino-cup",
  chai: "traditional-chai",
  soda: "soda-fountain",
  "high-bar": "coupe-glass",
};

export function getDefaultGlasswareForDestination(destination: DestinationId): GlasswareId {
  return DEFAULT_GLASSWARE_BY_DESTINATION[destination] || "cappuccino-cup";
}

export function getGlasswareById(id?: string): GlasswareInfo {
  if (!id) return GLASSWARE_OPTIONS[1]; // default cappuccino
  return GLASSWARE_OPTIONS.find((g) => g.id === id) || GLASSWARE_OPTIONS[1];
}

export function getGlasswareForDestination(destination: DestinationId): GlasswareInfo[] {
  if (destination === "high-bar") {
    // High bar includes highball-glass alongside coupe, martini, rocks, hurricane
    const highballOption: GlasswareInfo = {
      id: "highball-glass",
      name: "Highball Glass",
      frenchName: "Verre Highball Collins",
      destination: "high-bar",
      description: "Tall, slender Collins glass for fizzy highballs, French 75s, and spritzes.",
      capacityMl: 320,
      icon: "🫧",
    };

    return [
      GLASSWARE_OPTIONS.find((g) => g.id === "coupe-glass")!,
      GLASSWARE_OPTIONS.find((g) => g.id === "martini-glass")!,
      GLASSWARE_OPTIONS.find((g) => g.id === "rocks-glass")!,
      highballOption,
      GLASSWARE_OPTIONS.find((g) => g.id === "hurricane-glass")!,
    ];
  }

  return GLASSWARE_OPTIONS.filter((g) => g.destination === destination);
}
