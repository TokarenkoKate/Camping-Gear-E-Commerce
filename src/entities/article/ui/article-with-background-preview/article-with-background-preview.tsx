import classNames from "classnames";
import { ClassnamesMods } from "@/shared/types/classnames";
import { UiBox, UiVStack, UiText, UiButton } from "@/shared/ui";
import {
  ArticlePreview,
  ArticlePreviewWithBackgroundCardType,
} from "../../model/types/article";
import cls from "./article-with-background-preview.m.scss";

interface ArticleWithBackgroundPreviewProps {
  article: ArticlePreview;
  className?: string;
  type: ArticlePreviewWithBackgroundCardType;
}

export const ArticleWithBackgroundPreview = ({
  article,
  className,
  type,
}: ArticleWithBackgroundPreviewProps) => {
  const mods: ClassnamesMods = {
    [cls[type]]: true,
  };

  return (
    <UiBox
      className={classNames(cls.articleWithBackgroundPreview, mods, className)}
      style={{ backgroundImage: `url(${article.img})` }}
    >
      <UiBox className={cls.overlay} />
      <UiVStack className={cls.content} justify="center">
        <UiText variant="headingLg" tone="inverted" className={cls.title}>
          {article.title}
        </UiText>
        <UiText variant="bodyMd" tone="inverted" className={cls.description}>
          {article.description}
        </UiText>
        <UiButton variant="outlinedInverted">Read more</UiButton>
      </UiVStack>
    </UiBox>
  );
};
