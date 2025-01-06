import type { Meta } from "@storybook/react";
import { ProductCard as ProductCardComponent } from "./product-card";
import { mockProductId1 } from "@/mocks/products/product";

export default {
  component: ProductCardComponent,
  title: "Entities/Product/ProductCard",
} as Meta<typeof ProductCardComponent>;

export const ProductCard = {
  render() {
    return <ProductCardComponent product={mockProductId1} />;
  },
};
