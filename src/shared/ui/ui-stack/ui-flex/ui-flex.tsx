import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import cls from "./ui-flex.m.scss";
import classNames from "classnames";

// TODO: add gap variants

export type UiFlexJustify = "start" | "end" | "center" | "between";
export type UiFlexAlign = "start" | "end" | "center" | "normal";
export type UiFlexDirection = "row" | "column";

const justifyClasses: Record<UiFlexJustify, string> = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  center: cls.justifyCenter,
  between: cls.justifyBetween,
};

const alignClasses: Record<UiFlexAlign, string> = {
  start: cls.alignStart,
  end: cls.alignEnd,
  center: cls.alignCenter,
  normal: cls.alignNormal,
};

const directionClasses: Record<UiFlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface UiFlexProps extends DivProps, PropsWithChildren {
  className?: string;
  justify?: UiFlexJustify;
  align?: UiFlexAlign;
  direction: UiFlexDirection;
  max?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export const UiFlex = (props: UiFlexProps) => {
  const {
    children,
    justify = "start",
    align = "start",
    direction = "row",
    className,
    ...restProps
  } = props;

  const classes = [
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    className,
  ];

  return (
    <UiBox className={classNames(cls.uiFlex, classes)} {...restProps}>
      {children}
    </UiBox>
  );
};
