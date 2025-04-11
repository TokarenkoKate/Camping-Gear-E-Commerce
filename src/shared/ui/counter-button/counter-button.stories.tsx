import { useState } from "react";
import type { ArgTypes, Meta } from "@storybook/react";
import { StorybookExample } from "../storybook-example/storybook-example";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { CounterButton as CounterButtonComponent } from "./counter-button";

export default {
  component: CounterButtonComponent,
  title: "shared/counter-button",
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof CounterButtonComponent>;

export const CounterButton = {
  args: {
    size: "small",
  },
  render(args: Partial<ArgTypes<typeof CounterButtonComponent>>) {
    console.log(args);
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <CounterButtonStory {...args} />
      </UiVStack>
    );
  },
};

const CounterButtonStory = (
  args: Partial<ArgTypes<typeof CounterButtonComponent>>
) => {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => setCounter((prev) => ++prev);
  const onDecrement = () => setCounter((prev) => --prev);

  return (
    <StorybookExample title="Counter button">
      <CounterButtonComponent
        count={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        {...args}
      />
    </StorybookExample>
  );
};
