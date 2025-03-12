import { FC, FormEventHandler, ReactNode, useMemo } from "react";
import { FormApi } from "final-form";
import arrayMutators from "final-form-arrays";
import { Form, FormProps } from "react-final-form";

export type UiFormProps<T> = {
  children: ReactNode;
  initialValues?: Partial<T>;
  onSubmit: (values: T, form: FormApi<T>) => object | Promise<object> | void;
  onChange?: FormEventHandler<HTMLFormElement>;
};

export const useForm = <T,>() => {
  return useMemo(() => {
    const UiForm: FC<UiFormProps<T> & FormProps<T, Partial<T>>> = ({
      children,
      onChange,
      mutators,
      ...props
    }) => (
      <Form
        {...props}
        mutators={{ ...arrayMutators, ...mutators }}
        render={({ handleSubmit }) => (
          <form onChange={onChange} onSubmit={handleSubmit} autoComplete="off">
            {children}
          </form>
        )}
      />
    );
    return UiForm;
  }, []);
};
