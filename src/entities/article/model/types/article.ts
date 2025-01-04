export interface Article {
  id: number;
  title: string;
  date: string;
  type: string;
  img: string;
}

export interface ArticlePreview
  extends Pick<Article, "id" | "date" | "title" | "img">,
    Partial<Pick<Article, "type">> {
  description: string;
}

export type ArticlePreviewCardType = "fullPage" | "halfPage";
