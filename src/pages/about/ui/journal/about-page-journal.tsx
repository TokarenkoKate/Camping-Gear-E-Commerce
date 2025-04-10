import { ArticlesGallery } from "@/features/articles-gallery";
import { useGetLatestArticles } from "@/entities/article";
import { ABOUT_PAGE_ARTICLES_LIMIT } from "../../model/const/about-page";

export const AboutPageJournal = () => {
  const { data: articles, isLoading } = useGetLatestArticles(
    ABOUT_PAGE_ARTICLES_LIMIT,
    true
  );

  const totalLength = articles?.length;

  return (
    <ArticlesGallery
      articles={articles}
      articlesCardType="small"
      isLoading={isLoading}
      totalLength={totalLength}
    />
  );
};
