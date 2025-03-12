import { UiBox, HeroTitle } from "@/shared/ui";
import cls from "../main-page/main-page.m.scss";

export const MainPageHeader = () => {
  return (
    <UiBox className={cls.mainPageHeader}>
      <HeroTitle />
    </UiBox>
  );
};
