import { useDisclosure } from "@/shared/lib/hooks/use-disclosure";
import type { Meta } from "@storybook/react";
import { StoryFn } from "@storybook/react";
import { StorybookExample } from "../storybook-example/storybook-example";
import { UiBox } from "../ui-box/ui-box";
import { UiButton } from "../ui-button/ui-button";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { SlideToggle as SlideToggleComponent } from "./slide-toggle";

export default {
  component: SlideToggleComponent,
  title: "shared/slide-toggle",
} as Meta<typeof SlideToggleComponent>;

export const SlideToggle = {
  render() {
    return <SlideToggleStory />;
  },
};

const SlideToggleStory: StoryFn = () => {
  const { isOpen, toggleOpen } = useDisclosure();

  return (
    <StorybookExample title="Payment chip">
      <UiVStack style={{ gap: "20px" }}>
        <UiButton onClick={toggleOpen} max variant="outlined">
          Toggle open slide component
        </UiButton>
        <SlideToggleComponent isOpen={isOpen}>
          <UiBox
            style={{ width: "100%", height: "200px", background: "black" }}
          >
            Slide component
          </UiBox>
        </SlideToggleComponent>
      </UiVStack>
    </StorybookExample>
  );
};
