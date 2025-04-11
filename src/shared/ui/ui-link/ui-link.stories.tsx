import type { Meta } from "@storybook/react";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { UiLink as UiLinkComponent } from "./ui-link";
import { StorybookExample } from "../storybook-example/storybook-example";

export default {
  component: UiLinkComponent,
} as Meta<typeof UiLinkComponent>;

export const UiLink = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <Link.render />
        <LinkWithArrow.render />
      </UiVStack>
    );
  },
};

const Link = {
  render() {
    return (
      <StorybookExample title="Default link">
        <UiLinkComponent to="#">Link</UiLinkComponent>
      </StorybookExample>
    );
  },
};
const LinkWithArrow = {
  render() {
    return (
      <StorybookExample title="Link with arrow on hover">
        <UiLinkComponent to="#" variant="withArrow">
          Link
        </UiLinkComponent>
      </StorybookExample>
    );
  },
};
