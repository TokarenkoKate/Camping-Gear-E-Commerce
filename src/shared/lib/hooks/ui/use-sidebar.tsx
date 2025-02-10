import { useState, useRef, useCallback, useEffect } from "react";

type UseModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
  animationDelay: number;
};

export const useUiSidebar = ({
  isOpen,
  onClose,
  animationDelay,
}: UseModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounting, setIsMounting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  // useEffect for sidebar lazy loading;
  // do not mount Sidebar in DOM, before it is opened,
  // and destroy on closing;
  useEffect(() => {
    if (isOpen) {
      setIsMounting(true);
    }
    return () => {
      setIsMounting(false);
    };
  }, [isOpen]);

  return { close, isClosing, isMounting };
};
