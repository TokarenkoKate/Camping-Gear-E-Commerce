import classNames from "classnames";
import { UiText } from "../ui-text/ui-text";
import cls from "./hero-title.m.scss";

interface HeroTitleProps {
  inverted?: boolean;
}

export const HeroTitle = ({ inverted = false }: HeroTitleProps) => {
  return (
    <>
      <UiText
        as="h1"
        variant="hero"
        className={classNames(cls.heroTitle, {
          [cls.heroTitleInverted]: inverted,
        })}
      >
        Gear up for Great Outdoors
        <UiText as="span" className={cls.heroTitleRegistered}>
          R
        </UiText>
      </UiText>
      <UiText
        as="h2"
        variant="headingSm"
        className={classNames(cls.heroSubtitle, {
          [cls.heroSubtitleInverted]: inverted,
        })}
      >
        Premium Camping Gear
      </UiText>
    </>
  );
};
