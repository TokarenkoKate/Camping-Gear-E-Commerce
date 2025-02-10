/**
 * Shared base properties
 */
interface ProductBase {
  id: number;
  name: string;
  category: string;
  price: string;
  colors: string[];
}

/**
 * Short product object for products galleries
 */
export interface ProductSummary extends ProductBase {
  thumbnailUrl: string;
}

/**
 * Data for product visual representation section
 */
export interface ProductVisuals {
  title: string;
  description: string;
  imagesUrl: string[];
}

/**
 * Full product object for details page
 */
export interface ProductDetails extends ProductBase {
  imageUrl: string;
  reward?: string;
  visuals: ProductVisuals;
}
