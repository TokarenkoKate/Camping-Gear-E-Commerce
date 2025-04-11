import { StoryFn } from "@storybook/react";
import type { ArgTypes, Meta } from "@storybook/react";
import { StorybookExample } from "../storybook-example/storybook-example";
import { HeroTitle as HeroTitleComponent } from "./hero-title";

export default {
  component: HeroTitleComponent,
  title: "shared/hero-title",
  argTypes: {
    inverted: { control: "boolean" },
  },
} as Meta<typeof HeroTitleComponent>;

export const HeroTitle = {
  args: {
    inverted: false,
  },
  render(args: Partial<ArgTypes<typeof HeroTitleComponent>>) {
    return <HeroTitleStory {...args} />;
  },
};

const HeroTitleStory: StoryFn = (args) => {
  return (
    <StorybookExample title="Hero title" inverted={args?.inverted}>
      <HeroTitleComponent {...args} />
    </StorybookExample>
  );
};
