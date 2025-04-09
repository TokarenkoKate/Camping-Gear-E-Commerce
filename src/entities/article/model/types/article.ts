import { ArticleBlockType } from "../const/article";

export interface Article {
  id: number;
  title: string;
  date: string;
  type: string;
  image: string;
  description: string;
  blocks: Array<ArticleBlock>;
}

type ArticlePreviewRequired = Pick<Article, "id" | "title" | "image"> & {
  description: string;
};
type ArticlePreviewOptional = Partial<Pick<Article, "type" | "date">>;

export interface ArticlePreview
  extends ArticlePreviewRequired,
    ArticlePreviewOptional {}

export type ArticlePreviewCardType = "large" | "medium" | "small";

export type ArticlePreviewWithBackgroundCardType = "vertical" | "horizontal";

export type ArticleBlock = {
  id: number;
  type: ArticleBlockType;
  content: string;
};
