import { UiSelectOption } from "@/shared/types/ui/ui-select";
import classNames from "classnames";
import cls from "./ui-select.m.scss";

interface UiSelectOptionProps {
  option: UiSelectOption;
  isFocused: boolean;
  isSelected: boolean;
  onFocusOption(option: UiSelectOption): void;
  onSelectOption(option: UiSelectOption): void;
}

export const UiSelectOptionComponent = ({
  option,
  isFocused,
  isSelected,
  onFocusOption,
  onSelectOption,
}: UiSelectOptionProps) => {
  const onClick = () => {
    onSelectOption(option);
  };

  const onHover = () => {
    onFocusOption(option);
  };

  const mods = {
    [cls.isFocused]: isFocused,
    [cls.isSelected]: isSelected,
  };

  return (
    <li
      id={`${option.value}`}
      className={classNames(cls.uiSelectListItem, mods)}
      role="option"
      aria-selected={isSelected}
      onClick={onClick}
      onMouseOver={onHover}
    >
      {option.label}
    </li>
  );
};
