import { ElementType, forwardRef, PropsWithChildren } from "react";
import classNames from "classnames";
import cls from "./ui-box.m.scss";

export interface UiBoxProps extends PropsWithChildren {
  as?: ElementType;
  className?: string;
  max?: boolean;
  style?: React.CSSProperties;
}

export const UiBox = forwardRef<HTMLElement, UiBoxProps>(
  function UiBox(props, ref) {
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
  }
);
