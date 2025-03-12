import { CSSProperties } from "react";
import classNames from "classnames";
import cls from "./skeleton.m.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
  const { className, height, width, border } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={classNames(cls.skeleton, className)} style={styles} />;
};
