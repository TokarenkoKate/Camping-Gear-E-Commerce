import type { Meta } from "@storybook/react";
import { useState } from "react";
import { StorybookExample } from "../storybook-example/storybook-example";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { UiButtonCheckboxGroup as UiButtonCheckboxGroupComponent } from "./ui-button-checkbox-group";
import { UiCheckboxValue } from "@/shared/types/ui/ui-checkbox";

export default {
  component: UiButtonCheckboxGroupComponent,
  title: "Shared/ui/form/ui-button-checkbox-group",
} as Meta<typeof UiButtonCheckboxGroupComponent>;

export const UiButtonCheckboxGroup = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <UiButtonCheckboxGroupStory />
      </UiVStack>
    );
  },
};

const options = [
  { value: "Lettuce", label: "Lettuce" },
  { value: "Tomato", label: "Tomato" },
  { value: "Mustard", label: "Mustard" },
];

const UiButtonCheckboxGroupStory = () => {
  const [values, setValues] = useState<Array<UiCheckboxValue>>([]);
  return (
    <StorybookExample title="Ui button checkbox group">
      <UiButtonCheckboxGroupComponent
        options={options}
        name="Fruits"
        description="What is your favorite fruit?"
        values={values}
        onChange={(
          event: React.ChangeEvent<HTMLInputElement>,
          values: Array<UiCheckboxValue>
        ) => {
          setValues(values);
        }}
      />
    </StorybookExample>
  );
};
