import { ChangeEvent, KeyboardEvent } from "react";
import { SPACE } from "@/shared/const/common-string";
import { UiCheckboxProps } from "@/shared/types/ui/ui-checkbox";

export const useCheckbox = ({
  value,
  isChecked,
  onChange,
}: Pick<UiCheckboxProps, "value" | "isChecked" | "onChange">) => {
  /**
   * Make sure to prevent page scrolling on space down
   */
  const onKeydown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === SPACE) {
      event.preventDefault();
    }
  };

  /**
   * When the checkbox has focus, pressing the Space key changes the state of the checkbox.
   * When checked, the checkbox element has state aria-checked set to true.
   */
  const onKeyup = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === SPACE) {
      onChange({
        currentTarget: { checked: !isChecked, value: value.toString() },
      } as ChangeEvent<HTMLInputElement>);
      event.stopPropagation();
    }
  };

  return { onKeydown, onKeyup };
};
