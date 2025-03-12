import { ApiResponseWithPager } from "@/shared/types/api/api-types";
import { InfiniteData } from "@tanstack/react-query";

export const flatMapDataPages = <R>(
  data: InfiniteData<ApiResponseWithPager<R>> | undefined
): Array<R> => {
  return data?.pages
    ? data.pages.flatMap((d) => d.data).filter((d) => d !== undefined)
    : [];
};
