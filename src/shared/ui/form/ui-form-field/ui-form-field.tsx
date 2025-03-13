import { Field, useField } from "react-final-form";
import { UiBox } from "../../ui-box/ui-box";
import { UiText } from "../../ui-text/ui-text";
import { UiFieldRenderProps } from "@/shared/types/ui/ui-form";

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
      {invalid && <UiText>{error}</UiText>}
    </UiBox>
  );
};
