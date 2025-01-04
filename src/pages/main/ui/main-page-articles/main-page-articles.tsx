import {
  ArticlePreviewCard,
  ArticleWithBackgroundPreview,
} from "@/entities/article";
import {
  mockArticle,
  mockArticleHalfPage1,
  mockArticleHalfPage2,
  mockArticleHalfPage3,
  mockArticlePreviewWithBackground,
} from "@/mocks/articles/article";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import cls from "../main-page/main-page.m.scss";

export const MainPageArticles = () => {
  return (
    <UiBox className={cls.mainPageArticles}>
      <ArticlePreviewCard article={mockArticle} cardType="fullPage" />
      <UiBox className={cls.mainPageArticlesGrid}>
        <ArticleWithBackgroundPreview
          article={mockArticlePreviewWithBackground}
          className={cls.mainPageArticlesGridItemLong}
        />
        <ArticlePreviewCard
          article={mockArticleHalfPage1}
          cardType="halfPage"
        />
        <ArticlePreviewCard
          article={mockArticleHalfPage2}
          cardType="halfPage"
        />
        <ArticlePreviewCard
          article={mockArticleHalfPage3}
          cardType="halfPage"
        />
      </UiBox>
    </UiBox>
  );
};
