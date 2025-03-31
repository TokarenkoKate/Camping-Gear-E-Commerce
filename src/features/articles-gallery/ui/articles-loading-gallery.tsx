import { GridWithInnerBorder } from "@/shared/ui";
import {
  ArticlePreviewCardType,
  ArticlePreviewLoadingCard,
} from "@/entities/article";
import cls from "./articles-gallery.m.scss";

const loadingArticles = Array.from(Array(3).keys());

export const ArticlesLoadingGallery = ({
  cardType,
}: {
  cardType: ArticlePreviewCardType;
}) => {
  return (
    <GridWithInnerBorder
      itemsLength={loadingArticles.length}
      className={cls.articlesGalleryList}
    >
      {loadingArticles.map((_, index) => (
        <ArticlePreviewLoadingCard key={index} cardType={cardType} />
      ))}
    </GridWithInnerBorder>
  );
};
