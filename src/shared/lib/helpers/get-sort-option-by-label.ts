import { sortOptions } from "@/shared/const/sorting";
import { SortRequestType } from "@/shared/types/sorting";

export const getSortOptionByLabel = (
  sortLabel: string | undefined
): SortRequestType | null => {
  const sortOption = sortOptions.find(
    (sortOption) => sortOption.label === sortLabel
  );

  if (sortOption) {
    return {
      sortType: sortOption.value,
      sortBy: sortOption?.direction,
    };
  }

  return null;
};
