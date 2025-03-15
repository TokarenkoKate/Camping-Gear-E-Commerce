import ArrowRight from "@/shared/assets/icons/arrow-right-20-20.svg";
import FiltersIcon from "@/shared/assets/icons/filters-20-20.svg";
import { UiIcon, UiHStack, UiVStack, UiButton, UiText } from "@/shared/ui";
import { ProductsFilterCategories } from "@/features/products-filter/ui/products-filter-categories/products-filter-categories";
import { productsHeaderIconSize } from "../../model/const/const";
import cls from "../products-page/products-page.m.scss";

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
          leftIconSvg={FiltersIcon}
          size="small"
          onClick={toggleOpenExtendedFilters}
        />
        <ProductsFilterCategories />
      </UiHStack>
    </UiVStack>
  );
};
