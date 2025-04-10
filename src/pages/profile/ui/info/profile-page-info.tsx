import { UiFormField, UiHStack, UiInput, UiText, UiVStack } from "@/shared/ui";
import cls from "../page/profile-page.m.scss";
import { useForm } from "@/shared/lib/hooks/ui/use-form";

export const ProfilePageInfo = () => {
  const Form = useForm();

  return (
    <UiVStack className={cls.profilePageInfo} max>
      <UiText variant="headingMd">Personal information</UiText>
      <Form onSubmit={() => {}} className={cls.profilePageInfoForm}>
        <UiHStack max className={cls.profilePageInfoRow}>
          <UiFormField
            name={"fullName"}
            placeholder={"full name"}
            component={UiInput}
          />
          <UiFormField
            name={"email"}
            placeholder={"email"}
            component={UiInput}
          />
        </UiHStack>
      </Form>
    </UiVStack>
  );
};
