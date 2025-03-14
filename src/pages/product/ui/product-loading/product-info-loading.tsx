import classNames from "classnames";
import { Skeleton, UiBox, UiHStack, UiVStack } from "@/shared/ui";
import cls from "../product-page.m.scss";

export const ProductLoading = () => {
  return (
    <UiBox className={classNames(cls.productInfo, cls.loading)}>
      <Skeleton className={cls.img} height="auto" />
      <UiBox className={cls.content}>
        <UiVStack className={cls.loadingTexts}>
          <Skeleton
            className={classNames(cls.loadingText, cls.loadingTextLeft)}
          />
          <Skeleton
            className={classNames(cls.loadingText, cls.loadingTextCenter)}
          />
          <Skeleton
            className={classNames(cls.loadingText, cls.loadingTextRight)}
          />
        </UiVStack>
        <Skeleton className={cls.loadingButton} />
        <UiHStack className={cls.loadingBoxes}>
          <Skeleton className={cls.loadingBox} />
          <Skeleton className={cls.loadingBox} />
        </UiHStack>
      </UiBox>
    </UiBox>
  );
};
