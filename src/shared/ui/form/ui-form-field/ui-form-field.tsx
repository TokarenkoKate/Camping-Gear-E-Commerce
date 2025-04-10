import { Field, useField } from "react-final-form";
import { UiBox } from "../../ui-box/ui-box";
import { UiText } from "../../ui-text/ui-text";
import { UiFieldRenderProps } from "@/shared/types/ui/ui-form";
import { EMPTY_STRING } from "@/shared/const/common-string";
import cls from "./ui-form-field.m.scss";

export type UiFormFieldProps<T extends object, Value> = T & {
  name: string;
  label?: string;
  component: React.ComponentType<UiFieldRenderProps<Value> & T>;
};

export const UiFormField = <T extends object, Value>(
  props: UiFormFieldProps<T, Value>
) => {
  const { component: Component, label, name, ...rest } = props;

  const {
    meta: { error, touched },
  } = useField<Value>(name);

  const invalid = error && touched;

  return (
    <UiBox max>
      {label && <UiText>{label}</UiText>}
      <Field<Value> name={name}>
        {({ input, meta }) => (
          <Component {...input} {...meta} {...(rest as T)} />
        )}
      </Field>
      <UiText tone="error" className={cls.uiFormFieldError}>
        {invalid ? error : EMPTY_STRING}
      </UiText>
    </UiBox>
  );
};
