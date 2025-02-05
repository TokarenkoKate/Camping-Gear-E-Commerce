import { UiBox } from "@/shared/ui/ui-box/ui-box";
import cls from "./product-page.m.scss";
import { ProductInfo } from "./product-info";
import { mockProductId1 } from "@/mocks/products/product";

export const ProductPage = () => {
  return (
    <UiBox className={cls.productPage}>
      <ProductInfo product={mockProductId1} />
    </UiBox>
  );
};
