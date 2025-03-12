import { UiBox, UiVStack, UiHStack, UiText, ColorTag } from "@/shared/ui";
import { ProductDetails } from "@/entities/product/model/types/product";
import { AddToCartButton } from "@/features/cart";
import { PaymentChips } from "@/features/payment-chips";
import { ProductRelatedProducts } from "../product-related-products/product-related-products";
import cls from "../product-page.m.scss";

interface ProductInfoProps {
  product: ProductDetails;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const { id, name, category, price, colors, imageUrl, reward } = product;

  return (
    <UiBox className={cls.productInfo}>
      <UiHStack className={cls.imgWrapper} justify="center">
        <img src={imageUrl} className={cls.img} />
      </UiHStack>
      <UiBox>
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
          {reward && (
            <UiText className={cls.reward}>
              {`Membership reward `}
              <UiText as="span" tone="error">
                {reward}
              </UiText>
            </UiText>
          )}
          <UiVStack max align="normal">
            <UiText variant="bodySm">Color</UiText>
            <UiHStack className={cls.colorsList} as="ul" role="list">
              {colors.map((color) => (
                <UiBox key={color} as="li">
                  <ColorTag color={color} />
                </UiBox>
              ))}
            </UiHStack>
          </UiVStack>
          <AddToCartButton productId={id} className={cls.addToCartButton} />
          <PaymentChips />
        </UiVStack>
        <ProductRelatedProducts />
      </UiBox>
    </UiBox>
  );
};
