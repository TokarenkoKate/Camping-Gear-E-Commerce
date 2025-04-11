import { ListHeaderFormValues } from "@/features/list-header";
import { COMMA } from "@/shared/const/common-string";
import { SORTING_KEY } from "@/shared/const/sorting";
import { getTypedObjectKeys } from "@/shared/lib/helpers/get-typed-object";
import { getSortOptionByLabel } from "@/shared/lib/helpers/sort/get-sort-option-by-label";

export const getFilterAttributesRequestQueryParams = (
  filterFormValues: ListHeaderFormValues
) => {
  if (!filterFormValues) {
    return {};
  }
  return getTypedObjectKeys(filterFormValues).reduce(
    (acc, filterKey) => {
      const filterValues = filterFormValues[filterKey];
      if (filterKey === SORTING_KEY && typeof filterValues === "string") {
        const sortQuery = getSortOptionByLabel(filterValues);
        acc = { ...acc, ...sortQuery };
      } else if (Array.isArray(filterValues) && filterValues.length) {
        acc[filterKey] = filterValues.join(COMMA);
      }
      return acc;
    },
    {} as Record<string, string>
  );
};
