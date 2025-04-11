import { PropsWithChildren } from "react";
import { UiHStack } from "../ui-stack/ui-hstack/ui-hstack";
import { useInfiniteLoading } from "@/shared/lib/hooks/use-infinite-loading";
import { UiSpinner } from "../ui-spinner/ui-spinner";
import { InfiniteScrollProps } from "@/shared/types/ui/infinite-scroll";
import cls from "./infinite-scroll.m.scss";

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
        <UiHStack className={cls.spinnerWrapper} justify="center">
          <UiSpinner size="medium" mode="inverted" />
        </UiHStack>
      ) : (
        <div ref={ref} style={{ height: "10px" }} />
      )}
    </>
  );
};
