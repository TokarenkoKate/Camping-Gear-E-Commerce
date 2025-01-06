import type { Meta } from "@storybook/react";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { UiHStack } from "../ui-stack/ui-hstack/ui-hstack";
import { StorybookExample } from "../storybook-example/storybook-example";
import { ColorTag as ColorTagComponent } from "./color-tag";

export default {
  component: ColorTagComponent,
} as Meta<typeof ColorTagComponent>;

export const ColorTagVariants = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <ColorTags.render />
        <ColorTagsWithSelected.render />
      </UiVStack>
    );
  },
};

const ColorTags = {
  render() {
    return (
      <StorybookExample title="Color tags default">
        <UiHStack style={{ gap: "10px" }}>
          <ColorTagComponent color="#C7AC89" />
          <ColorTagComponent color="#E6C06E" />
          <ColorTagComponent color="#3C5D48" />
          <ColorTagComponent color="#553927" />
        </UiHStack>
      </StorybookExample>
    );
  },
};

const ColorTagsWithSelected = {
  render() {
    return (
      <StorybookExample title="Color tags with selected">
        <UiHStack style={{ gap: "10px" }}>
          <ColorTagComponent color="#C7AC89" selected />
          <ColorTagComponent color="#E6C06E" />
          <ColorTagComponent color="#3C5D48" />
          <ColorTagComponent color="#553927" />
        </UiHStack>
      </StorybookExample>
    );
  },
};
