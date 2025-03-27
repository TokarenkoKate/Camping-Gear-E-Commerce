import { ProductDetails } from "@/entities/product";

export interface Cart {
  id: number;
  items: CartItem[];
  size: number;
  subtotal: number;
}

export interface CartItem {
  id: number;
  quantity: number;
  product: ProductDetails;
}

export interface NewCartItemBody {
  productId: number;
  quantity: number;
}
