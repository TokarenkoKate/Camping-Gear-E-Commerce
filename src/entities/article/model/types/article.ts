export interface Article {
  id: number;
  title: string;
  date: string;
  type: string;
  img: string;
}

type ArticlePreviewRequired = Pick<Article, "id" | "title" | "img"> & {
  description: string;
};
type ArticlePreviewOptional = Partial<Pick<Article, "type" | "date">>;

export interface ArticlePreview
  extends ArticlePreviewRequired,
    ArticlePreviewOptional {}

export type ArticlePreviewCardType = "large" | "medium" | "small";

export type ArticlePreviewWithBackgroundCardType = "vertical" | "horizontal";
