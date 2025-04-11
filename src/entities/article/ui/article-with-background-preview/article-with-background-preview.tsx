import classNames from "classnames";
import { ClassnamesMods } from "@/shared/types/classnames";
import { UiBox, UiVStack, UiText, UiButton } from "@/shared/ui";
import {
  ArticlePreview,
  ArticlePreviewWithBackgroundCardType,
} from "../../model/types/article";
import { getImageSrcPath } from "@/shared/lib/helpers/ui/image/get-image-src-path";
import cls from "./article-with-background-preview.m.scss";

interface ArticleWithBackgroundPreviewProps {
  article: ArticlePreview | undefined;
  className?: string;
  type: ArticlePreviewWithBackgroundCardType;
}

export const ArticleWithBackgroundPreview = ({
  article,
  className,
  type,
}: ArticleWithBackgroundPreviewProps) => {
  if (!article) {
    return null;
  }

  const { title, description, image } = article;

  const mods: ClassnamesMods = {
    [cls[type]]: true,
  };

  const imagePath = getImageSrcPath(image);

  return (
    <UiBox
      className={classNames(cls.articleWithBackgroundPreview, mods, className)}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <UiBox className={cls.overlay} />
      <UiVStack className={cls.content} justify="center">
        <UiText
          variant="headingLg"
          tone="inverted"
          className={cls.title}
          lineClamp={5}
        >
          {title}
        </UiText>
        <UiText
          variant="bodyMd"
          tone="inverted"
          className={cls.description}
          lineClamp={5}
        >
          {description}
        </UiText>
        <UiButton variant="outlinedInverted">Read more</UiButton>
      </UiVStack>
    </UiBox>
  );
};
