import { PropsWithChildren } from "react";
import { UiHStack, UiVStack, UiText, UiImage } from "@/shared/ui";
import { ProductDetails } from "../../model/types/product";
import cls from "./product-h-card.m.scss";

interface ProductHCardProps {
  product: ProductDetails;
}

export const ProductHCard = ({
  product,
  children,
}: PropsWithChildren<ProductHCardProps>) => {
  const { name, image, price } = product;

  return (
    <UiHStack className={cls.productHCard} max>
      <UiHStack className={cls.imgWrapper} justify="center">
        <UiImage src={image} alt={name} className={cls.img} />
      </UiHStack>
      <UiVStack className={cls.content} max>
        <UiHStack className={cls.contentRow} max justify="between">
          <UiText>{name}</UiText>
          <UiText>{price}</UiText>
        </UiHStack>

        {children}
      </UiVStack>
    </UiHStack>
  );
};
