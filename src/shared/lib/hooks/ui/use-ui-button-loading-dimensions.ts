import { useState, useRef, useEffect, ReactNode } from "react";

/* Hook is used to capture the dimensions of the button before the loading happens
 * so it doesn’t change size.
 */
export const useUiButtonLoadingDimensions = (children: ReactNode) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current && buttonRef.current.getBoundingClientRect().width) {
      setWidth(buttonRef.current.getBoundingClientRect().width);
    }
    if (buttonRef.current && buttonRef.current.getBoundingClientRect().height) {
      setHeight(buttonRef.current.getBoundingClientRect().height);
    }
  }, [children]);

  return { width, height, buttonRef };
};
