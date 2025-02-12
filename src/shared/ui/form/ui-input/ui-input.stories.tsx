import type { Meta } from "@storybook/react";
import { StorybookExample } from "../../storybook-example/storybook-example";
import { UiVStack } from "../../ui-stack/ui-vstack/ui-vstack";
import { UiInput as UiInputComponent } from "./ui-input";

export default {
  component: UiInputComponent,
  title: "Shared/ui/ui-input",
} as Meta<typeof UiInputComponent>;

export const UiInputVariants = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <Default.render />
      </UiVStack>
    );
  },
};

const Default = {
  render() {
    return (
      <StorybookExample title="Default input" transparent>
        <UiInputComponent placeholder="Full Name" />
      </StorybookExample>
    );
  },
};
