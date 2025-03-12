import { UiRadioOption } from "@/shared/types/ui/ui-radio";
import { UiBox } from "../../../ui-box/ui-box";
import cls from "./ui-radio-button.m.scss";

interface UiRadioButtonProps {
  checked: boolean;
  option: UiRadioOption;
  ariaDescribedBy?: string;
  onSelectRadioOption(optionValue: string): void;
}

export const UiRadioButton = (props: UiRadioButtonProps) => {
  const { option, checked, ariaDescribedBy, onSelectRadioOption } = props;

  const inputId = String(option.value);
  const onClickRadioButton = () => {
    onSelectRadioOption(inputId);
  };

  return (
    <UiBox className={cls.uiRadioButton}>
      <input
        type="radio"
        id={inputId}
        checked={checked}
        onChange={onClickRadioButton}
        name="radio"
        aria-describedby={ariaDescribedBy}
        value={option.value}
        className={cls.uiRadioButtonInput}
      />
      <label htmlFor={inputId} className={cls.uiRadioButtonLabel}>
        {option.label}
      </label>
    </UiBox>
  );
};
