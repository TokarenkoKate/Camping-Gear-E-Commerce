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
import { UiBox } from "@/shared/ui";
import cls from "../main-page/main-page.m.scss";

export const MainPageArticles = () => {
  return (
    <UiBox className={cls.mainPageArticles}>
      <ArticlePreviewCard article={mockArticle} cardType="large" withRedirect />
      <UiBox className={cls.mainPageArticlesGrid}>
        <ArticleWithBackgroundPreview
          article={mockArticlePreviewWithBackground}
          className={cls.mainPageArticlesGridItemLong}
          type="vertical"
        />
        <ArticlePreviewCard article={mockArticleHalfPage1} cardType="large" />
        <ArticlePreviewCard article={mockArticleHalfPage2} cardType="large" />
        <ArticlePreviewCard article={mockArticleHalfPage3} cardType="large" />
      </UiBox>
      <ArticleWithBackgroundPreview
        article={mockArticlePreviewWithBackgroundHorizontal}
        className={cls.mainPageArticlesGridItemLong}
        type="horizontal"
      />
    </UiBox>
  );
};
