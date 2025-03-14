import { UiBox, UiVStack, UiHStack, UiText, ColorsList } from "@/shared/ui";
import { ProductDetails, ProductSummary } from "@/entities/product";
import { AddToCartButton } from "@/features/cart";
import { PaymentChips } from "@/features/payment-chips";
import { ProductRelatedProducts } from "../product-related-products/product-related-products";
import { getProductColorFromAttributes } from "@/entities/product";
import { getImageSrcPath } from "@/shared/lib/helpers/ui/image/get-image-src-path";
import cls from "../product-page.m.scss";

interface ProductInfoProps {
  product: ProductDetails;
  relatedProducts: ProductSummary[] | undefined;
}

export const ProductInfo = ({ product, relatedProducts }: ProductInfoProps) => {
  const { id, name, image, category, price, attributes } = product;

  const imagePath = getImageSrcPath(image);
  const colors = getProductColorFromAttributes(attributes);

  return (
    <UiBox className={cls.productInfo}>
      <UiHStack className={cls.imgWrapper} justify="center">
        <img src={imagePath} className={cls.img} />
      </UiHStack>
      <UiVStack align="normal">
        <UiVStack className={cls.content} max align="normal">
          <UiText variant="bodySm" className={cls.category}>
            {category}
          </UiText>
          <UiText variant="headingMd" className={cls.name}>
            {name}
          </UiText>
          <UiHStack justify="between" className={cls.priceGroup}>
            <UiText variant="headingXs">{price}</UiText>
            <UiText>wishlist</UiText>
          </UiHStack>
          {colors && (
            <UiVStack max align="normal">
              <UiText variant="bodySm">Color</UiText>
              <ColorsList colors={colors} className={cls.colorsList} />
            </UiVStack>
          )}
          <AddToCartButton productId={id} className={cls.addToCartButton} />
          <PaymentChips />
        </UiVStack>
        <ProductRelatedProducts products={relatedProducts} />
      </UiVStack>
    </UiBox>
  );
};
