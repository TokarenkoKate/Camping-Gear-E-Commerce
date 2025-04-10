import { PropsWithChildren } from "react";
import { To } from "react-router-dom";
import classNames from "classnames";
import { UiButton, UiText, UiVStack } from "@/shared/ui";
import cls from "./auth-section.m.scss";

interface AuthSectionProps {
  title: string;
  buttonText?: string;
  redirectPath?: To;
  className?: string;
}

export const AuthSection = ({
  title,
  children,
  buttonText,
  redirectPath,
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
      {redirectPath && (
        <UiButton
          variant="background"
          asLink={Boolean(redirectPath)}
          to={redirectPath}
          type="button"
          className={cls.authSectionButton}
        >
          {buttonText}
        </UiButton>
      )}
    </UiVStack>
  );
};
