import { InfiniteData } from "@tanstack/react-query";
import { ZERO_QTY } from "@/shared/const/general";
import { ApiResponseWithPager } from "@/shared/types/api/api-types";
import { getNormalizedNumber } from "../get-normalized-number";

export const getTotalFoundAmount = <TData extends object>(
  data: InfiniteData<ApiResponseWithPager<TData>> | undefined
) => {
  if (data?.pages?.[0]?.pager) {
    return getNormalizedNumber(data?.pages?.[0]?.pager?.total);
  }
  return ZERO_QTY;
};
