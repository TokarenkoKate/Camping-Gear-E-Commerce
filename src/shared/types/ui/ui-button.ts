import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export type UiButtonVariant =
  | "background"
  | "clear"
  | "outlined"
  | "outlinedInverted"
  | "plain"
  | "plainWithArrow";

export type UiButtonSize = "small" | "medium";

type InternalNavigationProps = Partial<Pick<LinkProps, "to">>;
type ExternalNavigationProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel"
>;

export interface UiButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    InternalNavigationProps,
    ExternalNavigationProps {
  children?: ReactNode | string;
  variant?: UiButtonVariant;
  round?: boolean;
  size?: UiButtonSize;
  leftIconSvg?: React.VFC<React.SVGProps<SVGSVGElement>>;
  rightIconSvg?: React.VFC<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  asLink?: boolean;
  max?: boolean;
  loading?: boolean;
  className?: string;
}
