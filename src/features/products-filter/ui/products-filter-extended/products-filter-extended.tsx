import {
  CategoryAttribute,
  COLOR_CATEGORY_ATTRIBUTE_KEY,
} from "@/entities/category";
import { useForm } from "@/shared/lib/hooks/ui/use-form";
import { UiBox, UiFormField } from "@/shared/ui";
import { ProductCategoryColorFilter } from "./color-filter/products-category-color-filter";
import { ProductsFilterSubmitButtons } from "./submit-buttons/products-filter-submit-buttons";
import { ProductCategoryTextFilter } from "./text-filter/products-category-text-filter";
import { ProductsFilterFormValues } from "../../model/types/product-filter";
import cls from "./products-filter-extended.m.scss";

interface ProductsFilterExtendedProps {
  filterAttributes: CategoryAttribute[];
  onSubmitFilters(filterValues: ProductsFilterFormValues): void;
}

export const ProductsFilterExtended = ({
  filterAttributes,
  onSubmitFilters,
}: ProductsFilterExtendedProps) => {
  const Form = useForm<ProductsFilterFormValues>();

  const onResetFilters = () => onSubmitFilters(null);

  return (
    <Form onSubmit={onSubmitFilters} className={cls.productsFilter}>
      <UiBox className={cls.productsFilterGroup}>
        {filterAttributes.map((filterAttribute) => {
          const isColorAttribute =
            filterAttribute.key === COLOR_CATEGORY_ATTRIBUTE_KEY;

          return (
            <UiFormField
              name={filterAttribute.key}
              key={filterAttribute.key}
              categoryColorAttribute={filterAttribute}
              component={
                isColorAttribute
                  ? ProductCategoryColorFilter
                  : ProductCategoryTextFilter
              }
            />
          );
        })}
      </UiBox>
      <ProductsFilterSubmitButtons onResetFilters={onResetFilters} />
    </Form>
  );
};
