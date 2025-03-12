import type { Meta } from "@storybook/react";
import { StorybookExample } from "../../../storybook-example/storybook-example";
import { UiVStack } from "../../../ui-stack/ui-vstack/ui-vstack";
import { UiRadioButtonGroup as UiRadioButtonGroupComponent } from "./ui-radio-button-group";

export default {
  component: UiRadioButtonGroupComponent,
  title: "Shared/ui/ui-radio-button-group",
} as Meta<typeof UiRadioButtonGroupComponent>;

export const UiRadioButtonGroupVariants = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <Default.render />
      </UiVStack>
    );
  },
};

const options = [
  { value: "Lettuce", label: "Lettuce" },
  { value: "Tomato", label: "Tomato" },
  { value: "Mustard", label: "Mustard" },
];

const Default = {
  render() {
    return (
      <StorybookExample title="Ui Radio button group" transparent>
        <UiRadioButtonGroupComponent options={options} ariaLabelledBy="fruit" />
      </StorybookExample>
    );
  },
};
