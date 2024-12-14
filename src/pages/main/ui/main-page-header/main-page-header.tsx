import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import cls from "../main-page/main-page.m.scss";

export const MainPageHeader = () => {
  return (
    <UiBox className={cls.mainPageHeader}>
      <UiText as="h1" variant="hero" className={cls.mainPageTitle}>
        Gear up for Great Outdoors
        <UiText as="span" className={cls.mainPageTitleRegistered}>
          R
        </UiText>
      </UiText>
      <UiText as="h2" variant="headingSm" className={cls.mainPageSubtitle}>
        Premium Camping Gear
      </UiText>
    </UiBox>
  );
};
