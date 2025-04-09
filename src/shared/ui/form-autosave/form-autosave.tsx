import { useEffect, useState } from "react";
import { deepEqual } from "@/shared/lib/helpers/deep-equal";

interface Props<T> {
  onSave: (values: T) => void;
  values: T;
}

export const FormAutoSave = <T extends Record<string, unknown>>(
  props: Props<T>
) => {
  const { onSave, values } = props;
  const [saveValues, setSaveValues] = useState(values);

  useEffect(() => {
    const isEqualValues = deepEqual(saveValues, values);
    if (!isEqualValues) {
      setSaveValues(values);
      onSave(values);
    }
  }, [values]);

  return null;
};
