import { useState, useEffect } from "react";
import { DELAYED_LOADING_TIMEOUT } from "@/shared/const/general";

export const useDelayedLoading = (
  isLoading: boolean,
  minDelay = DELAYED_LOADING_TIMEOUT
) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setShowLoading(true);
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, minDelay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShowLoading(false), minDelay);
      return () => clearTimeout(timer);
    }
  }, [isLoading, minDelay]);

  return isLoading || showLoading;
};
