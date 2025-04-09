import { CSSProperties, ReactNode } from "react";
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
  className?: string;
  lineClamp?: number;
}

export const UiText = (props: UiTextProps) => {
  const {
    children,
    as = "p",
    variant = "bodyMd",
    tone,
    align,
    fontWeight,
    lineClamp,
    className,
    ...restProps
  } = props;

  const classes = classNames(
    cls.uiText,
    variant && cls[variant],
    tone && cls[tone],
    align && cls[align],
    fontWeight && cls[fontWeight],
    lineClamp && cls.truncate,
    className
  );

  const styleVariables: CSSProperties = {
    "--no-of-lines": lineClamp,
  };

  const UiTextComponent = as;

  return (
    <UiTextComponent className={classes} style={styleVariables} {...restProps}>
      {children}
    </UiTextComponent>
  );
};
