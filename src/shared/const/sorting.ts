import { SortingOption } from "../types/sorting";

export const SORTING_KEY = "sorting";

export enum SortType {
  id = "id",
  price = "price",
}

export enum SortDirection {
  asc = "asc",
  desc = "desc",
}

export const sortIdOptions: Array<SortingOption> = [
  {
    value: SortType.id,
    direction: SortDirection.desc,
    label: "From latest to oldest",
  },
  {
    value: SortType.id,
    direction: SortDirection.asc,
    label: "From oldest to lasted",
  },
];

export const initialSortingValue = {
  [SORTING_KEY]: "From latest to oldest",
};

export const sortPriceOptions: Array<SortingOption> = [
  {
    value: SortType.price,
    direction: SortDirection.desc,
    label: "Price from high to low",
  },
  {
    value: SortType.price,
    direction: SortDirection.asc,
    label: "Price from low to high",
  },
];

export const sortOptions = [...sortIdOptions, ...sortPriceOptions];
