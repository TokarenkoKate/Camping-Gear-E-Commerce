import classNames from "classnames";
import cls from "./color-tag.m.scss";
import { UiBox } from "../ui-box/ui-box";

interface ColorTagProps {
  color: string;
  selected?: boolean;
  className?: string;
}

export const ColorTag = ({ color, selected, className }: ColorTagProps) => {
  return (
    <UiBox
      className={classNames(
        cls.colorTag,
        { [cls.selected]: selected },
        className
      )}
    >
      <button
        style={{ backgroundColor: color }}
        className={cls.colorTagButton}
      />
    </UiBox>
  );
};
