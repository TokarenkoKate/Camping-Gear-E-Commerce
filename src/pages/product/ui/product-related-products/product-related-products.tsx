import { ProductSummary } from "@/entities/product";
import { ProductsGallery } from "@/features/products-gallery";
import ArrowRight from "@/shared/assets/icons/arrow-right-20-20.svg";
import { UiBox, UiButton, UiHStack, UiText } from "@/shared/ui";
import cls from "../product-page.m.scss";

interface ProductRelatedProductsProps {
  products: ProductSummary[] | undefined;
}

export const ProductRelatedProducts = ({
  products,
}: ProductRelatedProductsProps) => {
  return (
    <UiBox className={cls.relatedProducts}>
      <ProductsGallery
        products={products}
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
