import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { UiButton, UiButtonVariant } from "./ui-button";

const meta = {
  title: "shared/UiButton",
  component: UiButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof fn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearButton: Story = {
  args: {
    variant: UiButtonVariant.CLEAR,
    children: "CLICK",
  },
};
