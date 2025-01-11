import { CSSProperties, PropsWithChildren, useEffect, useRef } from "react";
import classNames from "classnames";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import cls from "./grid-with-inner-border.m.scss";
import { useWindowResize } from "@/shared/lib/hooks/use-window-resize";
import { removeBorderFromGrid } from "@/features/products-gallery/model/utils/remove-border-from-grid";

/**
 * Responsive grid component, that adds inner borders between grid items;
 */

interface GridWithInnerBorderProps extends PropsWithChildren {
  columnMinWidth: string;
  itemsLength: number;
  borderColor?: string;
  lineThickness?: string;
  withOuterBorder?: boolean;
  className?: string;
}

export const GridWithInnerBorder = (props: GridWithInnerBorderProps) => {
  const {
    columnMinWidth,
    borderColor = "#90908e",
    lineThickness = "1px",
    children,
    withOuterBorder,
    itemsLength,
    className,
    ...restProps
  } = props;

  const ref = useRef<HTMLUListElement>();

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
      className={classNames(
        cls.gridWithInnerBorder,
        { [cls.withOuterBorder]: withOuterBorder },
        className
      )}
      style={baseStyleVariables}
      ref={ref}
      {...restProps}
    >
      {children}
    </UiBox>
  );
};
