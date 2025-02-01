import ArrowRight from "@/shared/assets/icons/arrow-right-20-20.svg";
import FiltersIcon from "@/shared/assets/icons/filters-20-20.svg";
import { UiIcon } from "@/shared/ui/ui-icon/ui-icon";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { productsHeaderIconSize } from "../model/const";
import { ProductsFilterCategories } from "@/features/products-filters/ui/products-filters-categories/products-filter-categories";
import cls from "./products-page.m.scss";

interface ProductsPageHeaderVisibleProps {
  categoryName: string;
  toggleOpenExtendedFilters: VoidFunction;
}

export const ProductsPageHeaderVisible = ({
  categoryName,
  toggleOpenExtendedFilters,
}: ProductsPageHeaderVisibleProps) => {
  return (
    <UiVStack className={cls.productsPageHeaderVisible}>
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
      <UiHStack className={cls.productsPageHeaderFilters} align="center">
        <UiButton
          variant="outlined"
          round
          IconSvg={FiltersIcon}
          size="small"
          onClick={toggleOpenExtendedFilters}
        />
        <ProductsFilterCategories />
      </UiHStack>
    </UiVStack>
  );
};
