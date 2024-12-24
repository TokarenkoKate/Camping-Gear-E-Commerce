import { ArticlePreviewCard } from "@/entities/article";
import { mockArticle } from "@/mocks/articles/article";

export const MainPageArticlesPreview = () => {
  return <ArticlePreviewCard article={mockArticle} />;
};
