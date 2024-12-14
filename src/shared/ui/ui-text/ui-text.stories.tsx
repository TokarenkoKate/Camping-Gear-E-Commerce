import type { Meta } from "@storybook/react";
import { UiText } from "./ui-text";
import { UiVStack } from "../ui-stack/ui-vstack/ui-vstack";
import { StorybookExample } from "../storybook-example/storybook-example";

export default {
  component: UiText,
} as Meta<typeof UiText>;

export const Variants = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <HeadingXl.render />
        <HeadingLg.render />
        <HeadingMd.render />
        <HeadingSm.render />
        <HeadingXs.render />
        <BodyLg.render />
        <BodyMd.render />
        <BodySm.render />
        <BodyXs.render />
      </UiVStack>
    );
  },
};

export const FontWeights = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <FontWeightRegular.render />
        <FontWeightMedium.render />
        <FontWeightBold.render />
      </UiVStack>
    );
  },
};

export const Align = {
  render() {
    return (
      <UiVStack style={{ gap: "16px", padding: "16px 0" }}>
        <AlignStart.render />
        <AlignCenter.render />
        <AlignEnd.render />
        <AlignJustify.render />
      </UiVStack>
    );
  },
};

const HeadingXl = {
  render() {
    return (
      <StorybookExample title="variant: headingXl">
        <UiText variant="headingXl">
          Lorem ipsum dolor sit amet consectetur
        </UiText>
      </StorybookExample>
    );
  },
};

const HeadingLg = {
  render() {
    return (
      <StorybookExample title="variant: headingLg">
        <UiText variant="headingLg">
          Lorem ipsum dolor sit amet consectetur
        </UiText>
      </StorybookExample>
    );
  },
};

const HeadingMd = {
  render() {
    return (
      <StorybookExample title="variant: headingMd">
        <UiText variant="headingMd">
          Lorem ipsum dolor sit amet consectetur
        </UiText>
      </StorybookExample>
    );
  },
};

const HeadingSm = {
  render() {
    return (
      <StorybookExample title="variant: headingSm">
        <UiText variant="headingSm">
          Lorem ipsum dolor sit amet consectetur
        </UiText>
      </StorybookExample>
    );
  },
};

const HeadingXs = {
  render() {
    return (
      <StorybookExample title="variant: headingXs">
        <UiText variant="headingXs">
          Lorem ipsum dolor sit amet consectetur
        </UiText>
      </StorybookExample>
    );
  },
};

const BodyLg = {
  render() {
    return (
      <StorybookExample title="variant: bodyLg">
        <UiText variant="bodyLg">Lorem ipsum dolor sit amet consectetur</UiText>
      </StorybookExample>
    );
  },
};

const BodyMd = {
  render() {
    return (
      <StorybookExample title="variant: bodyMd">
        <UiText variant="bodyMd">Lorem ipsum dolor sit amet consectetur</UiText>
      </StorybookExample>
    );
  },
};

const BodySm = {
  render() {
    return (
      <StorybookExample title="variant: bodySm">
        <UiText variant="bodySm">Lorem ipsum dolor sit amet consectetur</UiText>
      </StorybookExample>
    );
  },
};

const BodyXs = {
  render() {
    return (
      <StorybookExample title="variant: bodyXs">
        <UiText variant="bodyXs">Lorem ipsum dolor sit amet consectetur</UiText>
      </StorybookExample>
    );
  },
};

const FontWeightRegular = {
  render() {
    return (
      <StorybookExample title="font weight: regular">
        <UiText variant="bodyMd" fontWeight="regular">
          Lorem ipsum dolor sit amet consectetur
        </UiText>
      </StorybookExample>
    );
  },
};

const FontWeightMedium = {
  render() {
    return (
      <StorybookExample title="font weight: medium">
        <UiText variant="bodyMd" fontWeight="medium">
          Lorem ipsum dolor sit amet consectetur
        </UiText>
      </StorybookExample>
    );
  },
};

const FontWeightBold = {
  render() {
    return (
      <StorybookExample title="font weight: bold">
        <UiText variant="bodyMd" fontWeight="bold">
          Lorem ipsum dolor sit amet consectetur
        </UiText>
      </StorybookExample>
    );
  },
};

const AlignStart = {
  render() {
    return (
      <StorybookExample title="align: start">
        <UiText variant="bodyMd" align="start">
          Lorem ipsum dolor sit amet consectetur
        </UiText>
      </StorybookExample>
    );
  },
};

const AlignCenter = {
  render() {
    return (
      <StorybookExample title="align: center">
        <UiText variant="bodyMd" align="center">
          Lorem ipsum dolor sit amet consectetur
        </UiText>
      </StorybookExample>
    );
  },
};

const AlignEnd = {
  render() {
    return (
      <StorybookExample title="align: end">
        <UiText variant="bodyMd" align="end">
          Lorem ipsum dolor sit amet consectetur
        </UiText>
      </StorybookExample>
    );
  },
};

const AlignJustify = {
  render() {
    return (
      <StorybookExample title="align: justify">
        <UiText variant="bodyMd" align="justify">
          Lorem ipsum dolor sit amet consectetur
        </UiText>
      </StorybookExample>
    );
  },
};
