import React, { useState, useEffect } from "react";
import { InfiniteScroll as InfiniteScrollComponent } from "./infinite-scroll";
import type { Meta } from "@storybook/react";

export default {
  title: "shared/infinite-scroll",
  component: InfiniteScrollComponent,
} as Meta<typeof InfiniteScrollComponent>;

const TOTAL_ITEMS = 50;
const PAGE_SIZE = 10;

export const InfiniteScroll = {
  render() {
    return <InfiniteScrollStory />;
  },
};

const InfiniteScrollStory = () => {
  const [items, setItems] = useState<string[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchNextPage = () => {
    if (isFetching || items.length >= TOTAL_ITEMS) return;

    setIsFetching(true);

    setTimeout(() => {
      const newItems = Array.from(
        { length: PAGE_SIZE },
        (_, i) => `Item ${items.length + i + 1}`
      );
      setItems((prev) => [...prev, ...newItems]);
      setIsFetching(false);
    }, 1000);
  };

  useEffect(() => {
    fetchNextPage();
  }, []);

  return (
    <div
      style={{ height: "300px", overflow: "auto", border: "1px solid #ccc" }}
    >
      <InfiniteScrollComponent
        dataLength={items.length}
        totalLength={TOTAL_ITEMS}
        threshold={0.5}
        isFetchingNextPage={isFetching}
        fetchNextPage={fetchNextPage}
      >
        <ul>
          {items.map((item) => (
            <li
              key={item}
              style={{ padding: "8px", borderBottom: "1px solid #eee" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </InfiniteScrollComponent>
    </div>
  );
};
