import classNames from "classnames";
import ArrowExternalRight from "@/shared/assets/icons/arrow-external-right-20-20.svg";
import { ClassnamesMods } from "@/shared/types/classnames";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { UiIcon } from "@/shared/ui/ui-icon/ui-icon";
import { UiImage } from "@/shared/ui/ui-image/ui-image";
import {
  ArticlePreview,
  ArticlePreviewCardType,
} from "../../model/types/article";
import cls from "./article-preview-card.m.scss";

interface ArticlePreviewProps {
  article: ArticlePreview;
  cardType: ArticlePreviewCardType;
}

export const ArticlePreviewCard = ({
  article,
  cardType,
}: ArticlePreviewProps) => {
  const mods: ClassnamesMods = {
    [cls[cardType]]: true,
  };

  const isFullPageType = cardType === "fullPage";

  return (
    <UiBox className={classNames(cls.articlePreview, mods)}>
      <UiHStack justify="between" className={cls.articlePreviewHeader} max>
        <UiText variant="bodySm">{article.type}</UiText>
        {isFullPageType && <UiText variant="bodySm">{article.date}</UiText>}
      </UiHStack>
      <UiBox className={cls.articlePreviewContent}>
        <UiText variant="headingMd" as="h3" className={cls.articlePreviewTitle}>
          {article.title}
        </UiText>
        <UiText className={cls.articlePreviewDescription}>
          {article.description}
        </UiText>
        {isFullPageType && (
          <UiButton variant="outlined" round className={cls.articlePreviewLink}>
            <UiIcon Svg={ArrowExternalRight} />
          </UiButton>
        )}
      </UiBox>
      <UiImage
        src={article.img}
        alt={article.title}
        className={cls.articlePreviewImage}
      />
    </UiBox>
  );
};
