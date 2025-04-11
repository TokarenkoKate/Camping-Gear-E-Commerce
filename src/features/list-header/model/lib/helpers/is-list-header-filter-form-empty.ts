import { getTypedObjectKeys } from "@/shared/lib/helpers/get-typed-object";

/**
 * Helper to check whether list header form values empty,
 * used for submit buttons,
 * i.e. to disable reset button, if empty
 * @param formValues filter form values
 * @returns true if form is empty, otherwise false
 */
export const isListHeaderFormEmpty = (
  formValues: Record<string, string[]> | undefined
) => {
  if (!formValues) {
    return true;
  }

  const formValuesKeys = getTypedObjectKeys(formValues);

  if (!formValuesKeys || !formValuesKeys?.length) {
    return true;
  }

  return formValuesKeys.every((key) => {
    return !formValues[key].length;
  });
};
