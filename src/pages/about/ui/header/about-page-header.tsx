import { HeroTitle, UiBox } from "@/shared/ui";
import cls from "../page/about-page.m.scss";

export const AboutPageHeader = () => {
  return (
    <UiBox className={cls.aboutPageHeader}>
      <HeroTitle inverted />
    </UiBox>
  );
};
