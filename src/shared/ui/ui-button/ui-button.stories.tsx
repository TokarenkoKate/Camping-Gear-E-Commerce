import type { Meta } from "@storybook/react";
import { UiButton } from "./ui-button";
import ArrowExternalRight from "@/shared/assets/icons/arrow-external-right-20-20.svg";

export default {
  component: UiButton,
} as Meta<typeof UiButton>;

export const All = {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Background.render />
        <Outlined.render />
        <Clear.render />
      </div>
    );
  },
};

export const Background = {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p>Background</p>
        <div style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
          <UiButton variant="background" size="small">
            Label
          </UiButton>
          <UiButton variant="background" size="small" disabled>
            Label
          </UiButton>
          <UiButton variant="background" round size="small">
            10
          </UiButton>
          <UiButton variant="background" round size="small" disabled>
            10
          </UiButton>
          <UiButton
            variant="background"
            round
            size="small"
            IconSvg={ArrowExternalRight}
          />
          <UiButton
            variant="background"
            round
            size="small"
            IconSvg={ArrowExternalRight}
            disabled
          />
        </div>
      </div>
    );
  },
};

export const Outlined = {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <p>Outlined</p>
        <div style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
          <UiButton variant="outlined" size="small">
            Label
          </UiButton>
          <UiButton variant="outlined" size="small" disabled>
            Label
          </UiButton>
          <UiButton variant="outlined" round size="small">
            10
          </UiButton>
          <UiButton variant="outlined" round size="small" disabled>
            10
          </UiButton>
          <UiButton
            variant="outlined"
            round
            size="small"
            IconSvg={ArrowExternalRight}
          />
          <UiButton
            variant="outlined"
            round
            size="small"
            IconSvg={ArrowExternalRight}
            disabled
          />
        </div>
      </div>
    );
  },
};

export const Clear = {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p>Clear</p>
          <div style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
            <UiButton variant="clear" size="small">
              Label
            </UiButton>
            <UiButton variant="clear" size="small" disabled>
              Label
            </UiButton>
            <UiButton variant="clear" round size="small">
              10
            </UiButton>
            <UiButton variant="clear" round size="small" disabled>
              10
            </UiButton>
            <UiButton
              variant="clear"
              round
              size="small"
              IconSvg={ArrowExternalRight}
            />
            <UiButton
              variant="clear"
              round
              size="small"
              IconSvg={ArrowExternalRight}
              disabled
            />
          </div>
        </div>
      </div>
    );
  },
};
