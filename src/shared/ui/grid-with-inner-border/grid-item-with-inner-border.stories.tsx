import type { Meta } from "@storybook/react";
import { StorybookExample } from "../storybook-example/storybook-example";
import { UiHStack } from "../ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { GridWithInnerBorder as GridWithInnerBorderComponent } from "./grid-with-inner-border";

export default {
  component: GridWithInnerBorderComponent,
  title: "Shared/GridWithInnerBorder",
} as Meta<typeof GridWithInnerBorderComponent>;

export const GridWithInnerBorderVariants = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <GridWithInnerBorder.render />
      </UiVStack>
    );
  },
};

const mockItems = Array.from(Array(10).keys());

const GridWithInnerBorder = {
  render() {
    return (
      <StorybookExample title="Color tags default">
        <UiHStack style={{ gap: "10px" }}>
          <GridWithInnerBorderComponent
            columnMinWidth="100px"
            borderColor="#337ab7"
            itemsLength={mockItems.length}
          >
            {mockItems.map((item) => (
              <UiHStack
                key={item}
                style={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "#f0f0f0",
                }}
                align="center"
                justify="center"
              >
                {item}
              </UiHStack>
            ))}
          </GridWithInnerBorderComponent>
        </UiHStack>
      </StorybookExample>
    );
  },
};
