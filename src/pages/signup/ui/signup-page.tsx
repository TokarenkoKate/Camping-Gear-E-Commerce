import { UiBox, UiText, UiVStack } from "@/shared/ui";
import {
  AuthForm,
  AuthFormType,
  AuthSection,
  useSignUp,
} from "@/features/auth";
import { appRoutesPaths } from "@/shared/const/router";
import cls from "./signup-page.m.scss";

export const SignUpPage = () => {
  const onSubmitForm = useSignUp();

  return (
    <UiBox className={cls.signupPage}>
      <AuthSection title="Sign Up" className={cls.signupSection}>
        <AuthForm
          type={AuthFormType.signup}
          buttonText="Sign Up"
          onSubmit={onSubmitForm}
        />
      </AuthSection>
      <AuthSection
        title="New to CEIN"
        buttonText="Login In"
        redirectPath={appRoutesPaths.login}
        className={cls.signupSection}
      >
        <UiVStack max className={cls.signupSectionTexts}>
          <UiText>If you have an existing account, please login here.</UiText>
        </UiVStack>
      </AuthSection>
    </UiBox>
  );
};
