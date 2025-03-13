import classNames from "classnames";
import cls from "./color-tag.m.scss";

interface ColorTagProps {
  color: string;
  selected?: boolean;
  className?: string;
  onToggleColor?(color: string, value: boolean): void;
}

export const ColorTag = ({
  color,
  selected,
  className,
  onToggleColor,
}: ColorTagProps) => {
  const onClickColorTag = () => {
    onToggleColor?.(color, !selected);
  };

  return (
    <button
      style={{ backgroundColor: color }}
      className={classNames(
        cls.colorTag,
        { [cls.selected]: selected },
        className
      )}
      onClick={onClickColorTag}
      type="button"
    />
  );
};
