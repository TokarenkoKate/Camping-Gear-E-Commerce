import type { Meta } from "@storybook/react";
import { StorybookExample } from "../storybook-example/storybook-example";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { CounterButton as CounterButtonComponent } from "./counter-button";

export default {
  component: CounterButtonComponent,
} as Meta<typeof CounterButtonComponent>;

export const CounterButton = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <CounterButtonStory.render />
      </UiVStack>
    );
  },
};

const CounterButtonStory = {
  render() {
    return (
      <StorybookExample title="Counter button">
        <CounterButtonComponent
          count={1}
          onIncrement={() => {}}
          onDecrement={() => {}}
        />
      </StorybookExample>
    );
  },
};
