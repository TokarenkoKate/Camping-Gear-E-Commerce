import { UiHStack, UiButton } from "@/shared/ui";
import cls from "../products-filter-extended.m.scss";
import { useForm, useFormState } from "react-final-form";
import { isProductsFilterFormEmpty } from "@/features/products-filter/model/lib/is-products-filter-form-empty";

export const ProductsFilterSubmitButtons = ({
  onResetFilters,
}: {
  onResetFilters: VoidFunction;
}) => {
  const { values } = useFormState();
  const isEmptyForm = isProductsFilterFormEmpty(values);

  const form = useForm();

  const onClickResetForm = () => {
    form.reset();
    onResetFilters();
  };

  return (
    <UiHStack className={cls.productsFilterButtons}>
      <UiButton
        variant="outlined"
        type="reset"
        disabled={isEmptyForm}
        onClick={onClickResetForm}
      >
        Clear all
      </UiButton>
      <UiButton variant="background" type="submit">
        Apply
      </UiButton>
    </UiHStack>
  );
};
