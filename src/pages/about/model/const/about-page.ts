import { ArticlePreview } from "@/entities/article";
import aboutMessageImg1 from "@/shared/assets/images/about/about-message-1.jpg";
import aboutMessageImg2 from "@/shared/assets/images/about/about-message-2.jpg";

export const ABOUT_PAGE_ARTICLES_LIMIT = 3;

export const aboutPageCompanyMessage1: ArticlePreview = {
  id: 3,
  title: "Unbounded: The Campers' Manifesto",
  type: "The message",
  image: aboutMessageImg1,
  description:
    "I believe campers are quite eccentric. With no necessity for sustenance, attire, or housing, camping seems unnecessary. Even with a cozy home, the effort and cost of pitching a tent and spending the night seem inefficient and costly. If someone were to label me as eccentric, I wouldn't dispute it. However, it's ultimately meaningless, so feel free. You can assign significance to camping, or you can opt not to. It's acceptable to appear stylish, or to be unassuming.",
};

export const aboutPageCompanyMessage2: ArticlePreview = {
  id: 3,
  title: "Quality and Affordability",
  date: "20.10.2024",
  type: "THE DESIGN CENTRES",
  image: aboutMessageImg2,
  description:
    "CEIN's commitment to quality and affordability is reflected in everything we do, especially our products. We have been creating innovative and high-performance branded products since 2004, which our in-house product teams of over 200 people. Most of our products are designed and tested in our dedicated design centres scattered across France, which feature performance labs, testing facilities, prototyping capabilities.",
};
