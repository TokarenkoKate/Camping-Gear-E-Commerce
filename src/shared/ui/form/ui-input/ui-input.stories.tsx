import type { Meta } from "@storybook/react";
import { StorybookExample } from "../../storybook-example/storybook-example";
import { UiVStack } from "../../ui-stack/ui-vstack/ui-vstack";
import { UiInput as UiInputComponent } from "./ui-input";

export default {
  component: UiInputComponent,
  title: "Shared/ui/form/ui-input",
} as Meta<typeof UiInputComponent>;

export const UiInput = {
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
      <StorybookExample title="Input form field" transparent>
        <UiInputComponent placeholder="Full Name" />
      </StorybookExample>
    );
  },
};
