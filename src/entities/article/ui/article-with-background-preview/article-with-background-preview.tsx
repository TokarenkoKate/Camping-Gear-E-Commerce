import classNames from "classnames";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { ArticlePreview } from "../../model/types/article";
import { UiImage } from "@/shared/ui/ui-image/ui-image";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import cls from "./article-with-background-preview.m.scss";

interface ArticleWithBackgroundPreviewProps {
  article: ArticlePreview;
  className?: string;
}

export const ArticleWithBackgroundPreview = ({
  article,
  className,
}: ArticleWithBackgroundPreviewProps) => {
  return (
    <UiBox className={classNames(cls.articleWithBackgroundPreview, className)}>
      <UiImage
        src={article.img}
        alt={article.title}
        className={cls.articleWithBackgroundPreviewImage}
      />
      <UiBox className={cls.articleWithBackgroundPreviewOverlay} />
      <UiVStack
        className={cls.articleWithBackgroundPreviewContent}
        align="center"
        justify="center"
      >
        <UiText variant="headingLg" tone="inverted" align="center">
          {article.title}
        </UiText>
        <UiText variant="bodyMd" tone="inverted" align="center">
          {article.description}
        </UiText>
        <UiButton variant="outlinedInverted">Read more</UiButton>
      </UiVStack>
    </UiBox>
  );
};
