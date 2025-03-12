import { UiFlex, UiFlexProps } from "../ui-flex/ui-flex";
import { forwardRef } from "react";

type VStackProps = Omit<UiFlexProps, "direction">;

export const UiVStack = forwardRef<HTMLElement, VStackProps>(
  function UiHStack(props, ref) {
    return <UiFlex {...props} direction="column" ref={ref} />;
  }
);
