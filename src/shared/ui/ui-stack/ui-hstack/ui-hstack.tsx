import { forwardRef, PropsWithChildren } from "react";
import { UiFlex, UiFlexProps } from "../ui-flex/ui-flex";

type HStackProps = Omit<UiFlexProps, "direction">;

export const UiHStack = forwardRef<HTMLElement, PropsWithChildren<HStackProps>>(
  function UiHStack(props, ref) {
    return <UiFlex {...props} direction="row" ref={ref} />;
  }
);
