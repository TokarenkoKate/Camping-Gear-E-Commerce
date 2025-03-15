import { PropsWithChildren, Suspense } from "react";
import { motion } from "framer-motion";
import { To, useViewTransitionState } from "react-router-dom";
import { AppRouteType } from "../../model/types/router";

interface PageWrapperProps {
  path: AppRouteType["path"];
}

export const PageWrapper = ({
  path,
  children,
}: PropsWithChildren<PageWrapperProps>) => {
  const isViewTransitioning = useViewTransitionState(path as To);

  return (
    <Suspense fallback={<></>}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: isViewTransitioning ? 0.5 : 0 }}
      >
        {children}
      </motion.div>
    </Suspense>
  );
};
