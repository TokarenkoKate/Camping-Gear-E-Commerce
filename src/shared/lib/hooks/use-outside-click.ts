import { useEffect, RefObject } from "react";

interface UseOutsideClickProps {
  /**
   * The reference to a DOM element.
   */
  ref: RefObject<HTMLElement>;
  /**
   * Function invoked when a click is triggered outside the referenced element.
   */
  handler?: (e: Event) => void;
}

export const useOutsideClick = ({ ref, handler }: UseOutsideClickProps) => {
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
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
