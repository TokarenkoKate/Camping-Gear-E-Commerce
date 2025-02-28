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
      leftIconSvg,
      rightIconSvg,
      disabled,
      className,
      asLink,
      to,
      href,
      target = "_blank",
      rel = "noopener noreferrer",
      max,
      ...restProps
    } = props;

    const withArrow = variant === "plainWithArrow";

    const mods: ClassnamesMods = {
      [cls[variant]]: true,
      [cls[size]]: true,
      [cls.disabled]: disabled,
      [cls.round]: round,
      [cls.max]: max,
    };

    const content = (
      <>
        {withArrow && <UiArrowIcon className={cls.arrow} />}
        {leftIconSvg && <UiIcon Svg={leftIconSvg} className={cls.icon} />}
        {children}
        {rightIconSvg && <UiIcon Svg={rightIconSvg} className={cls.icon} />}
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
