import type { Meta } from "@storybook/react";
import { StorybookExample } from "../storybook-example/storybook-example";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { Skeleton as SkeletonComponent } from "./skeleton";

export default {
  component: SkeletonComponent,
  title: "shared/skeleton",
} as Meta<typeof SkeletonComponent>;

export const Skeleton = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <SkeletonNormal.render />
        <SkeletonCircle.render />
      </UiVStack>
    );
  },
};

const SkeletonNormal = {
  render() {
    return (
      <StorybookExample title="Skeleton full width">
        <SkeletonComponent width="100%" height={200} />
      </StorybookExample>
    );
  },
};

const SkeletonCircle = {
  render() {
    return (
      <StorybookExample title="Skeleton round">
        <SkeletonComponent width={100} height={100} border="50%" />
      </StorybookExample>
    );
  },
};
