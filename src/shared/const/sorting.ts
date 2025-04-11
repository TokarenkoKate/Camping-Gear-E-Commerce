import { SortKeyType } from "../types/sorting";

/**
 * A set of sorting types
 */
export enum SortType {
  id = "id",
  price = "price",
}

/**
 * A set of sorting directions
 */
export enum SortDirection {
  asc = "asc",
  desc = "desc",
}

/**
 * A set of sorting directions
 */
export const sortLabelNames: Record<SortKeyType, string> = {
  [`${SortType.id}_${SortDirection.desc}`]: "From latest to oldest",
  [`${SortType.id}_${SortDirection.asc}`]: "From oldest to lasted",
  [`${SortType.price}_${SortDirection.desc}`]: "Price from high to low",
  [`${SortType.price}_${SortDirection.asc}`]: "Price from low to high",
};

export const SORTING_ID = 1000;
export const SORTING_KEY = "sorting";

export const sortLabels = Object.values(sortLabelNames);
export const sortIdLabels = [sortLabelNames.id_desc, sortLabelNames.id_asc];

/**
 * Filter attribute passed to forms to make sorting by all sorting variants
 */
export const sortFilterAttributes = {
  id: SORTING_ID,
  key: SORTING_KEY,
  values: sortLabels,
  isMulti: false,
};

/**
 * Filter attribute passed to forms to make sorting by id only
 */
export const sortIdFilterAttributes = {
  id: SORTING_ID,
  key: SORTING_KEY,
  values: sortIdLabels,
  isMulti: false,
};

/**
 * Initial sorting values in form filters
 */
export const initialSortingValue = {
  [SORTING_KEY]: sortLabelNames.id_desc,
};
