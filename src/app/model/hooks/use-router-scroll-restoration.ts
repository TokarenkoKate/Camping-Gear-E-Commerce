import { useRef } from "react";
import { useElementScrollRestoration } from "@/shared/lib/hooks/use-element-scroll-restoration";

export const useRouterScrollRestoration = () => {
  const scrollRestorationRef = useRef<HTMLElement>(null);
  useElementScrollRestoration(scrollRestorationRef);

  return scrollRestorationRef;
};
