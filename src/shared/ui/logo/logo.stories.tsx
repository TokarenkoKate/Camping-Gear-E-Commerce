import { StoryFn } from "@storybook/react";
import type { ArgTypes, Meta } from "@storybook/react";
import { StorybookExample } from "../storybook-example/storybook-example";
import { Logo as LogoComponent } from "./logo";

export default {
  component: LogoComponent,
  title: "shared/logo",
  argTypes: {
    size: {
      options: ["md", "lg"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof LogoComponent>;

export const Logo = {
  args: {
    size: "md",
  },
  render(args: Partial<ArgTypes<typeof LogoComponent>>) {
    return <LogoStory {...args} />;
  },
};

const LogoStory: StoryFn = (args) => {
  return (
    <StorybookExample title="Logo">
      <LogoComponent {...args} />
    </StorybookExample>
  );
};
