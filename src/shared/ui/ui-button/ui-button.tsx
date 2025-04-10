import { forwardRef, useImperativeHandle } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ClassnamesMods } from "@/shared/types/classnames";
import { UiButtonProps } from "@/shared/types/ui/ui-button";
import { UiIcon } from "../ui-icon/ui-icon";
import { UiArrowIcon } from "../ui-arrow-icon/ui-arrow-icon";
import { UiSpinner } from "../ui-spinner/ui-spinner";
import { useUiButtonLoadingState } from "@/shared/lib/hooks/ui/use-ui-button-loading-state";
import { useUiButtonLoadingDimensions } from "@/shared/lib/hooks/ui/use-ui-button-loading-dimensions";
import cls from "./ui-button.m.scss";

const invertedColorModeVariants = ["background", "outlinedInverted"];

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
      loading,
      className,
      asLink,
      to,
      href,
      target = "_blank",
      rel = "noopener noreferrer",
      max,
      ...restProps
    } = props;

    /**
     * Handle button loading state
     */
    const isLoading = useUiButtonLoadingState(loading);

    /**
     * Handle button dimensions on loading state change
     */
    const { width, height, buttonRef } =
      useUiButtonLoadingDimensions(isLoading);

    useImperativeHandle(forwardRef, () => buttonRef.current!);

    const withArrow = variant === "plainWithArrow";

    const mods: ClassnamesMods = {
      [cls[variant]]: true,
      [cls[size]]: true,
      [cls.disabled]: disabled,
      [cls.loading]: isLoading,
      [cls.round]: round,
      [cls.max]: max,
    };

    const content = !isLoading ? (
      <>
        {withArrow && <UiArrowIcon className={cls.arrow} />}
        {leftIconSvg && <UiIcon Svg={leftIconSvg} className={cls.icon} />}
        {children}
        {rightIconSvg && <UiIcon Svg={rightIconSvg} className={cls.icon} />}
      </>
    ) : (
      <UiSpinner
        size={size === "medium" ? "medium" : "small"}
        mode={
          invertedColorModeVariants.includes(variant) ? "default" : "inverted"
        }
      />
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
          <Link
            to={to}
            className={classNames(cls.uiButton, mods, className)}
            viewTransition
          >
            {content}
          </Link>
        );
      }
    }

    return (
      <button
        type="button"
        disabled={disabled || isLoading}
        className={classNames(cls.uiButton, mods, className)}
        ref={buttonRef}
        style={isLoading ? { width: `${width}px`, height: `${height}px` } : {}}
        {...restProps}
      >
        {content}
      </button>
    );
  }
);
