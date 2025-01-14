import { AnchorHTMLAttributes, ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export type UiLinkVariant = "default" | "withArrow";

type InternalNavigationProps = LinkProps;
type ExternalNavigationProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export interface UiLinkProps
  extends InternalNavigationProps,
    ExternalNavigationProps {
  className?: string;
  children?: ReactNode;
  variant?: UiLinkVariant;
}
