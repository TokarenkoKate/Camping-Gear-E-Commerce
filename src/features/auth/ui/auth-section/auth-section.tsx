import { PropsWithChildren } from "react";
import { To } from "react-router-dom";
import classNames from "classnames";
import { EMPTY_STRING } from "@/shared/const/common-string";
import { UiButton, UiText, UiVStack } from "@/shared/ui";
import { authFormName, AuthFormType } from "../../model/const/auth-form";
import cls from "./auth-section.m.scss";

interface AuthSectionProps {
  title: string;
  buttonText: string;
  formType?: AuthFormType;
  redirectPath?: To;
  className?: string;
}

export const AuthSection = ({
  title,
  children,
  buttonText,
  redirectPath,
  formType,
  className,
}: PropsWithChildren<AuthSectionProps>) => {
  return (
    <UiVStack
      className={classNames(cls.authSection, className)}
      align="normal"
      max
    >
      <UiText variant="headingSm">{title}</UiText>
      {children}
      <UiButton
        variant="background"
        asLink={Boolean(redirectPath)}
        to={redirectPath || EMPTY_STRING}
        type={formType ? "submit" : "button"}
        form={formType ? authFormName[formType] : EMPTY_STRING}
        className={cls.authSectionButton}
      >
        {buttonText}
      </UiButton>
    </UiVStack>
  );
};
