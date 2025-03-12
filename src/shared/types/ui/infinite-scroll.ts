export type InfiniteScrollProps = {
  dataLength: number;
  totalLength: number;
  threshold?: number;
  isFetchingNextPage: boolean | undefined;
  fetchNextPage: VoidFunction;
};
