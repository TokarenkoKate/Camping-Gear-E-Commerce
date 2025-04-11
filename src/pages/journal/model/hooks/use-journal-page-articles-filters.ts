import { useMemo, useState } from "react";
import { useGetArticlesCategories } from "@/entities/article";
import {
  getFilterAttributesRequestQueryParams,
  ListHeaderFilterAttribute,
  ListHeaderFormValues,
} from "@/features/list-header";
import {
  initialSortingValue,
  sortIdFilterAttributes,
} from "@/shared/const/sorting";

export const useJournalPageArticlesFilters = () => {
  /**
   * Articles categories request query
   */
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetArticlesCategories();

  /**
   * Articles categories state control
   */
  const [selectedCategories, setSelectedCategories] = useState<
    string[] | undefined
  >();

  const onChangeCategories = (categories: string[] | undefined) => {
    setSelectedCategories(categories);
  };

  const filterAttributes = useMemo<Array<ListHeaderFilterAttribute>>(
    () => [sortIdFilterAttributes],
    []
  );

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
  const articlesFilterQuery = useMemo(() => {
    return getFilterAttributesRequestQueryParams(filterFormValues);
  }, [filterFormValues]);

  return {
    filterAttributes,
    initialFilterValues,
    onSubmitFilters,
    categories,
    isCategoriesLoading,
    selectedCategories,
    articlesFilterQuery,
    onChangeCategories,
  };
};
