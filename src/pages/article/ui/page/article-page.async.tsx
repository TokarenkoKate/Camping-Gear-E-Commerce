import { lazy } from "react";

export const ArticlePageAsync = lazy(() =>
  import("./article-page").then((module) => ({ default: module.ArticlePage }))
);
