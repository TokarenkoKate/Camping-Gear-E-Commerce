import { SelectHTMLAttributes } from "react";

export type UiSelectOption<
  V extends string | number = string | number,
  L extends string | number = string | number,
> = {
  value: V;
  label: L;
};

type HTMLSelectProps = SelectHTMLAttributes<HTMLInputElement>;

export interface UiSelectProps extends HTMLSelectProps {
  ariaLabel: string;
  value?: string;
  options: UiSelectOption[];
}
