import { UiBox } from "@/shared/ui/ui-box/ui-box";
import classNames from "classnames";
import { Link, To } from "react-router-dom";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { UiImage } from "@/shared/ui/ui-image/ui-image";
import { Product } from "../../model/types/product";
import { ColorTag } from "@/shared/ui/color-tag/color-tag";
import cls from "./product-card.m.scss";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const { id, name, img, colors, category, price } = product;
  const redirectPath: To = `/product/${id}`;

  return (
    <Link to={redirectPath} className={classNames(cls.productCard, className)}>
      <UiVStack className={cls.productCardContent}>
        <UiHStack className={cls.imgWrapper} justify="center">
          <UiImage src={img} alt={name} className={cls.img} />
        </UiHStack>
        <UiHStack justify="between" className={cls.header} max>
          <UiText className={cls.category}>{category}</UiText>
          <UiText>{price}</UiText>
        </UiHStack>
        <UiText className={cls.name}>{name}</UiText>
        <UiHStack className={cls.colorsList} as="ul" role="list">
          {colors.map((color) => (
            <UiBox key={color} as="li">
              <ColorTag color={color} />
            </UiBox>
          ))}
        </UiHStack>
      </UiVStack>
    </Link>
  );
};
