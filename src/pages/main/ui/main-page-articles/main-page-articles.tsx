import {
  ArticlePreviewCard,
  ArticleWithBackgroundPreview,
} from "@/entities/article";
import {
  mockArticle,
  mockArticlePreviewWithBackground,
} from "@/mocks/articles/article";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import cls from "../main-page/main-page.m.scss";

export const MainPageArticles = () => {
  return (
    <UiBox className={cls.mainPageArticles}>
      <ArticlePreviewCard article={mockArticle} />
      <UiBox className={cls.mainPageArticlesGrid}>
        <ArticleWithBackgroundPreview
          article={mockArticlePreviewWithBackground}
        />
      </UiBox>
    </UiBox>
  );
};
