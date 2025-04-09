import { ArticleBlockType } from "@/entities/article";
import { ArticleBlockImage } from "../../ui/blocks/article-block-image";
import { ArticleBlockSubtitle } from "../../ui/blocks/article-block-subtitle";
import { ArticleBlockText } from "../../ui/blocks/article-block-text";

export const articleBlockComponent = {
  [ArticleBlockType.TEXT]: ArticleBlockText,
  [ArticleBlockType.IMAGE]: ArticleBlockImage,
  [ArticleBlockType.SUBTITLE]: ArticleBlockSubtitle,
};
