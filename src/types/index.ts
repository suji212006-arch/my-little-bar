export type DestinationId = 'coffee' | 'chai' | 'soda' | 'high-bar';

export type IngredientCategory =
  | 'base'
  | 'coffee'
  | 'tea'
  | 'milk'
  | 'syrup'
  | 'spice'
  | 'soda'
  | 'fruit'
  | 'garnish'
  | 'spirit'
  | 'liqueur'
  | 'bitters';

export interface Ingredient {
  id: string;
  name: string;
  category: IngredientCategory;
  compatibleDestinations: DestinationId[];
  defaultUnit: string;
  flavourNote?: string;
  isAlcoholic?: boolean;
  color?: string;
}

export interface RecipeIngredient {
  ingredientId: string;
  name: string;
  quantity: number;
  unit: string;
  category?: IngredientCategory;
  isAlcoholic?: boolean;
  color?: string;
}

export type GlasswareId =
  // Coffee
  | 'espresso-cup'
  | 'cappuccino-cup'
  | 'latte-glass'
  | 'iced-coffee-tumbler'
  // Chai
  | 'teacup-saucer'
  | 'traditional-chai'
  | 'matcha-bowl'
  | 'iced-tea-glass'
  // Soda
  | 'soda-fountain'
  | 'highball-glass'
  | 'mason-jar'
  | 'sundae-glass'
  // High Bar
  | 'coupe-glass'
  | 'martini-glass'
  | 'rocks-glass'
  | 'hurricane-glass';

export interface GlasswareInfo {
  id: GlasswareId;
  name: string;
  frenchName: string;
  destination: DestinationId;
  description: string;
  capacityMl: number;
  icon: string;
}

export interface Recipe {
  id: string;
  name: string;
  destination: DestinationId;
  glasswareId?: GlasswareId;
  ingredients: RecipeIngredient[];
  instructions?: string;
  notes?: string;
  isMocktail?: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface DestinationInfo {
  id: DestinationId;
  name: string;
  frenchSubtitle: string;
  tagline: string;
  description: string;
  accentColor: string;
  bgTint: string;
  badgeLabel: string;
  iconName: string;
}
