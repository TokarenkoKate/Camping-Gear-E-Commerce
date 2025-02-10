import { ProductsGallery } from "@/features/products-gallery";
import {
  mockProductId1,
  mockProductId2,
  mockProductId3,
  mockProductId4,
} from "@/mocks/products/product";
import cls from "../product-page.m.scss";

export const ProductSimilarItems = () => {
  return (
    <ProductsGallery
      products={[
        mockProductId1,
        mockProductId2,
        mockProductId3,
        mockProductId4,
      ]}
      className={cls.similarItems}
    />
  );
};
