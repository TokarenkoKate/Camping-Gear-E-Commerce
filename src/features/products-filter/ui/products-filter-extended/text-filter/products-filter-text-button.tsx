import classNames from "classnames";
import { UiButton } from "@/shared/ui";
import cls from "../products-filter-extended.m.scss";

interface ProductsFilterTextButtonProps {
  name: string;
  value: string;
  isChecked: boolean;
  onToggleValue(value: string, checked: boolean): void;
}

export const ProductsFilterTextButton = ({
  name,
  value,
  isChecked,
  onToggleValue,
}: ProductsFilterTextButtonProps) => {
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
        cls.productsFilterButton,
        isChecked && cls.productsFilterButtonSelected
      )}
    >
      {value}
    </UiButton>
  );
};
