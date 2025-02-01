export type UiCheckboxValue = string | number;

export type UiCheckboxOption = {
  value: UiCheckboxValue;
  label: string;
  disabled?: boolean;
};

export interface UiCheckboxProps {
  /**
   * The name of the input field in a checkbox
   */
  name: string;
  /**
   * The value to be used in the checkbox input.
   * This is the value that will be returned on form submission.
   */
  value: UiCheckboxValue;
  /**
   * Defines the string that labels the checkbox element
   */
  label: string;
  /**
   * If `true`, the checkbox will be checked.
   *
   * @default false
   */
  isChecked: boolean;
  /**
   * If `true`, the checkbox will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * The callback invoked when the checked state of the `Checkbox` changes.
   */
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * If the presentation includes additional descriptive static text relevant to a checkbox or checkbox group,
   * the checkbox or checkbox group has the property aria-describedby set to the ID of the element containing the description.
   */
  "aria-describedby"?: string;
  "aria-invalid"?: true | undefined;
}

export interface UiCheckboxGroupProps extends Pick<UiCheckboxProps, "name"> {
  values: Array<UiCheckboxValue>;
  options: Array<UiCheckboxOption>;
  description?: string;
  onChange(
    event: React.ChangeEvent<HTMLInputElement>,
    values: Array<UiCheckboxValue>
  ): void;
}
