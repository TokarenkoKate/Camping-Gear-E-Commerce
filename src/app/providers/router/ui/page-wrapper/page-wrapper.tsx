import { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<></>}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </Suspense>
  );
};
