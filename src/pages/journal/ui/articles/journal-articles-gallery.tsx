import { UiBox } from "@/shared/ui";
import { InfiniteScrollProps } from "@/shared/types/ui/infinite-scroll";
import { ArticlePreview, ArticlePreviewCard } from "@/entities/article";
import { ArticlesGallery } from "@/features/articles-gallery";

interface JournalArticlesGalleryProps
  extends Partial<
    Pick<
      InfiniteScrollProps,
      "fetchNextPage" | "isFetchingNextPage" | "totalLength"
    >
  > {
  articles: ArticlePreview[];
  isLoading?: boolean;
}

export const JournalArticlesGallery = (props: JournalArticlesGalleryProps) => {
  const {
    articles,
    isLoading = false,
    totalLength,
    isFetchingNextPage,
    fetchNextPage,
  } = props;

  const [firstArticle, ...restArticles] = articles;

  return (
    <UiBox>
      {Boolean(firstArticle && !isLoading) && (
        <ArticlePreviewCard
          article={firstArticle}
          cardType="large"
          withRedirect
        />
      )}
      <ArticlesGallery
        articles={restArticles}
        articlesCardType="small"
        isLoading={isLoading}
        totalLength={totalLength}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </UiBox>
  );
};
