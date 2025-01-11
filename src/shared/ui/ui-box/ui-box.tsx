import classNames from "classnames";
import { forwardRef, PropsWithChildren } from "react";
import cls from "./ui-box.m.scss";

export type Element = "div" | "section" | "ul" | "li" | "footer";

export interface UiBoxProps extends PropsWithChildren {
  as?: Element;
  className?: string;
  max?: boolean;
  style?: React.CSSProperties;
}

export type Ref = HTMLDivElement | HTMLLegendElement;

export const UiBox = forwardRef(function UiBox(props: UiBoxProps, ref: any) {
  const { as: Tag = "div", children, className, max, ...restProps } = props;

  return (
    <Tag
      className={classNames(cls.uiBox, className, { [cls.max]: max })}
      ref={ref}
      {...restProps}
    >
      {children}
    </Tag>
  );
});
