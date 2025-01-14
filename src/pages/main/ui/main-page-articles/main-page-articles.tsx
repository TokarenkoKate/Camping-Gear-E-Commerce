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
  mockArticlePreviewWithBackgroundHorizontal,
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
          type="vertical"
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
      <ArticleWithBackgroundPreview
        article={mockArticlePreviewWithBackgroundHorizontal}
        className={cls.mainPageArticlesGridItemLong}
        type="horizontal"
      />
    </UiBox>
  );
};
