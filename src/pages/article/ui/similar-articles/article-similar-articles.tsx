import { useInView } from "react-intersection-observer";
import { UiBox } from "@/shared/ui";
import { useGetSimilarArticles } from "@/entities/article";
import { ArticlesGallery } from "@/features/articles-gallery";
import { getNormalizedNumber } from "@/shared/lib/helpers/get-normalized-number";

export const ArticleSimilarArticles = ({
  articleId,
}: {
  articleId: number;
}) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const { data: articles, isLoading } = useGetSimilarArticles(
    articleId,
    inView
  );

  const totalLength = getNormalizedNumber(articles?.length);

  return (
    <UiBox ref={inViewRef} as="section">
      <ArticlesGallery
        articles={articles}
        articlesCardType="small"
        isLoading={isLoading}
        totalLength={totalLength}
      />
    </UiBox>
  );
};
