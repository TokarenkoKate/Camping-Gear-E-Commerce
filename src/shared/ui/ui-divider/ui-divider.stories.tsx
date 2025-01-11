import type { Meta } from "@storybook/react";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { UiHStack } from "../ui-stack/ui-hstack/ui-hstack";
import { StorybookExample } from "../storybook-example/storybook-example";
import { UiDivider as UiDividerComponent } from "./ui-divider";

export default {
  component: UiDividerComponent,
} as Meta<typeof UiDividerComponent>;

export const UiDividerVariants = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <Horizontal.render />
        <Vertical.render />
      </UiVStack>
    );
  },
};

const Horizontal = {
  render() {
    return (
      <StorybookExample title="Color tags default">
        <UiVStack style={{ gap: "10px" }}>
          <div
            style={{ width: "50px", height: "50px", background: "#5393C9" }}
          />
          <UiDividerComponent orientation="horizontal" />
          <div
            style={{ width: "50px", height: "50px", background: "#5393C9" }}
          />
        </UiVStack>
      </StorybookExample>
    );
  },
};

const Vertical = {
  render() {
    return (
      <StorybookExample title="Color tags with selected">
        <UiHStack style={{ gap: "10px" }}>
          <div
            style={{ width: "50px", height: "50px", background: "#5393C9" }}
          />
          <UiDividerComponent orientation="vertical" />
          <div
            style={{ width: "50px", height: "50px", background: "#5393C9" }}
          />
        </UiHStack>
      </StorybookExample>
    );
  },
};
