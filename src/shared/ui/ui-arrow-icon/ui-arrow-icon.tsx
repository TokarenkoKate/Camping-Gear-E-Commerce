import classNames from "classnames";
import ArrowRight from "@/shared/assets/icons/arrow-right-20-20.svg";
import { UiIcon } from "../ui-icon/ui-icon";
import cls from "./ui-arrow-icon.m.scss";

/**
 * Arrow icon component that are used both in UiLink and UiButton components;
 */
interface UiArrowIconProps {
  className?: string;
}

export const UiArrowIcon = ({ className }: UiArrowIconProps) => {
  return (
    <UiIcon
      Svg={ArrowRight}
      width="10px"
      height="10px"
      className={classNames(cls.uiArrowIcon, className)}
    />
  );
};
