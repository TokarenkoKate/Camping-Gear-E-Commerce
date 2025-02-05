import type { Meta } from "@storybook/react";
import { UiButton } from "./ui-button";
import ArrowExternalRight from "@/shared/assets/icons/arrow-external-right-20-20.svg";
import { StorybookExample } from "../storybook-example/storybook-example";
import { UiHStack } from "../ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { UiButtonSize, UiButtonVariant } from "@/shared/types/ui/ui-button";

export default {
  component: UiButton,
} as Meta<typeof UiButton>;

export const All = {
  render() {
    return (
      <UiVStack style={{ gap: "16px" }}>
        <BackgroundSmall.render />
        <OutlinedSmall.render />
        <OutlinedInvertedSmall.render />
        <ClearSmall.render />
        <PlainSmall.render />
        <PlainWithArrowSmall.render />
        <BackgroundMedium.render />
        <OutlinedMedium.render />
        <OutlinedInvertedMedium.render />
        <ClearMedium.render />
      </UiVStack>
    );
  },
};

const renderButtonExamples = (variant: UiButtonVariant, size: UiButtonSize) => {
  return (
    <UiHStack style={{ gap: "14px" }}>
      <UiButton variant={variant} size={size}>
        Label
      </UiButton>
      <UiButton variant={variant} size={size} disabled>
        Label
      </UiButton>
      <UiButton variant={variant} round size={size}>
        10
      </UiButton>
      <UiButton variant={variant} round size={size} disabled>
        10
      </UiButton>
      <UiButton
        variant={variant}
        round
        size={size}
        leftIconSvg={ArrowExternalRight}
      />
      <UiButton
        variant={variant}
        round
        size={size}
        leftIconSvg={ArrowExternalRight}
        disabled
      />
    </UiHStack>
  );
};

export const BackgroundSmall = {
  render() {
    return (
      <StorybookExample title="variant: background, size: small">
        {renderButtonExamples("background", "small")}
      </StorybookExample>
    );
  },
};
export const BackgroundMedium = {
  render() {
    return (
      <StorybookExample title="variant: background, size: medium">
        {renderButtonExamples("background", "medium")}
      </StorybookExample>
    );
  },
};

export const OutlinedSmall = {
  render() {
    return (
      <StorybookExample title="variant: outlined; size: small">
        {renderButtonExamples("outlined", "small")}
      </StorybookExample>
    );
  },
};
export const OutlinedMedium = {
  render() {
    return (
      <StorybookExample title="variant: outlined, size: medium">
        {renderButtonExamples("outlined", "medium")}
      </StorybookExample>
    );
  },
};

export const OutlinedInvertedSmall = {
  render() {
    return (
      <StorybookExample title="variant: outlinedInverted, size: small" inverted>
        {renderButtonExamples("outlinedInverted", "small")}
      </StorybookExample>
    );
  },
};

export const OutlinedInvertedMedium = {
  render() {
    return (
      <StorybookExample
        title="variant: outlinedInverted, size: medium"
        inverted
      >
        {renderButtonExamples("outlinedInverted", "medium")}
      </StorybookExample>
    );
  },
};

export const ClearSmall = {
  render() {
    return (
      <StorybookExample title="variant: clear, size: small">
        {renderButtonExamples("clear", "small")}
      </StorybookExample>
    );
  },
};

export const ClearMedium = {
  render() {
    return (
      <StorybookExample title="variant: clear, size: medium">
        {renderButtonExamples("clear", "medium")}
      </StorybookExample>
    );
  },
};

export const PlainSmall = {
  render() {
    return (
      <StorybookExample title="variant: plain, size: small">
        {renderButtonExamples("plain", "small")}
      </StorybookExample>
    );
  },
};

export const PlainWithArrowSmall = {
  render() {
    return (
      <StorybookExample title="variant: plainWithArrow, size: small">
        {renderButtonExamples("plainWithArrow", "small")}
      </StorybookExample>
    );
  },
};
