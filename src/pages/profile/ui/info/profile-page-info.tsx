import { UiBox, UiFormField, UiInput, UiText, UiVStack } from "@/shared/ui";
import { useForm } from "@/shared/lib/hooks/ui/use-form";
import { ProfileFormValues } from "../../model/types/profile-form";
import {
  ProfileFormInputName,
  profileFormFieldPlaceholder,
} from "../../model/const/profile-form";
import { ProfilePageInfoSubmitButton } from "./profile-page-info-submit-button";
import { profileInfoValidationSchema } from "../../model/helpers/profile-info-validation-schema";
import { validateForm } from "@/shared/lib/helpers/form/validate-form";
import cls from "../page/profile-page.m.scss";

interface ProfilePageInfoProps {
  initialProfileFormValues: ProfileFormValues;
  onSubmitProfileForm(values: ProfileFormValues): void;
}

export const ProfilePageInfo = ({
  initialProfileFormValues,
  onSubmitProfileForm,
}: ProfilePageInfoProps) => {
  const Form = useForm<ProfileFormValues>();
  const validate = validateForm<ProfileFormValues>(profileInfoValidationSchema);

  return (
    <UiVStack className={cls.profilePageInfo} max>
      <UiText variant="headingMd">Personal information</UiText>
      <Form
        initialValues={initialProfileFormValues}
        onSubmit={onSubmitProfileForm}
        className={cls.profilePageInfoForm}
        validate={validate}
      >
        <UiBox max className={cls.profilePageInfoFields}>
          <UiFormField
            name={ProfileFormInputName.fullName}
            placeholder={profileFormFieldPlaceholder.fullName}
            required
            component={UiInput}
          />
          <UiFormField
            name={ProfileFormInputName.email}
            placeholder={profileFormFieldPlaceholder.email}
            required
            component={UiInput}
          />
        </UiBox>
        <ProfilePageInfoSubmitButton />
      </Form>
    </UiVStack>
  );
};
