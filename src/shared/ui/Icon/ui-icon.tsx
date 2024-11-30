import { memo } from "react";
import cls from "./ui-icon.m.scss";
import classNames from "classnames";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const UiIcon = memo(function UiIcon(props: IconProps) {
  const { Svg, className, ...otherProps } = props;

  return <Svg className={classNames(cls.uiIcon, className)} {...otherProps} />;
});
