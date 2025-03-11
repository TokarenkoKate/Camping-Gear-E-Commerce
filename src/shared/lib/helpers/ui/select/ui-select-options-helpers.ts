import { UiSelectOption } from "@/shared/types/ui/ui-select";

export const getUiSelectOptionByValue = (
  value: string | null,
  options: UiSelectOption[]
): UiSelectOption | null => {
  return options.find((option) => option.value === value) || null;
};

export const getUiSelectNextOption = (
  value: string | null,
  options: UiSelectOption[]
): UiSelectOption | null => {
  const currentOptionIndex = options.findIndex(
    (option) => option.value === value
  );

  const isLastIndex = currentOptionIndex === options.length - 1;

  if (!isLastIndex) {
    return options[currentOptionIndex + 1];
  } else {
    return options[0];
  }
};

export const getUiSelectPreviousOption = (
  value: string | null,
  options: UiSelectOption[]
): UiSelectOption | null => {
  const currentOptionIndex = options.findIndex(
    (option) => option.value === value
  );

  const isFirstIndex = currentOptionIndex === 0;

  if (!isFirstIndex) {
    return options[currentOptionIndex - 1];
  } else {
    return options[options.length - 1];
  }
};
