import { ClassnamesMods } from "@/shared/types/classnames";
import { UiButtonProps } from "@/shared/types/ui/ui-button";
import classNames from "classnames";
import { memo } from "react";
import { Link } from "react-router-dom";
import { UiIcon } from "../ui-icon/ui-icon";
import cls from "./ui-button.m.scss";

export const UiButton = memo(function UiButton(props: UiButtonProps) {
  const {
    children,
    variant = "clear",
    round,
    size = "medium",
    IconSvg,
    disabled,
    className,
    asLink,
    to,
    href,
    target = "_blank",
    rel = "noopener noreferrer",
    ...restProps
  } = props;

  const mods: ClassnamesMods = {
    [cls[variant]]: true,
    [cls[size]]: true,
    [cls.disabled]: disabled,
    [cls.round]: round,
  };

  const content = (
    <>
      {IconSvg && <UiIcon Svg={IconSvg} className={cls.icon} />}
      {children}
    </>
  );

  if (asLink) {
    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={classNames(cls.uiButton, mods, className)}
        >
          {content}
        </a>
      );
    }

    if (to) {
      return (
        <Link to={to} className={classNames(cls.uiButton, mods, className)}>
          {content}
        </Link>
      );
    }
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNames(cls.uiButton, mods, className)}
      {...restProps}
    >
      {content}
    </button>
  );
});
