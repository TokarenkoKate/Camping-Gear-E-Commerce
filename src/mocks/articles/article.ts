import { ArticlePreview } from "@/entities/article";
import articleId1 from "./article_id_1.png";
import articleId2 from "./article_id_2.png";

export const mockArticle: ArticlePreview = {
  id: 1,
  title: "The practical bonfire stand.",
  date: "20.10.2024",
  type: "Journal",
  img: articleId1,
  description:
    'CEIN has released yet another playful bonfire stand. Its name is "Ringwo Moyase".As you can see, this bonfire stand is modeled after the ring, a stage familiar to boxing and professional wrestling.',
};

export const mockArticlePreviewWithBackground: ArticlePreview = {
  id: 2,
  title: "The Eco\u00A0Camping Solution",
  date: "20.10.2024",
  img: articleId2,
  description:
    "There is no waste, but there is a lot of consideration. “Base\u00A0and\u00A0Packana” is a large shelter that is spacious, light, easy to set up, and cost-effective.",
};
