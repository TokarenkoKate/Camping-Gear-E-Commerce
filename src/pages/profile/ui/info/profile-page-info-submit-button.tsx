import { UiButton } from "@/shared/ui";
import { useFormState } from "react-final-form";

export const ProfilePageInfoSubmitButton = () => {
  const { submitting } = useFormState();

  return (
    <UiButton
      variant="background"
      type="submit"
      disabled={submitting}
      loading={submitting}
    >
      Save
    </UiButton>
  );
};
