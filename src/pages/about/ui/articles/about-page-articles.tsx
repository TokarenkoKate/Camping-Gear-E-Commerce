import { UiBox } from "@/shared/ui";
import { ArticlePreviewCard } from "@/entities/article";
import {
  mockArticleHalfPage1,
  mockArticleHalfPage2,
} from "@/mocks/articles/article";
import cls from "../page/about-page.m.scss";

export const AboutPageArticles = () => {
  return (
    <UiBox className={cls.aboutPageArticles}>
      <ArticlePreviewCard article={mockArticleHalfPage1} cardType="medium" />
      <ArticlePreviewCard article={mockArticleHalfPage2} cardType="medium" />
    </UiBox>
  );
};
