import { InputHTMLAttributes } from "react";

export type UiRadioOption<
  V extends string | number = string | number,
  L extends string | number = string | number,
> = {
  value: V;
  label: L;
};

type HTMLRadioProps = InputHTMLAttributes<HTMLInputElement>;

export interface UiRadioGroupProps extends HTMLRadioProps {
  value?: string;
  options: UiRadioOption[];
  ariaLabelledBy?: string;
}
