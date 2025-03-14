import classNames from "classnames";
import { Link, To } from "react-router-dom";
import { AppRoutes } from "@/shared/const/router";
import {
  UiBox,
  UiHStack,
  UiVStack,
  UiText,
  UiImage,
  ColorTag,
} from "@/shared/ui";
import { ProductSummary } from "../../model/types/product";
import { getProductColorFromAttributes } from "../../model/lib/get-product-color-from-attributes";
import { getImageSrcPath } from "@/shared/lib/helpers/ui/image/get-image-src-path";
import cls from "./product-card.m.scss";

interface ProductCardProps {
  product: ProductSummary;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const { id, name, thumbnail, category, price, attributes } = product;

  const redirectPath: To = `/${AppRoutes.PRODUCT}/${id}`;
  const imagePath = getImageSrcPath(thumbnail);
  const colors = getProductColorFromAttributes(attributes);

  return (
    <Link to={redirectPath} className={classNames(cls.productCard, className)}>
      <UiVStack className={cls.productCardContent}>
        <UiHStack className={cls.imgWrapper} justify="center">
          <UiImage src={imagePath} alt={name} className={cls.img} />
        </UiHStack>
        <UiHStack justify="between" className={cls.header} max>
          <UiText className={cls.category}>{category}</UiText>
          <UiText>{price}</UiText>
        </UiHStack>
        <UiText className={cls.name}>{name}</UiText>
        {colors && (
          <UiHStack className={cls.colorsList} as="ul" role="list">
            {colors.map((color) => (
              <UiBox key={color} as="li">
                <ColorTag color={color} />
              </UiBox>
            ))}
          </UiHStack>
        )}
      </UiVStack>
    </Link>
  );
};
