import { UiIcon, UiText, UiVStack } from "@/shared/ui";
import EmptyList from "@/shared/assets/icons/empty-list.svg";
import cls from "./product-gallery.m.scss";

export const ProductsEmptyGallery = () => {
  return (
    <UiVStack max align="center" className={cls.productGalleryEmpty}>
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
