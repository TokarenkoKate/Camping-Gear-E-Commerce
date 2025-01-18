import { ClassnamesMods } from "@/shared/types/classnames";
import { UiButtonProps } from "@/shared/types/ui/ui-button";
import classNames from "classnames";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { UiIcon } from "../ui-icon/ui-icon";
import { UiArrowIcon } from "../ui-arrow-icon/ui-arrow-icon";
import cls from "./ui-button.m.scss";

export type UiButtonRef = HTMLButtonElement | null;

export const UiButton = forwardRef<UiButtonRef, UiButtonProps>(
  function UiButton(props, forwardRef) {
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

    const withArrow = variant === "plainWithArrow";

    const mods: ClassnamesMods = {
      [cls[variant]]: true,
      [cls[size]]: true,
      [cls.disabled]: disabled,
      [cls.round]: round,
    };

    const content = (
      <>
        {withArrow && <UiArrowIcon className={cls.arrow} />}
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
        ref={forwardRef}
        {...restProps}
      >
        {content}
      </button>
    );
  }
);
