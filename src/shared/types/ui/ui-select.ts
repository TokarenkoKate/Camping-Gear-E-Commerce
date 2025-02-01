export type UiSelectOption<
  V extends string | number = string | number,
  L extends string | number = string | number,
> = {
  value: V;
  label: L;
};
