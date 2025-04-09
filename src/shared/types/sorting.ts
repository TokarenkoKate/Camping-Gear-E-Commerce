import { SortType, SortDirection } from "../const/sorting";

export type SortingOption = {
  value: SortType;
  direction: SortDirection;
  label: string;
};

export type SortRequestType = {
  sortType: SortType;
  sortBy: SortDirection;
};
