import { InfiniteScrollProps } from "@/shared/types/ui/infinite-scroll";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useInfiniteLoading = ({
  isFetchingNextPage,
  totalLength,
  dataLength,
  threshold,
  fetchNextPage,
}: InfiniteScrollProps) => {
  const hasMore = totalLength > dataLength;
  const params = { threshold, skip: !dataLength || !hasMore };

  const { ref, inView } = useInView(params);

  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      if (hasMore) fetchNextPage?.();
    }
  }, [inView, isFetchingNextPage, fetchNextPage, hasMore]);

  return ref;
};
