import classNames from "classnames";
import { To } from "react-router-dom";
import ArrowExternalRight from "@/shared/assets/icons/arrow-external-right-20-20.svg";
import { ClassnamesMods } from "@/shared/types/classnames";
import {
  UiBox,
  UiHStack,
  UiText,
  UiButton,
  UiIcon,
  UiImage,
} from "@/shared/ui";
import {
  ArticlePreview,
  ArticlePreviewCardType,
} from "../../model/types/article";
import cls from "./article-preview-card.m.scss";
import { appRoutesPaths } from "@/shared/const/router";
import { getImageSrcPath } from "@/shared/lib/helpers/ui/image/get-image-src-path";

interface ArticlePreviewProps {
  article: ArticlePreview;
  cardType: ArticlePreviewCardType;
  withRedirect?: boolean;
}

export const ArticlePreviewCard = ({
  article,
  cardType,
  withRedirect,
}: ArticlePreviewProps) => {
  const { id, type, date, title, description, image } = article;
  const mods: ClassnamesMods = {
    [cls[cardType]]: true,
  };

  const isLargeType = cardType === "large";
  const redirectPath: To = `${appRoutesPaths.journal}/${id}`;
  const imagePath = getImageSrcPath(image);

  return (
    <UiBox className={classNames(cls.articlePreview, mods)}>
      <UiHStack justify="between" className={cls.articlePreviewHeader} max>
        <UiText variant="bodySm" className={cls.articlePreviewType}>
          {type}
        </UiText>
        {isLargeType && <UiText variant="bodySm">{date}</UiText>}
      </UiHStack>
      <UiBox className={cls.articlePreviewContent}>
        <UiText variant="headingMd" as="h3" className={cls.articlePreviewTitle}>
          {title}
        </UiText>
        <UiText className={cls.articlePreviewDescription}>{description}</UiText>
        {withRedirect && (
          <UiButton
            variant="outlined"
            round
            className={cls.articlePreviewLink}
            asLink
            to={redirectPath}
          >
            <UiIcon Svg={ArrowExternalRight} />
          </UiButton>
        )}
      </UiBox>
      <UiImage
        src={imagePath}
        alt={title}
        className={cls.articlePreviewImage}
      />
    </UiBox>
  );
};
