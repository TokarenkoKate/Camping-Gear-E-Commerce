import type { Meta } from "@storybook/react";
import { StorybookExample } from "../../storybook-example/storybook-example";
import { UiVStack } from "../../ui-stack/ui-vstack/ui-vstack";
import { UiSelect as UiSelectComponent } from "./ui-select";

export default {
  component: UiSelectComponent,
  title: "Shared/ui/form/ui-select",
} as Meta<typeof UiSelectComponent>;

export const UiSelect = {
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
  { value: "Lettuce1", label: "Lettuce1" },
  { value: "Tomato1", label: "Tomato1" },
  { value: "Mustard1", label: "Mustard1" },
  { value: "Lettuce2", label: "Lettuce2" },
  { value: "Tomato2", label: "Tomato2" },
  { value: "Mustard2", label: "Mustard2" },
  { value: "Lettuce12", label: "Lettuce12" },
  { value: "Tomato12", label: "Tomato12" },
  { value: "Mustard12", label: "Mustard12" },
  { value: "Lettuce22", label: "Lettuce22" },
  { value: "Tomato22", label: "Tomato22" },
  { value: "Mustard22", label: "Mustard22" },
];

const Default = {
  render() {
    return (
      <StorybookExample title="Ui Select form field" transparent>
        <UiSelectComponent options={options} ariaLabel="fruit" />
      </StorybookExample>
    );
  },
};
