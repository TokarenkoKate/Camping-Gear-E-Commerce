import { useState } from "react";
import type { Meta } from "@storybook/react";
import { StorybookExample } from "../../storybook-example/storybook-example";
import { UiHStack } from "../../ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "../../ui-stack/ui-vstack/ui-vstack";
import { ColorTag as ColorTagComponent } from "./color-tag";

export default {
  title: "shared/color-tag",
  component: ColorTagComponent,
} as Meta<typeof ColorTagComponent>;

export const ColorTag = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <ColorTags />
      </UiVStack>
    );
  },
};

const ColorTags = () => {
  const [selected, setSelected] = useState<string>();
  const onSelect = (color: string) => {
    setSelected(color);
  };

  return (
    <StorybookExample title="A list of color tags">
      <UiHStack style={{ gap: "10px" }}>
        <ColorTagComponent
          color="#C7AC89"
          selected={selected === "#C7AC89"}
          onToggleColor={onSelect}
        />
        <ColorTagComponent
          color="#E6C06E"
          selected={selected === "#E6C06E"}
          onToggleColor={onSelect}
        />
        <ColorTagComponent
          color="#3C5D48"
          selected={selected === "#3C5D48"}
          onToggleColor={onSelect}
        />
        <ColorTagComponent
          color="#553927"
          selected={selected === "#553927"}
          onToggleColor={onSelect}
        />
      </UiHStack>
    </StorybookExample>
  );
};
