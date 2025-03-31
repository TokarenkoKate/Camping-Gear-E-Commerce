import { GridWithInnerBorder, UiButton, UiEmpty, UiVStack } from "@/shared/ui";
import { InfiniteScrollProps } from "@/shared/types/ui/infinite-scroll";
import {
  ArticlePreview,
  ArticlePreviewCard,
  ArticlePreviewCardType,
} from "@/entities/article";
import { ArticlesLoadingGallery } from "./articles-loading-gallery";
import cls from "./articles-gallery.m.scss";

interface ArticlesGalleryProps
  extends Partial<
    Pick<
      InfiniteScrollProps,
      "fetchNextPage" | "isFetchingNextPage" | "totalLength"
    >
  > {
  articles: ArticlePreview[];
  articlesCardType: ArticlePreviewCardType;
  isLoading?: boolean;
}

export const ArticlesGallery = (props: ArticlesGalleryProps) => {
  const {
    articles,
    articlesCardType,
    isLoading = false,
    totalLength,
    isFetchingNextPage,
    fetchNextPage,
  } = props;

  const articlesLength = articles.length;
  const isEmpty = !articles || !articlesLength;

  if (isLoading) {
    return <ArticlesLoadingGallery cardType={articlesCardType} />;
  }

  if (isEmpty) {
    return (
      <UiEmpty
        title="No Articles"
        description="It seems there are no articles yet"
      />
    );
  }

  const hasMore =
    totalLength && articlesLength ? totalLength > articlesLength : false;

  return (
    <UiVStack max align="center" className={cls.articlesGallery}>
      <GridWithInnerBorder
        itemsLength={articlesLength}
        className={cls.articlesGalleryList}
      >
        {articles.map((article) => (
          <ArticlePreviewCard
            article={article}
            cardType={articlesCardType}
            withRedirect
            key={article.id}
          />
        ))}
      </GridWithInnerBorder>
      <UiButton
        variant="outlined"
        disabled={!hasMore}
        onClick={fetchNextPage}
        loading={isFetchingNextPage}
      >
        Show more
      </UiButton>
    </UiVStack>
  );
};
