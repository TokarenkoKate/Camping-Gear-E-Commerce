import { useNavigate } from "react-router-dom";
import { UiBox } from "@/shared/ui";
import { NOT_FOUND_PATH } from "@/shared/const/router";
import { useArticlePage } from "../../model/hooks/use-article-page";
import { ArticleHero } from "../hero/article-hero";
import { ArticleBlocks } from "../blocks/article-blocks";
import cls from "./article-page.m.scss";

export const ArticlePage = () => {
  const navigate = useNavigate();
  const { article, isLoading, isError } = useArticlePage();

  if (isLoading) {
    return (
      <UiBox className={cls.articlePage}>
        <div />
      </UiBox>
    );
  }

  if (isError || !article) {
    navigate(NOT_FOUND_PATH);
    return <></>;
  }

  return (
    <UiBox className={cls.articlePage}>
      <ArticleHero article={article} />
      <ArticleBlocks articleBlocks={article.blocks} />
    </UiBox>
  );
};
