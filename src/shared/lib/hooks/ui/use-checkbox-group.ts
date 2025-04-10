import {
  UiCheckboxGroupProps,
  UiCheckboxValue,
} from "@/shared/types/ui/ui-checkbox";
import { useCallback, useState } from "react";

export const useCheckboxGroup = <T extends UiCheckboxValue>({
  values: passedValues = [],
  onChange,
}: Pick<UiCheckboxGroupProps<T>, "options" | "values" | "onChange">) => {
  const [values, setValues] = useState(passedValues);

  const removeValue = useCallback(
    (originalEvent: React.ChangeEvent<HTMLInputElement>, value: T) => {
      const nextValues = values.includes(value)
        ? values.slice().filter((item) => item !== value)
        : values;

      setValues(nextValues);
      onChange(originalEvent, nextValues);
    },
    [onChange, values]
  );

  const addValue = useCallback(
    (originalEvent: React.ChangeEvent<HTMLInputElement>, value: T) => {
      const nextValues =
        values.includes(value) === true ? values : values.slice().concat(value);

      setValues(nextValues);
      onChange(originalEvent, nextValues);
    },
    [onChange, values]
  );

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        currentTarget: { value, checked },
      } = e;

      if (checked) {
        addValue(e, value as T);
      } else {
        removeValue(e, value as T);
      }
    },
    [addValue, removeValue]
  );

  return { changeHandler };
};
