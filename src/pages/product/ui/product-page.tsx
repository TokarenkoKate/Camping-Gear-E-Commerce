import { UiBox } from "@/shared/ui";
import { ProductInfo } from "./product-info/product-info";
import { mockProductDetails } from "@/mocks/products/product";
import { ProductVisuals } from "./product-visuals/product-visuals";
import { ProductSpecifications } from "./product-specifications/product-specifications";
import { ProductSimilarItems } from "./product-similar-items/product-similar-items";
import cls from "./product-page.m.scss";

export const ProductPage = () => {
  return (
    <UiBox className={cls.productPage}>
      <ProductInfo product={mockProductDetails} />
      <ProductVisuals visuals={mockProductDetails.visuals} />
      <ProductSpecifications
        specifications={mockProductDetails.specifications}
      />
      <ProductSimilarItems />
    </UiBox>
  );
};
