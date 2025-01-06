import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { Product } from "../../model/types/product";
import classNames from "classnames";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { UiImage } from "@/shared/ui/ui-image/ui-image";
import { ColorTag } from "@/shared/ui/color-tag/color-tag";
import cls from "./product-card.m.scss";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <UiVStack className={classNames(cls.productCard, className)}>
      <UiImage src={product.img} alt={product.name} className={cls.img} />
      <UiHStack justify="between" className={cls.header} max>
        <UiText className={cls.category}>{product.category}</UiText>
        <UiText>{product.price}</UiText>
      </UiHStack>
      <UiText>{product.name}</UiText>
      <UiHStack className={cls.colorsList} as="ul" role="list">
        {product.colors.map((color) => (
          <UiBox key={color} as="li">
            <ColorTag color={color} />
          </UiBox>
        ))}
      </UiHStack>
    </UiVStack>
  );
};
