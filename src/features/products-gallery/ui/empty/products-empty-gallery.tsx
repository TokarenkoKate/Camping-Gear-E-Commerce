import { UiIcon, UiText, UiVStack } from "@/shared/ui";
import EmptyList from "@/shared/assets/icons/empty-list.svg";
import cls from "../product-gallery.m.scss";
import classNames from "classnames";

interface ProductsEmptyGalleryProps {
  className?: string;
}

export const ProductsEmptyGallery = ({
  className,
}: ProductsEmptyGalleryProps) => {
  return (
    <UiVStack
      max
      align="center"
      className={classNames(cls.productGalleryEmpty, className)}
    >
      <UiIcon Svg={EmptyList} />
      <UiVStack align="center" className={cls.productGalleryEmptyTexts}>
        <UiText tone="secondary" variant="headingSm" fontWeight="medium">
          No Products
        </UiText>
        <UiText tone="secondary" variant="bodyLg">
          It seems there are no products yet
        </UiText>
      </UiVStack>
    </UiVStack>
  );
};
