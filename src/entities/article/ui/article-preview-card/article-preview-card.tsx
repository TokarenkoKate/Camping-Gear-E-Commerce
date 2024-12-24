import ArrowExternalRight from "@/shared/assets/icons/arrow-external-right-20-20.svg";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { UiIcon } from "@/shared/ui/ui-icon/ui-icon";
import { UiImage } from "@/shared/ui/ui-image/ui-image";
import { ArticlePreview } from "../../model/types/article";
import cls from "./article-preview-card.m.scss";

interface ArticlePreviewProps {
  article: ArticlePreview;
}

export const ArticlePreviewCard = ({ article }: ArticlePreviewProps) => {
  return (
    <UiBox className={cls.articlePreview}>
      <UiVStack className={cls.articlePreviewContent}>
        <UiHStack justify="between" className={cls.articlePreviewHeader} max>
          <UiText variant="bodySm">{article.type}</UiText>
          <UiText variant="bodySm">{article.date}</UiText>
        </UiHStack>
        <UiText variant="headingMd" as="h3" className={cls.articlePreviewTitle}>
          {article.title}
        </UiText>
        <UiText>{article.description}</UiText>
        <UiButton className={cls.articlePreviewLink}>
          <UiIcon Svg={ArrowExternalRight} />
        </UiButton>
      </UiVStack>
      <UiImage
        src={article.img}
        alt={article.title}
        className={cls.articlePreviewImage}
      />
    </UiBox>
  );
};
