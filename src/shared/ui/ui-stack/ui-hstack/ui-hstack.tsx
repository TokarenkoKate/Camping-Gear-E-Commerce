import { FC, PropsWithChildren } from "react";
import { UiFlex, UiFlexProps } from "@/shared/ui/ui-stack/ui-flex/ui-flex";

type HStackProps = Omit<UiFlexProps, "direction">;

export const UiHStack: FC<PropsWithChildren<HStackProps>> = (props) => (
  <UiFlex {...props} direction="row" />
);
