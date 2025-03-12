import { EMPTY_STRING } from "@/shared/const/common-string";
import { UiVStack } from "../../../ui-stack/ui-vstack/ui-vstack";
import { UiRadioButton } from "../ui-radio-button/ui-radio-button";
import { UiRadioGroupProps } from "@/shared/types/ui/ui-radio";
import { useRadioButtonsGroup } from "@/shared/lib/hooks/ui/use-radio-buttons-group";
import cls from "./ui-radio-button-group.m.scss";

export const UiRadioButtonGroup = (props: UiRadioGroupProps) => {
  const { options, value, ariaLabelledBy = EMPTY_STRING } = props;

  const { selectedOptionValue, groupRef, onSelectRadioOption } =
    useRadioButtonsGroup(value);

  return (
    <UiVStack
      className={cls.uiRadioGroup}
      role="radiogroup"
      aria-labelledby={ariaLabelledBy}
      aria-activedescendant={EMPTY_STRING}
      tabIndex={0}
      ref={groupRef}
      as="ul"
      max
      align="normal"
    >
      {options.map((option) => {
        return (
          <li className={cls.uiRadioGroupItem} key={option.value}>
            <UiRadioButton
              option={option}
              checked={selectedOptionValue === option.value}
              onSelectRadioOption={onSelectRadioOption}
            />
          </li>
        );
      })}
    </UiVStack>
  );
};
