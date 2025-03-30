import classNames from "classnames";
import { UiButton } from "@/shared/ui";
import cls from "../header/list-header.m.scss";

interface ListHeaderTextButtonProps {
  name: string;
  value: string;
  isChecked: boolean;
  onToggleValue(value: string, checked: boolean): void;
}

export const ListHeaderTextButton = ({
  name,
  value,
  isChecked,
  onToggleValue,
}: ListHeaderTextButtonProps) => {
  const onClick = () => {
    onToggleValue(value, !isChecked);
  };

  return (
    <UiButton
      variant="plain"
      size="small"
      onClick={onClick}
      id={value}
      name={name}
      aria-checked={isChecked}
      className={classNames(
        cls.listHeaderFilterButton,
        isChecked && cls.listHeaderFilterButtonSelected
      )}
    >
      {value}
    </UiButton>
  );
};
