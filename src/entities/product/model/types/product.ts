/**
 * Shared base properties
 */
interface ProductBase {
  id: number;
  name: string;
  category: string;
  price: string;
  currency: string;
  attributes: ProductAttribute[];
}

/**
 * Short product object for products galleries
 */
export interface ProductSummary extends ProductBase {
  thumbnail: string;
}

/**
 * Full product object for details page
 */
export interface ProductDetails extends ProductBase {
  image: string;
  title: string;
  description: string;
  detailsImages: string[];
}

/**
 * Product attribute type, such as colors, size, occupant capacity, etc.
 */
export interface ProductAttribute {
  key: string;
  values: string[];
}

/**
 * Short product object for products in small cards,
 * f.e. in a cart
 */
export interface ProductCart extends Omit<ProductSummary, "colors"> {
  reward?: string;
  color: string;
}
