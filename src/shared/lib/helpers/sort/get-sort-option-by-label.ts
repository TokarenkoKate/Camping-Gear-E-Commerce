import {
  SortDirection,
  sortLabelNames,
  SortType,
} from "@/shared/const/sorting";
import { SortKeyType, SortRequestType } from "@/shared/types/sorting";
import { getTypedObjectEntries } from "../get-typed-object";
import { parseSortKey } from "./parse-sort-key";

/**
 * Helper used to parse sort key 'id_asc', 'price_desc'
 * to server body request values such as
 * {
 *   sortBy: 'id',
 *   sortBy: 'desc'
 * }
 */
export const getSortOptionByLabel = (
  sortLabel: string | undefined
): SortRequestType | null => {
  const sortOption = getTypedObjectEntries<Record<SortKeyType, string>>(
    sortLabelNames
  ).reduce(
    (acc, [sortOptionKey, sortOptionLabel]) => {
      if (sortLabel === sortOptionLabel) {
        const res = parseSortKey(sortOptionKey);
        if (res) {
          acc.value = res.type;
          acc.direction = res.direction;
        }
      }
      return acc;
    },
    {} as {
      value: SortType;
      direction: SortDirection;
    }
  );

  if (sortOption) {
    return {
      sortType: sortOption.value,
      sortBy: sortOption?.direction,
    };
  }

  return null;
};
