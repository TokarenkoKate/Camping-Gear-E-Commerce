import { useMemo, useState } from "react";
import {
  initialSortingValue,
  sortFilterAttributes,
} from "@/shared/const/sorting";
import { getFilterAttributesRequestQueryParams } from "@/features/list-header/model/lib/helpers/get-filter-attributes-request-query-params";
import { ListHeaderFormValues } from "@/features/list-header";
import { useCategoryAttributesQuery } from "@/entities/category";

/**
 * Hook to manage products list filters
 */
export const useProductsPageFilters = (categoryId: number | undefined) => {
  /**
   * Receive a list of filter attributes for a given category
   */
  const { data: categoryFilterAttributes = [], isLoading } =
    useCategoryAttributesQuery(categoryId);

  const filterAttributes = useMemo(() => {
    return [...categoryFilterAttributes, sortFilterAttributes];
  }, [categoryFilterAttributes]);

  const initialFilterValues = initialSortingValue;

  /**
   * State to store filter form values
   */
  const [filterFormValues, setFilterFormValues] =
    useState<ListHeaderFormValues | null>(initialFilterValues);

  const onSubmitFilters = (filterValues: ListHeaderFormValues) => {
    setFilterFormValues(filterValues);
  };

  /**
   * Form filter values modified to query params
   */
  const productsFilterQuery = useMemo(() => {
    return getFilterAttributesRequestQueryParams(filterFormValues);
  }, [filterFormValues]);

  return {
    filterAttributes,
    initialFilterValues,
    productsFilterQuery,
    isCategoryAttributesLoading: isLoading,
    onSubmitFilters,
  };
};
