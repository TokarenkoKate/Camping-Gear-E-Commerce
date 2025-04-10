import { UiVStack } from "@/shared/ui";
import { AboutPageHeader } from "../header/about-page-header";
import { AboutPageIntro } from "../intro/about-page-intro";
import { AboutPageManifesto } from "../manifesto/about-page-manifesto";
import { AboutPageMessages } from "../messages/about-page-messages";
import { AboutPageJournal } from "../journal/about-page-journal";
import cls from "./about-page.m.scss";

export const AboutPage = () => {
  return (
    <UiVStack className={cls.aboutPage}>
      <AboutPageHeader />
      <AboutPageIntro />
      <AboutPageManifesto />
      <AboutPageMessages />
      <AboutPageJournal />
    </UiVStack>
  );
};
