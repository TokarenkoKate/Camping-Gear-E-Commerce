export interface CartSchema {
  /**
   * key - product id,
   * value - products count
   */
  products: Record<number, number> | null;
}
