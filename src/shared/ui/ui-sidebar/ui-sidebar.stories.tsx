import type { Meta } from "@storybook/react";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { UiSidebar as UiSidebarComponent } from "./ui-sidebar";
import { StorybookExample } from "../storybook-example/storybook-example";
import { useDisclosure } from "@/shared/lib/hooks/use-disclosure";
import { UiButton } from "../ui-button/ui-button";
import { UiText } from "../ui-text/ui-text";

export default {
  component: UiSidebarComponent,
} as Meta<typeof UiSidebarComponent>;

export const UiSidebar = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <UiSidebarStory.render />
      </UiVStack>
    );
  },
};

const UiSidebarStory = {
  render() {
    return (
      <StorybookExample title="Ui sidebar">
        <Sidebar />
      </StorybookExample>
    );
  },
};

const Sidebar = () => {
  const { isOpen, toggleOpen, onClose } = useDisclosure();

  return (
    <UiVStack style={{ gap: "20px" }}>
      <UiButton onClick={toggleOpen} max variant="outlined">
        Toggle open sidebar component
      </UiButton>
      <UiSidebarComponent
        isOpen={isOpen}
        onClose={onClose}
        renderChildren={() => <UiText>Sidebar content</UiText>}
      />
    </UiVStack>
  );
};
