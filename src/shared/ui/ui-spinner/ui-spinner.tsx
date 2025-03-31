import classNames from "classnames";
import { UiBox } from "../ui-box/ui-box";
import cls from "./ui-spinner.m.scss";

interface UiSpinnerProps {
  size?: "large" | "medium" | "small";
  mode?: "default" | "inverted";
}

export const UiSpinner = ({
  size = "medium",
  mode = "default",
}: UiSpinnerProps) => {
  return <UiBox className={classNames(cls.uiSpinner, cls[size], cls[mode])} />;
};
