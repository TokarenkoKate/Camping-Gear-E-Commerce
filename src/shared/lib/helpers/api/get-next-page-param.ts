import { ApiResponseWithPager } from "@/shared/types/api/api-types";
import { getNormalizedNumber } from "../get-normalized-number";
import { isLastPage } from "./is-last-page";

export const getNextPageParam = <T>({ pager }: ApiResponseWithPager<T>) =>
  isLastPage(pager) ? undefined : getNormalizedNumber(pager.page) + 1;
