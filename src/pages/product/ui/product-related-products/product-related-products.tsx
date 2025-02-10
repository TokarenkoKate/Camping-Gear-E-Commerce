import ArrowRight from "@/shared/assets/icons/arrow-right-20-20.svg";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { ProductsGallery } from "@/features/products-gallery";
import { mockProductId1, mockProductId2 } from "@/mocks/products/product";
import cls from "../product-page.m.scss";

export const ProductRelatedProducts = () => {
  return (
    <UiBox className={cls.relatedProducts}>
      <ProductsGallery
        products={[mockProductId1, mockProductId2]}
        className={cls.relatedProductsGallery}
      />
      <UiHStack
        justify="between"
        max
        align="center"
        className={cls.relatedProductsBuy}
      >
        <UiText variant="bodySm" className={cls.relatedProductsText}>
          {`Buy together in `}
          <UiText as="span" tone="error">
            $295.99
          </UiText>
        </UiText>
        <UiButton variant="plain" rightIconSvg={ArrowRight} size="small">
          Buy Now
        </UiButton>
      </UiHStack>
    </UiBox>
  );
};
