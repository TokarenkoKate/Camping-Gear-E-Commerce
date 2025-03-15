import {
  CSSProperties,
  forwardRef,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import classNames from "classnames";
import { UiBox } from "../ui-box/ui-box";
import cls from "./grid-with-inner-border.m.scss";
import { useWindowResize } from "@/shared/lib/hooks/use-window-resize";
import { removeBorderFromGrid } from "@/features/products-gallery/model/utils/remove-border-from-grid";

/**
 * Responsive grid component, that adds inner borders between grid items;
 */

interface GridWithInnerBorderProps extends PropsWithChildren {
  itemsLength: number;
  columnMinWidth?: string;
  borderColor?: string;
  lineThickness?: string;
  className?: string;
}
export type GridRef = HTMLElement | undefined;

export const GridWithInnerBorder = forwardRef<
  HTMLElement,
  GridWithInnerBorderProps
>(function GridWithInnerBorder(props, forwardRef) {
  const {
    columnMinWidth = "350px",
    borderColor = "#90908e",
    lineThickness = "1px",
    children,
    itemsLength,
    className,
    ...restProps
  } = props;

  const ref = useRef<HTMLElement>(null);
  useImperativeHandle(forwardRef, () => ref.current!);

  const baseStyleVariables: CSSProperties = {
    "--border-color": borderColor,
    "--line-thickness": lineThickness,
    "--column-min-width": columnMinWidth,
  };

  useWindowResize({
    callback: () =>
      removeBorderFromGrid({ grid: ref.current, itemsLength, borderColor }),
    timeout: 10,
  });

  useEffect(() => {
    removeBorderFromGrid({ grid: ref.current, itemsLength, borderColor });
  }, []);

  return (
    <UiBox
      className={classNames(cls.gridWithInnerBorder, className)}
      style={baseStyleVariables}
      ref={ref}
      {...restProps}
    >
      {children}
    </UiBox>
  );
});
