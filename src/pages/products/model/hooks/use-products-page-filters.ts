import { useMemo, useState } from "react";
import { useCategoryAttributesQuery } from "@/entities/category/model/api/use-category-attributes-query";
import { ProductsFilterFormValues } from "@/features/products-filter";
import { getTypedObjectKeys } from "@/shared/lib/helpers/get-typed-object";

/**
 * Hook to manage products list filters
 */
export const useProductsPageFilters = (categoryId: number | undefined) => {
  /**
   * Receive a list of filter attributes for a given category
   */
  const { data: filterAttributes, isLoading } =
    useCategoryAttributesQuery(categoryId);

  /**
   * State to store filter form values
   */
  const [filterFormValues, setFilterFormValues] =
    useState<ProductsFilterFormValues | null>(null);

  const onSubmitFilters = (filterValues: ProductsFilterFormValues) => {
    setFilterFormValues(filterValues);
  };

  /**
   * Form filter values modified to query params
   */
  const productsFilterQuery = useMemo(() => {
    if (!filterFormValues) {
      return {};
    }
    return getTypedObjectKeys(filterFormValues).reduce(
      (acc, filterKey) => {
        const filterValues = filterFormValues[filterKey];
        if (filterKey && filterValues && filterValues.length) {
          acc[filterKey] = filterValues.join(",");
        }
        return acc;
      },
      {} as Record<string, string>
    );
  }, [filterFormValues]);

  return {
    filterAttributes,
    productsFilterQuery,
    isCategoryAttributesLoading: isLoading,
    onSubmitFilters,
  };
};
