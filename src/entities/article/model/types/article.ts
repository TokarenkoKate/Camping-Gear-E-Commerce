export interface Article {
  id: string;
  title: string;
  date: string;
  type: string;
  img: string;
}

export interface ArticlePreview
  extends Pick<Article, "id" | "date" | "title" | "type" | "img"> {
  description: string;
}
