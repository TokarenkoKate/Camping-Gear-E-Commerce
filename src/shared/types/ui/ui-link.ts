import { AnchorHTMLAttributes, ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export type UiLinkVariant = "default" | "withArrow";
export type UiLinkTone = "base" | "accent";

type InternalNavigationProps = LinkProps;
type ExternalNavigationProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export interface UiLinkProps
  extends InternalNavigationProps,
    ExternalNavigationProps {
  className?: string;
  children?: ReactNode;
  tone?: UiLinkTone;
  variant?: UiLinkVariant;
}
