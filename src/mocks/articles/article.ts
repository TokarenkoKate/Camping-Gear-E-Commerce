import { ArticlePreview } from "@/entities/article";
import articleId1 from "./article_id_1.png";
import articleId2 from "./article_id_2.png";
import articleId3 from "./article_id_3.png";
import articleId4 from "./article_id_4.png";
import articleId5 from "./article_id_5.png";
import articleId6 from "./article_id_6.png";

export const mockArticle: ArticlePreview = {
  id: 1,
  title: "The practical bonfire stand.",
  date: "20.10.2024",
  type: "Journal",
  image: articleId1,
  description:
    'CEIN has released yet another playful bonfire stand. Its name is "Ringwo Moyase".As you can see, this bonfire stand is modeled after the ring, a stage familiar to boxing and professional wrestling.',
};

export const mockArticlePreviewWithBackground: ArticlePreview = {
  id: 2,
  title: "The Eco\u00A0Camping Solution",
  date: "20.10.2024",
  image: articleId2,
  description:
    "There is no waste, but there is a lot of consideration. “Base\u00A0and\u00A0Packana” is a large shelter that is spacious, light, easy to set up, and cost-effective.",
};

export const mockArticleHalfPage1: ArticlePreview = {
  id: 3,
  title: "Introducing the All-New Adventure Dome Tent",
  date: "20.10.2024",
  type: "Journal",
  image: articleId3,
  description:
    "Your Ultimate Shelter for Outdoor Escapades! Experience easy setup, superior durability, and ample space, ensuring comfort and security wherever your adventures take you. Get ready to elevate your camping experience with our premium tent!",
};

export const mockArticleHalfPage2: ArticlePreview = {
  id: 4,
  title: "Organic Aquaculture Big Catch Festival",
  date: "20.10.2024",
  type: "Event",
  image: articleId4,
  description:
    "Saiyuen has had a great harvest this year! In our aquaponic pool, we have a variety of edible fish, including Crucian Carp, Tilapia, and Jade Perch. Especially Jade Perch is the treasure among the freshwater fish. During the Big Catch Festival at Saiyuen, campers can enjoy fishing or even try cooking their own catch in the wild. Come and experience the thrill of catching and cooking your own fish in the great outdoors at Saiyuen!",
};

export const mockArticleHalfPage3: ArticlePreview = {
  id: 5,
  title: "Hiking Through Nature's Painted Canopy",
  date: "20.10.2024",
  type: "Journal",
  image: articleId5,
  description:
    "Experience the splendor of autumn. As the leaves transform into a kaleidoscope of colors, a journey through nature's picturesque canvas. Discover the best seasonal tips, and the unparalleled beauty that awaits as we delve into the magic of hiking during this enchanting time of year.",
};

export const mockArticlePreviewWithBackgroundHorizontal: ArticlePreview = {
  id: 2,
  title: "food collaboration →this fall",
  image: articleId6,
  description:
    "CEIN first food collaboration product will be released this fall. By collaborating with K&K, a canned food brand known for its canned goods and canned beef, CEIN collaboration products have been added to K&K's series, a lineup specializing in outdoor activities.",
};
