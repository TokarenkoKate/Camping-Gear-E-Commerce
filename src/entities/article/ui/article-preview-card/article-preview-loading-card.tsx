import classNames from "classnames";
import { Skeleton, UiHStack, UiBox } from "@/shared/ui";
import { ClassnamesMods } from "@/shared/types/classnames";
import { ArticlePreviewCardType } from "../../model/types/article";
import cls from "./article-preview-card.m.scss";

interface ArticlePreviewLoadingCardProps {
  cardType: ArticlePreviewCardType;
}

export const ArticlePreviewLoadingCard = ({
  cardType,
}: ArticlePreviewLoadingCardProps) => {
  const mods: ClassnamesMods = {
    [cls[cardType]]: true,
  };

  return (
    <UiBox className={classNames(cls.articlePreview, mods)}>
      <UiHStack className={cls.articlePreviewHeader} max>
        <Skeleton height={20} width={60} border="6px" />
      </UiHStack>
      <Skeleton
        height={20}
        width="100%"
        border="6px"
        className={cls.articlePreviewImage}
      />
      <UiBox className={cls.articlePreviewContent}>
        <Skeleton height={20} width="80%" border="6px" />
        <Skeleton height={50} width="100%" border="6px" />
      </UiBox>
    </UiBox>
  );
};
