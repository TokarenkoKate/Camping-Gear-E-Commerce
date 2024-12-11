import { FC, PropsWithChildren } from "react";
import { UiFlex, UiFlexProps } from "@/shared/ui/ui-stack/ui-flex/ui-flex";

type HStackProps = Omit<UiFlexProps, "direction">;

export const UiVStack: FC<PropsWithChildren<HStackProps>> = (props) => (
  <UiFlex {...props} direction="column" />
);
