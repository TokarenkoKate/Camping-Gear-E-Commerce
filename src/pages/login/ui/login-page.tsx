import { UiBox, UiText, UiVStack } from "@/shared/ui";
import { AuthForm, AuthFormType, AuthSection } from "@/features/auth";
import { appRoutesPaths } from "@/shared/const/router";
import cls from "./login-page.m.scss";

export const LoginPage = () => {
  return (
    <UiBox className={cls.loginPage}>
      <AuthSection
        title="Log In"
        buttonText="Log In"
        className={cls.loginSection}
        formType={AuthFormType.login}
      >
        <AuthForm type={AuthFormType.login} />
      </AuthSection>
      <AuthSection
        title="New to CEIN"
        buttonText="Sign Up"
        redirectPath={appRoutesPaths.signup}
        className={cls.loginSection}
      >
        <UiVStack max className={cls.loginSectionTexts}>
          <UiText>
            If you have not yet registered as a member, please register here.
          </UiText>
          <UiText>
            If you register as a member, you can use the point service (up to 5%
            return). We will give you 1,000 points as a birthday benefit.
          </UiText>
        </UiVStack>
      </AuthSection>
    </UiBox>
  );
};
