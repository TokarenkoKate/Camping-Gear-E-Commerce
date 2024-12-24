import classNames from "classnames";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { ClassnamesMods } from "@/shared/types/classnames";
import { UiIcon } from "../ui-icon/ui-icon";
import { UiButtonVariant, UiButtonSize } from "@/shared/types/ui/ui-button";
import cls from "./ui-button.m.scss";

interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | string;
  variant?: UiButtonVariant;
  round?: boolean;
  size?: UiButtonSize;
  IconSvg?: React.VFC<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  className?: string;
}

export const UiButton = memo(function UiButton(props: UiButtonProps) {
  const {
    children,
    variant = "clear",
    round,
    size = "medium",
    IconSvg,
    disabled,
    className,
    ...restProps
  } = props;

  const mods: ClassnamesMods = {
    [cls[variant]]: true,
    [cls[size]]: true,
    [cls.disabled]: disabled,
    [cls.round]: round,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(cls.uiButton, mods, className)}
      {...restProps}
    >
      {IconSvg && <UiIcon Svg={IconSvg} className={cls.icon} />}
      {children}
    </button>
  );
});
