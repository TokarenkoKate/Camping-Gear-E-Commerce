import classNames from "classnames";
import cls from "./ui-overlay.m.scss";

interface UiOverlayProps {
  className?: string;
  onClick?: VoidFunction;
}

export const UiOverlay = ({ className, onClick }: UiOverlayProps) => {
  return (
    <div className={classNames(cls.overlay, className)} onClick={onClick} />
  );
};
