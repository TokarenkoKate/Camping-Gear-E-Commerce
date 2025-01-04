import classNames from "classnames";
import { PropsWithChildren } from "react";
import cls from "./ui-box.m.scss";

export interface UiBoxProps extends PropsWithChildren {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  max?: boolean;
  style?: React.CSSProperties;
}

export const UiBox = (props: UiBoxProps) => {
  const { as: Tag = "div", children, className, max, ...restProps } = props;

  return (
    <Tag
      className={classNames(cls.uiBox, className, { [cls.max]: max })}
      {...restProps}
    >
      {children}
    </Tag>
  );
};
