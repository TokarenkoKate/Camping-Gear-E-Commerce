import { PropsWithChildren } from "react";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { UiImage } from "@/shared/ui/ui-image/ui-image";
import { ProductCart } from "../../model/types/product";
import cls from "./product-h-card.m.scss";

interface ProductHCardProps {
  product: ProductCart;
}

export const ProductHCard = ({
  product,
  children,
}: PropsWithChildren<ProductHCardProps>) => {
  const { name, thumbnailUrl, color, price, reward } = product;

  return (
    <UiHStack className={cls.productHCard} max>
      <UiHStack className={cls.imgWrapper} justify="center">
        <UiImage src={thumbnailUrl} alt={name} className={cls.img} />
      </UiHStack>
      <UiVStack className={cls.content} max>
        <UiHStack className={cls.contentRow} max justify="between">
          <UiText>{name}</UiText>
          <UiText>{price}</UiText>
        </UiHStack>
        <UiHStack className={cls.contentRow} max justify="between">
          <UiText variant="bodyXs">{color}</UiText>
          <UiText variant="bodyXs" tone="secondary">
            {reward}
          </UiText>
        </UiHStack>
        {children}
      </UiVStack>
    </UiHStack>
  );
};
