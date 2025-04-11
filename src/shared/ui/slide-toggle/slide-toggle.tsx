import { PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SlideToggleProps {
  isOpen: boolean;
}

export const SlideToggle = ({
  isOpen,
  children,
}: PropsWithChildren<SlideToggleProps>) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0, type: "tween" }}
          transition={{ duration: 0.3, ease: "easeInOut", type: "tween" }}
          style={{ width: "100%" } as React.CSSProperties}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
