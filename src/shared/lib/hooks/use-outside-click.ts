import { useEffect, RefObject } from "react";

interface UseOutsideClickProps {
  /**
   * The reference to a DOM element.
   */
  ref: RefObject<HTMLElement>;
  /**
   * The reference to a DOM element, that should be excluded from outside click check
   * such as a trigger button.
   */
  excludeRef?: RefObject<HTMLElement>;
  /**
   * Function invoked when a click is triggered outside the referenced element.
   */
  handler?: (e: Event) => void;
}

export const useOutsideClick = ({
  ref,
  excludeRef,
  handler,
}: UseOutsideClickProps) => {
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    const isOutsideRefClick =
      ref.current && !ref.current.contains(event.target as Node);

    const isWithinExcludeClick =
      excludeRef?.current && excludeRef?.current.contains(event.target as Node);

    if (
      (isOutsideRefClick && !excludeRef) ||
      (isOutsideRefClick && excludeRef && !isWithinExcludeClick)
    ) {
      handler?.(event);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  });
};
