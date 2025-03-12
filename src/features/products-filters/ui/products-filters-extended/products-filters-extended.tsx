import { UiBox, UiHStack, UiButton, UiText, ColorTag } from "@/shared/ui";
import { ProductsFilterComponent } from "./products-filter-component";
import {
  productsFilterColorOptions,
  productsFilterMaterialOptions,
  productsFilterSizeOptions,
  productsFilterSortingOptions,
} from "../../model/products-filters";
import cls from "./products-filters-extended.m.scss";

export const ProductsFiltersExtended = () => {
  return (
    <UiBox className={cls.productsFilters}>
      <UiBox className={cls.productsFiltersGroup}>
        <ProductsFilterComponent
          title="Color"
          filterItems={productsFilterColorOptions}
          className={cls.productsFiltersComponentGrid}
          renderFilterItem={(filterItem) => {
            const color = String(filterItem.label);
            return <ColorTag color={color} />;
          }}
        />
        <ProductsFilterComponent
          title="Material"
          filterItems={productsFilterMaterialOptions}
          renderFilterItem={(filterItem) => (
            <UiButton variant="plain" size="small">
              <UiText>{filterItem.label}</UiText>
            </UiButton>
          )}
        />
        <ProductsFilterComponent
          title="Size"
          filterItems={productsFilterSizeOptions}
          renderFilterItem={(filterItem) => (
            <UiButton variant="plain" size="small">
              <UiText>{filterItem.label}</UiText>
            </UiButton>
          )}
        />
        <ProductsFilterComponent
          title="Size"
          filterItems={productsFilterSortingOptions}
          renderFilterItem={(filterItem) => (
            <UiButton variant="plain" size="small">
              <UiText>{filterItem.label}</UiText>
            </UiButton>
          )}
        />
      </UiBox>
      <UiHStack className={cls.productsFiltersButtons}>
        <UiButton variant="outlined">Clear all</UiButton>
        <UiButton variant="background">Apply</UiButton>
      </UiHStack>
    </UiBox>
  );
};
