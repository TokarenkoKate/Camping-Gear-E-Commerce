export const getUiSelectListboxPosition = (
  parentRect: DOMRect | undefined,
  portalRect: DOMRect | undefined
) => {
  if (!parentRect || !portalRect) {
    return {
      top: 0,
      left: 0,
    };
  }
  const top = parentRect?.top + parentRect?.height + window.scrollY;
  const left =
    window.scrollX + parentRect?.left - portalRect?.width + parentRect?.width;

  return {
    top,
    left,
  };
};
