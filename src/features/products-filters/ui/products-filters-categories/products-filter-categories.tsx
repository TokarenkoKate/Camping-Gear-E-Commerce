import { useState } from "react";
import { UiCheckboxValue } from "@/shared/types/ui/ui-checkbox";
import { UiButtonCheckboxGroup } from "@/shared/ui/ui-button-checkbox/ui-button-checkbox-group";
import { productsFilterCategoriesOptions } from "../../model/products-filters";

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
      options={productsFilterCategoriesOptions}
      values={values}
      onChange={onChange}
    />
  );
};
