import { SPACE } from "@/shared/const/common-string";

/**
 * Helper removes right borders from the last column and
 * bottom borders from the last row;
 */
export const removeBorderFromGrid = ({
  grid,
  itemsLength,
  borderColor,
}: {
  grid: HTMLUListElement | undefined;
  itemsLength: number;
  borderColor: string;
}) => {
  if (!grid) {
    console.error("Cannot remove border from grid.");
    return;
  }

  const computed = window.getComputedStyle(grid);
  const childNodes = grid.childNodes;

  const columnsNumber = computed.gridTemplateColumns.split(SPACE)?.length || 1;
  const rowsNumber = computed.gridTemplateRows.split(SPACE)?.length || 1;

  const maxItemsCount = columnsNumber * rowsNumber;
  const lastRowStartIndex = maxItemsCount - columnsNumber;

  for (let i = 0; i < itemsLength; i++) {
    if (i >= lastRowStartIndex && i <= itemsLength) {
      /**
       * Set last column's border color to transparent;
       */
      (childNodes[i] as HTMLElement).style.setProperty(
        "--column-line-background",
        "transparent"
      );
    } else {
      (childNodes[i] as HTMLElement).style.setProperty(
        "--column-line-background",
        borderColor
      );
    }

    /**
     * Set last row's border color to transparent;
     */
    if ((i + 1) % columnsNumber === 0) {
      (childNodes[i] as HTMLElement).style.setProperty(
        "--row-line-background",
        "transparent"
      );
    } else {
      (childNodes[i] as HTMLElement).style.setProperty(
        "--row-line-background",
        borderColor
      );
    }
  }
};
