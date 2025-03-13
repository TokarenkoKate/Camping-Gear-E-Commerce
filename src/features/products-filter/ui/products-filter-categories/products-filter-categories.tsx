import { useState } from "react";
import { UiCheckboxValue } from "@/shared/types/ui/ui-checkbox";
import { UiButtonCheckboxGroup } from "@/shared/ui";

export const ProductsFilterCategories = () => {
  const [values, setValues] = useState<Array<UiCheckboxValue>>([]);
  const onChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    values: Array<UiCheckboxValue>
  ) => {
    setValues(values);
  };

  return (
    <UiButtonCheckboxGroup
      name="productCategories"
      options={[]}
      values={values}
      onChange={onChange}
    />
  );
};
