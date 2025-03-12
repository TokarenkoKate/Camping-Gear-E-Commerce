import { PropsWithChildren } from "react";
import { useInfiniteLoading } from "@/shared/lib/hooks/use-infinite-loading";
import { UiSpinner } from "../ui-spinner/ui-spinner";
import { InfiniteScrollProps } from "@/shared/types/ui/infinite-scroll";

export const InfiniteScroll = ({
  children,
  dataLength,
  totalLength,
  threshold,
  isFetchingNextPage,
  fetchNextPage,
}: PropsWithChildren<InfiniteScrollProps>) => {
  const ref = useInfiniteLoading({
    dataLength,
    totalLength,
    threshold,
    isFetchingNextPage,
    fetchNextPage,
  });

  return (
    <>
      {children}
      {isFetchingNextPage ? (
        <UiSpinner />
      ) : (
        <div ref={ref} style={{ height: "10px" }} />
      )}
    </>
  );
};
