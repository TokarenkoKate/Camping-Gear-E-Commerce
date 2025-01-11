import classNames from "classnames";
import { UiBox } from "../ui-box/ui-box";
import cls from "./ui-divider.m.scss";

interface UiDividerProps {
  className?: string;
  orientation: "horizontal" | "vertical";
}

export const UiDivider = ({
  className,
  orientation = "horizontal",
}: UiDividerProps) => {
  return (
    <UiBox
      className={classNames(
        cls.uiDivider,
        {
          [cls[orientation]]: orientation,
        },
        className
      )}
    />
  );
};
