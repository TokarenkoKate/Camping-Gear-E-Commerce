import type { Meta } from "@storybook/react";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { UiHStack } from "../ui-stack/ui-hstack/ui-hstack";
import { StorybookExample } from "../storybook-example/storybook-example";
import { SocialLink as SocialLinkComponent } from "./social-link";
import { socialLinks } from "@/widgets/footer/model/footer";

export default {
  component: SocialLinkComponent,
  title: "shared/social-link",
} as Meta<typeof SocialLinkComponent>;

export const SocialLink = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <SocialLinkStory.render />
      </UiVStack>
    );
  },
};

const SocialLinkStory = {
  render() {
    return (
      <StorybookExample title="Social links">
        <UiHStack style={{ gap: "10px" }}>
          {socialLinks.map((socialLink) => (
            <SocialLinkComponent
              to={socialLink.to}
              Svg={socialLink.Svg}
              key={socialLink.to}
            />
          ))}
        </UiHStack>
      </StorybookExample>
    );
  },
};
