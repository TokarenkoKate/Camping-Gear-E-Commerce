import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { UiLink } from "./ui-link";

const meta = {
  title: "shared/UiLink",
  component: UiLink,
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

export const Default: Story = {
  args: {
    to: "#",
    children: "default-link",
  },
};

export const WithArrow: Story = {
  args: {
    to: "#",
    withArrow: true,
    children: "with-arrow-link",
  },
};
