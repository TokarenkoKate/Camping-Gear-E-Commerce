import { ReactNode } from "react";
import classNames from "classnames";
import {
  UiTextElement,
  UiTextVariant,
  UiTextTone,
  UiTextAlign,
  UiTextFontWeight,
} from "../../types/ui/ui-text";
import cls from "./ui-text.m.scss";

export interface UiTextProps {
  children: ReactNode;
  as?: UiTextElement;
  variant?: UiTextVariant;
  tone?: UiTextTone;
  align?: UiTextAlign;
  fontWeight?: UiTextFontWeight;
  truncate?: boolean;
  className?: string;
}

export const UiText = (props: UiTextProps) => {
  const {
    children,
    as = "p",
    variant = "bodyMd",
    tone,
    align,
    fontWeight,
    truncate = false,
    className,
    ...restProps
  } = props;

  const classes = classNames(
    cls.uiText,
    variant && cls[variant],
    tone && cls[tone],
    align && cls[align],
    fontWeight && cls[fontWeight],
    truncate && cls.truncate,
    className
  );

  const UiTextComponent = as;

  return (
    <UiTextComponent className={classes} {...restProps}>
      {children}
    </UiTextComponent>
  );
};
