import classNames from "classnames";
import cls from "./ui-overlay.m.scss";

interface UiOverlayProps {
  className?: string;
}

export const UiOverlay = ({ className }: UiOverlayProps) => {
  return <div className={classNames(cls.overlay, className)} />;
};
