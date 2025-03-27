import { UiVStack } from "@/shared/ui";
import { AboutPageHeader } from "../header/about-page-header";
import cls from "./about-page.m.scss";

export const AboutPage = () => {
  return (
    <UiVStack className={cls.aboutPage}>
      <AboutPageHeader />
    </UiVStack>
  );
};
