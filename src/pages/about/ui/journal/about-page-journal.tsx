import { ArticlePreviewCard } from "@/entities/article";
import { GridWithInnerBorder } from "@/shared/ui";
import { mockArticleHalfPage1 } from "@/mocks/articles/article";
import cls from "../page/about-page.m.scss";

export const AboutPageJournal = () => {
  const articles = [
    mockArticleHalfPage1,
    mockArticleHalfPage1,
    mockArticleHalfPage1,
  ];
  return (
    <GridWithInnerBorder
      itemsLength={articles.length}
      className={cls.aboutPageJournal}
      as="section"
    >
      {articles.map((article) => (
        <ArticlePreviewCard
          article={article}
          cardType="small"
          withRedirect
          key={article.id}
        />
      ))}
    </GridWithInnerBorder>
  );
};
