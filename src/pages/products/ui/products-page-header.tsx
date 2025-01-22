import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { UiIcon } from "@/shared/ui/ui-icon/ui-icon";
import ArrowRight from "@/shared/assets/icons/arrow-right-20-20.svg";
import { productsHeaderIconSize } from "../model/const";
import cls from "./products-page.m.scss";

interface ProductsPageHeaderProps {
  categoryName: string;
}

export const ProductsPageHeader = ({
  categoryName,
}: ProductsPageHeaderProps) => {
  return (
    <UiVStack className={cls.productsPageHeader}>
      <UiText className={cls.productsPageHeaderSubtitle} as="h2">
        Shop collection
      </UiText>
      <UiHStack className={cls.productsPageHeaderTitleWrapper}>
        <UiIcon
          Svg={ArrowRight}
          width={productsHeaderIconSize.width}
          height={productsHeaderIconSize.height}
        />
        <UiText
          variant="headingLg"
          as="h1"
          className={cls.productsPageHeaderTitle}
        >
          {categoryName}
        </UiText>
      </UiHStack>
    </UiVStack>
  );
};
