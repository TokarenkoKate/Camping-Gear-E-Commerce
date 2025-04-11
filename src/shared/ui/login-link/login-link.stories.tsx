import { StoryFn } from "@storybook/react";
import type { Meta } from "@storybook/react";
import { StorybookExample } from "../storybook-example/storybook-example";
import { LoginLink as LoginLinkComponent } from "./login-link";

export default {
  component: LoginLinkComponent,
  title: "shared/login-link",
} as Meta<typeof LoginLinkComponent>;

export const LoginLink = {
  render() {
    return <LoginLinkStory />;
  },
};

const LoginLinkStory: StoryFn = () => {
  return (
    <StorybookExample title="Login link">
      <LoginLinkComponent />
    </StorybookExample>
  );
};
