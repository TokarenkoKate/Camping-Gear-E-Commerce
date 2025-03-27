import { UiBox, UiText, UiVStack } from "@/shared/ui";
import cls from "../page/about-page.m.scss";

export const AboutPageManifesto = () => {
  return (
    <UiBox className={cls.aboutPageManifesto} as="section">
      <UiText className={cls.aboutPageManifestoExtraText}>
        CEIN Origins Since 2004
      </UiText>
      <UiVStack className={cls.aboutPageManifestoContent}>
        <UiText variant="headingMd" as="h3">
          Unbounded: The Campers&apos; Manifesto
        </UiText>
        <UiVStack className={cls.aboutPageManifestoTexts}>
          <UiText>
            In 2004, CEIN opened its first store in Englos, a town near Lille,
            in the North of France. With over four decades of experience, the
            brand strives to provide innovative, affordable and sustainable
            sports products and has stayed true to the same mission: to
            sustainably make the pleasure and benefits of camping accessible to
            the many.
          </UiText>
          <UiText>
            Drawing from more than forty years of expertise, the brand is
            dedicated to offering inventive, cost-effective, and eco-conscious
            camping merchandise. Throughout its journey, CEIN has remained
            steadfast in its mission: to make the joys and advantages of camping
            accessible to a broad audience, all while prioritizing
            sustainability.
          </UiText>
        </UiVStack>
      </UiVStack>
    </UiBox>
  );
};
