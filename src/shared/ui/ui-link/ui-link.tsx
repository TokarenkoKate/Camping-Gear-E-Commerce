import { memo, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import classNames from "classnames";
import cls from "./ui-link.m.scss";
import { UiIcon } from "../ui-icon/ui-icon";
import ArrowRight from "@/shared/assets/icons/arrow-right-20-20.svg";

interface UiLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  withArrow?: boolean;
}

export const UiLink = memo(function UiLink(props: UiLinkProps) {
  const { to, children, className, withArrow, ...otherProps } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.uiLink, className, {
        [cls.withArrow]: withArrow,
      })}
      {...otherProps}
    >
      {withArrow && (
        <UiIcon
          Svg={ArrowRight}
          width="10px"
          height="10px"
          className={cls.arrow}
        />
      )}
      {children}
    </Link>
  );
});
