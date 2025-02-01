import { UiCheckboxGroupProps } from "@/shared/types/ui/ui-checkbox";
import { useCallback, useState } from "react";

export const useCheckboxGroup = ({
  values: passedValues = [],
  onChange,
}: Pick<UiCheckboxGroupProps, "options" | "values" | "onChange">) => {
  const [values, setValues] = useState(passedValues);

  const removeValue = useCallback(
    (originalEvent: React.ChangeEvent<HTMLInputElement>, value: string) => {
      const nextValues = values.includes(value)
        ? values.slice().filter((item) => item !== value)
        : values;

      setValues(nextValues);
      onChange(originalEvent, nextValues);
    },
    [onChange, values]
  );

  const addValue = useCallback(
    (originalEvent: React.ChangeEvent<HTMLInputElement>, value: string) => {
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
        addValue(e, value);
      } else {
        removeValue(e, value);
      }
    },
    [addValue, removeValue]
  );

  return { changeHandler };
};
