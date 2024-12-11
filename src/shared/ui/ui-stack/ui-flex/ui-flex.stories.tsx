import { PropsWithChildren } from "react";
import type { Meta } from "@storybook/react";
import { UiFlex } from "./ui-flex";
import { UiHStack } from "../ui-hstack/ui-hstack";
import { UiVStack } from "../ui-vstack/ui-vstack";

export default {
  component: UiFlex,
} as Meta<typeof UiFlex>;

export const All = {
  render() {
    return (
      <UiVStack style={{ gap: "16px" }} max>
        <UiHStack style={{ gap: "16px" }} max>
          <HStackAlignStart.render />
          <HStackAlignCenter.render />
          <HStackAlignEnd.render />
        </UiHStack>
        <UiHStack style={{ gap: "16px" }} max>
          <HStackJustifyStart.render />
          <HStackJustifyCenter.render />
          <HStackJustifyEnd.render />
          <HStackJustifyBetween.render />
        </UiHStack>
      </UiVStack>
    );
  },
};

const Box = () => {
  return (
    <div style={{ width: "50px", height: "50px", background: "#5393C9" }}>
      Label
    </div>
  );
};

const StackWrapper = (props: Parameters<typeof UiHStack>["0"]) => {
  return (
    <UiHStack
      max
      style={{
        gap: "4px",
        background: "#F0F0F0",
        padding: "8px",
        height: "120px",
      }}
      {...props}
    >
      <Box />
      <Box />
      <Box />
    </UiHStack>
  );
};

const GroupWrapper = ({ children }: PropsWithChildren) => {
  return (
    <UiVStack
      style={{
        gap: "8px",
      }}
      max
    >
      {children}
    </UiVStack>
  );
};

export const HStackAlignStart = {
  render() {
    return (
      <GroupWrapper>
        <p>UiHStack align start</p>
        <StackWrapper align="start" />
      </GroupWrapper>
    );
  },
};

export const HStackAlignCenter = {
  render() {
    return (
      <GroupWrapper>
        <p>UiHStack align center</p>
        <StackWrapper align="center" />
      </GroupWrapper>
    );
  },
};

export const HStackAlignEnd = {
  render() {
    return (
      <GroupWrapper>
        <p>UiHStack align end</p>
        <StackWrapper align="end" />
      </GroupWrapper>
    );
  },
};

export const HStackJustifyStart = {
  render() {
    return (
      <GroupWrapper>
        <p>UiHStack justify start</p>
        <StackWrapper justify="start" />
      </GroupWrapper>
    );
  },
};

export const HStackJustifyCenter = {
  render() {
    return (
      <GroupWrapper>
        <p>UiHStack justify center</p>
        <StackWrapper justify="center" />
      </GroupWrapper>
    );
  },
};

export const HStackJustifyEnd = {
  render() {
    return (
      <GroupWrapper>
        <p>UiHStack justify end</p>
        <StackWrapper justify="end" />
      </GroupWrapper>
    );
  },
};

export const HStackJustifyBetween = {
  render() {
    return (
      <GroupWrapper>
        <p>UiHStack justify between</p>
        <StackWrapper justify="between" />
      </GroupWrapper>
    );
  },
};
