import { useState, useEffect } from "react";

/**
 * Hook is used to stay in the "isLoading state" a bit longer to avoid loading flashes
 * if the loading state is too short.
 */
export const useUiButtonLoadingState = (loading?: boolean) => {
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    } else {
      const timeout = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return isLoading;
};
