import classNames from "classnames";
import cls from "./ui-button.m.scss";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { ClassnamesMods } from "@/shared/types/classnames";

export enum UiButtonVariant {
  CLEAR = "clear",
}

interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  className?: string;
  disabled?: boolean;
  variant?: UiButtonVariant;
}

export const UiButton = memo(function UiButton(props: UiButtonProps) {
  const {
    children,
    className,
    disabled,
    variant = UiButtonVariant.CLEAR,
    ...restProps
  } = props;

  const mods: ClassnamesMods = {
    [cls[variant]]: true,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(cls.uiButton, className, mods)}
      {...restProps}
    >
      {children}
    </button>
  );
});
