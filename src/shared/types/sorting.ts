import { SortType, SortDirection } from "../const/sorting";

export type SortRequestType = {
  sortType: SortType;
  sortBy: SortDirection;
};

export type SortKeyType = `${SortType}_${SortDirection}`;
