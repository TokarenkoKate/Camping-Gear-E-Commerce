import { useEffect } from "react";
import { THROTTLE_TIMEOUT_MS } from "@/shared/const/general";

export const useWindowResize = (props: {
  callback: VoidFunction;
  timeout?: number;
}) => {
  const { callback, timeout = THROTTLE_TIMEOUT_MS } = props;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    const resizeListener = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, timeout);
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [callback, timeout]);
};
