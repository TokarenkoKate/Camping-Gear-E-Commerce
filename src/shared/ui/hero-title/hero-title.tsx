import { UiText } from "../ui-text/ui-text";
import cls from "./hero-title.m.scss";

export const HeroTitle = () => {
  return (
    <>
      <UiText as="h1" variant="hero" className={cls.heroTitle}>
        Gear up for Great Outdoors
        <UiText as="span" className={cls.heroTitleRegistered}>
          R
        </UiText>
      </UiText>
      <UiText as="h2" variant="headingSm" className={cls.heroTitleSubtitle}>
        Premium Camping Gear
      </UiText>
    </>
  );
};
