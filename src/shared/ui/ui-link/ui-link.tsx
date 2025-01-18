import { memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { ClassnamesMods } from "@/shared/types/classnames";
import { UiLinkProps } from "@/shared/types/ui/ui-link";
import { UiArrowIcon } from "../ui-arrow-icon/ui-arrow-icon";
import cls from "./ui-link.m.scss";

export const UiLink = memo(function UiLink(props: UiLinkProps) {
  const {
    to,
    href,
    target = "_blank",
    rel = "noopener noreferrer",
    children,
    className,
    variant = "default",
    ...otherProps
  } = props;

  const withArrow = variant === "withArrow";
  const mods: ClassnamesMods = {
    [cls[variant]]: true,
  };

  const content = (
    <>
      {withArrow && <UiArrowIcon className={cls.arrow} />}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classNames(cls.uiLink, className, mods)}
        {...otherProps}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={classNames(cls.uiLink, className, mods)}
      {...otherProps}
    >
      {content}
    </Link>
  );
});
