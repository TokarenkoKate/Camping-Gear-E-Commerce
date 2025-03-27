import { UiBox, UiText } from "@/shared/ui";
import cls from "../page/about-page.m.scss";

export const AboutPageIntro = () => {
  return (
    <UiBox className={cls.aboutPageIntro} as="section">
      <UiText variant="headingXl" className={cls.aboutPageIntroTitle} as="h2">
        Camp
        <br />
        your way
      </UiText>
      <UiText className={cls.aboutPageIntroSubtitle}>
        Embracing freedom, Embracing you
      </UiText>
    </UiBox>
  );
};
