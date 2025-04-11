import { UiHStack, UiButton } from "@/shared/ui";
import { useForm, useFormState } from "react-final-form";
import { isListHeaderFormEmpty } from "../../model/lib/helpers/is-list-header-filter-form-empty";
import cls from "../header/list-header.m.scss";

export const ListHeaderSubmitButtons = ({
  onResetFilters,
}: {
  onResetFilters: VoidFunction;
}) => {
  const { values } = useFormState();
  const isEmptyForm = isListHeaderFormEmpty(values);

  const form = useForm();

  const onClickResetForm = () => {
    form.reset();
    onResetFilters();
  };

  return (
    <UiHStack className={cls.listHeaderButtons}>
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
