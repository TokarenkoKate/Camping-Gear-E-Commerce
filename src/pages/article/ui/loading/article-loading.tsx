import { Skeleton, UiVStack } from "@/shared/ui";
import cls from "../page/article-page.m.scss";
import classNames from "classnames";

export const ArticleLoading = () => {
  return (
    <UiVStack className={cls.articleHero}>
      <Skeleton
        width="100%"
        className={classNames(
          cls.articleHeroImage,
          cls.articleHeroImageLoading
        )}
        border={"6px"}
      />
      <UiVStack className={cls.articleHeroContent}>
        <Skeleton width={120} height={20} border={"6px"} />
        <Skeleton width="100%" height={50} border={"6px"} />
        <Skeleton width="100%" height={200} border={"6px"} />
      </UiVStack>
    </UiVStack>
  );
};
