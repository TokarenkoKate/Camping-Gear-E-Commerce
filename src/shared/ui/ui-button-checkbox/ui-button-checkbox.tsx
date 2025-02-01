import classNames from "classnames";
import { UiCheckboxProps } from "@/shared/types/ui/ui-checkbox";
import { useCheckbox } from "@/shared/lib/hooks/ui/use-checkbox";
import cls from "./ui-button-checkbox-group.m.scss";

/**
 * Visually, these checkbox toggle buttons are identical to buttons.
 * However, they are conveyed differently by assistive technologies:
 * the checkbox toggles will be announced by screen readers as “checked”/“not checked”
 * (since, despite their appearance, they are fundamentally still checkboxes),
 * whereas the toggle buttons will be announced as “button”/“button pressed”.
 */

type UiButtonCheckboxProps = UiCheckboxProps;

export const UiButtonCheckbox = (props: UiButtonCheckboxProps) => {
  const { value, isChecked, label, name, onChange } = props;
  const { onKeydown, onKeyup } = useCheckbox({ value, isChecked, onChange });

  return (
    <label
      className={classNames(cls.uiButtonCheckbox, { [cls.checked]: isChecked })}
      htmlFor={`checkbox-${value}`}
    >
      <input
        value={value}
        name={name}
        aria-checked={isChecked}
        id={`checkbox-${value}`}
        type="checkbox"
        autoComplete="off"
        onChange={onChange}
        onKeyDown={onKeydown}
        onKeyUp={onKeyup}
      />
      {label}
    </label>
  );
};
