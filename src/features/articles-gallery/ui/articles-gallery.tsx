import {
  GridWithInnerBorder,
  UiBox,
  UiButton,
  UiEmpty,
  UiVStack,
} from "@/shared/ui";
import { InfiniteScrollProps } from "@/shared/types/ui/infinite-scroll";
import {
  ArticlePreview,
  ArticlePreviewCard,
  ArticlePreviewCardType,
} from "@/entities/article";
import { ArticlesLoadingGallery } from "./articles-loading-gallery";
import cls from "./articles-gallery.m.scss";
import { getNormalizedNumber } from "@/shared/lib/helpers/get-normalized-number";

interface ArticlesGalleryProps
  extends Partial<
    Pick<
      InfiniteScrollProps,
      "fetchNextPage" | "isFetchingNextPage" | "totalLength"
    >
  > {
  showFirstPreviewCard?: boolean;
  articles: ArticlePreview[] | undefined;
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
    showFirstPreviewCard,
  } = props;

  /**
   * For some articles galleries allowed to show a first preview card
   * before the list
   */
  const [previewCard, ...restArticles] = articles || [];
  const articlesWithoutPreviewCard = showFirstPreviewCard
    ? restArticles
    : articles;

  const articlesLength = getNormalizedNumber(articles?.length);
  const articlesWithoutPreviewLength = getNormalizedNumber(
    articlesWithoutPreviewCard?.length
  );

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
    <UiBox>
      {Boolean(showFirstPreviewCard && previewCard && !isLoading) && (
        <ArticlePreviewCard
          article={previewCard}
          cardType="large"
          withRedirect
        />
      )}
      <UiVStack max align="center" className={cls.articlesGallery}>
        <GridWithInnerBorder
          itemsLength={articlesWithoutPreviewLength}
          className={cls.articlesGalleryList}
        >
          {articlesWithoutPreviewCard?.map((article) => (
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
    </UiBox>
  );
};
