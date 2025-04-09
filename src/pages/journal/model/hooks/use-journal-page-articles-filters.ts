import { useMemo, useState } from "react";
import { useGetArticlesCategories } from "@/entities/article";
import {
  ListHeaderFilterAttribute,
  ListHeaderFormValues,
} from "@/features/list-header";
import {
  initialSortingValue,
  sortIdOptions,
  SORTING_KEY,
} from "@/shared/const/sorting";
import { getTypedObjectKeys } from "@/shared/lib/helpers/get-typed-object";
import { getSortOptionByLabel } from "@/shared/lib/helpers/get-sort-option-by-label";

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

  const filterAttributes = useMemo<Array<ListHeaderFilterAttribute>>(() => {
    return [
      {
        id: 1,
        key: SORTING_KEY,
        values: sortIdOptions.map((sortOption) => sortOption.label),
        isMulti: false,
      },
    ];
  }, []);

  const initialFilterValues = initialSortingValue;

  /**
   * State to store filter form values
   */
  const [filterFormValues, setFilterFormValues] =
    useState<ListHeaderFormValues | null>(null);

  const onSubmitFilters = (filterValues: ListHeaderFormValues) => {
    setFilterFormValues(filterValues);
  };

  /**
   * Form filter values modified to query params
   */
  const articlesFilterQuery = useMemo(() => {
    if (!filterFormValues) {
      return {};
    }
    return getTypedObjectKeys(filterFormValues).reduce(
      (acc, filterKey) => {
        const filterValue = filterFormValues[filterKey];
        if (filterKey === SORTING_KEY && typeof filterValue === "string") {
          const sortQuery = getSortOptionByLabel(filterValue);
          acc = { ...acc, ...sortQuery };
        }
        return acc;
      },
      {} as Record<string, string>
    );
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
