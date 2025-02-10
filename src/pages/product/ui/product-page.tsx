import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { ProductInfo } from "./product-info/product-info";
import { mockProductDetails } from "@/mocks/products/product";
import { ProductVisuals } from "./product-visuals/product-visuals";
import cls from "./product-page.m.scss";

export const ProductPage = () => {
  return (
    <UiBox className={cls.productPage}>
      <ProductInfo product={mockProductDetails} />
      <ProductVisuals visuals={mockProductDetails.visuals} />
    </UiBox>
  );
};
