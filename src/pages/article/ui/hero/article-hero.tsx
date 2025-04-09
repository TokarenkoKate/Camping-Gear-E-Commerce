import { UiImage, UiText, UiVStack } from "@/shared/ui";
import { Article } from "@/entities/article";
import { getImageSrcPath } from "@/shared/lib/helpers/ui/image/get-image-src-path";
import cls from "../page/article-page.m.scss";

interface ArticleHeroProps {
  article: Article;
}

export const ArticleHero = ({ article }: ArticleHeroProps) => {
  const { title, description, type, image } = article;

  const imagePath = getImageSrcPath(image);

  return (
    <UiVStack className={cls.articleHero}>
      <UiImage src={imagePath} className={cls.articleHeroImage} />
      <UiVStack className={cls.articleHeroContent}>
        <UiText variant="bodySm" className={cls.articleHeroType}>
          {type}
        </UiText>
        <UiText variant="headingMd" as="h1">
          {title}
        </UiText>
        <UiText>{description}</UiText>
      </UiVStack>
    </UiVStack>
  );
};
