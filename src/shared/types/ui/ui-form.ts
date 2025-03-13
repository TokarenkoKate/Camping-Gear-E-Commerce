import { FieldInputProps, FieldMetaState } from "react-final-form";

/**
 * Return type of useField hook from react-final-form,
 * used to pass input, meta props to form components
 */
export type UiFieldRenderProps<Value> = FieldInputProps<Value> &
  FieldMetaState<Value>;
