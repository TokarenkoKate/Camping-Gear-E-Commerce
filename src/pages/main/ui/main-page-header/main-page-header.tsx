import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { HeroTitle } from "@/shared/ui/hero-title/hero-title";
import cls from "../main-page/main-page.m.scss";

export const MainPageHeader = () => {
  return (
    <UiBox className={cls.mainPageHeader}>
      <HeroTitle />
    </UiBox>
  );
};
