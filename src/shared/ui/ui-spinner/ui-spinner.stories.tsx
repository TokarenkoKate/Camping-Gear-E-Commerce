import type { Meta } from "@storybook/react";
import { StorybookExample } from "../storybook-example/storybook-example";
import { UiSpinner } from "./ui-spinner";
import { UiHStack } from "../ui-stack/ui-hstack/ui-hstack";

export default {
  component: UiSpinner,
} as Meta<typeof UiSpinner>;

export const All = {
  render() {
    return (
      <UiHStack style={{ gap: "16px" }} max>
        <UiSpinnerDefaultMode.render />
        <UiSpinnerInvertedMode.render />
      </UiHStack>
    );
  },
};

export const UiSpinnerDefaultMode = {
  render() {
    return (
      <StorybookExample title="UiSpinner default mode" inverted>
        <UiHStack style={{ gap: "20px" }} align="center">
          <UiSpinner size="large" />
          <UiSpinner size="medium" />
          <UiSpinner size="small" />
        </UiHStack>
      </StorybookExample>
    );
  },
};

export const UiSpinnerInvertedMode = {
  render() {
    return (
      <StorybookExample title="UiSpinner inverted mode">
        <UiHStack style={{ gap: "20px" }} align="center">
          <UiSpinner size="large" mode="inverted" />
          <UiSpinner size="medium" mode="inverted" />
          <UiSpinner size="small" mode="inverted" />
        </UiHStack>
      </StorybookExample>
    );
  },
};
