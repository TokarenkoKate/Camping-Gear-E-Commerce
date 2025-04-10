import { UiBox } from "@/shared/ui";
import {
  ArticlePreviewCard,
  ArticleWithBackgroundPreview,
  useGetLatestArticles,
} from "@/entities/article";
import { MAIN_PAGE_ARTICLES_LIMIT } from "../../model/const/main-page";
import cls from "../main-page/main-page.m.scss";

export const MainPageArticles = () => {
  const { data: articles } = useGetLatestArticles(MAIN_PAGE_ARTICLES_LIMIT);

  return (
    <UiBox className={cls.mainPageArticles}>
      <ArticlePreviewCard
        article={articles?.[0]}
        cardType="large"
        withRedirect
      />
      <UiBox className={cls.mainPageArticlesGrid}>
        <ArticleWithBackgroundPreview
          article={articles?.[1]}
          className={cls.mainPageArticlesGridItemLong}
          type="vertical"
        />
        <ArticlePreviewCard article={articles?.[2]} cardType="medium" />
        <ArticlePreviewCard article={articles?.[3]} cardType="medium" />
        <ArticlePreviewCard article={articles?.[4]} cardType="medium" />
      </UiBox>
      <ArticleWithBackgroundPreview
        article={articles?.[5]}
        className={cls.mainPageArticlesGridItemLong}
        type="horizontal"
      />
    </UiBox>
  );
};
