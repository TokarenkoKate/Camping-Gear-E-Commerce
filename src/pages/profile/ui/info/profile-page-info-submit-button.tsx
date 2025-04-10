import { UiButton } from "@/shared/ui";
import { useFormState } from "react-final-form";

export const ProfilePageInfoSubmitButton = () => {
  const { pristine, submitting } = useFormState();

  const isDisabled = pristine || submitting;

  return (
    <UiButton
      variant="background"
      type="submit"
      disabled={isDisabled}
      loading={submitting}
    >
      Save
    </UiButton>
  );
};
