import type { Meta } from "@storybook/react";
import { UiButton, UiButtonSize, UiButtonVariant } from "./ui-button";
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
          <UiButton variant={UiButtonVariant.BACKGROUND} size={UiButtonSize.S}>
            Label
          </UiButton>
          <UiButton
            variant={UiButtonVariant.BACKGROUND}
            size={UiButtonSize.S}
            disabled
          >
            Label
          </UiButton>
          <UiButton
            variant={UiButtonVariant.BACKGROUND}
            round
            size={UiButtonSize.S}
          >
            10
          </UiButton>
          <UiButton
            variant={UiButtonVariant.BACKGROUND}
            round
            size={UiButtonSize.S}
            disabled
          >
            10
          </UiButton>
          <UiButton
            variant={UiButtonVariant.BACKGROUND}
            round
            size={UiButtonSize.S}
            IconSvg={ArrowExternalRight}
          />
          <UiButton
            variant={UiButtonVariant.BACKGROUND}
            round
            size={UiButtonSize.S}
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
          <UiButton variant={UiButtonVariant.OUTLINED} size={UiButtonSize.S}>
            Label
          </UiButton>
          <UiButton
            variant={UiButtonVariant.OUTLINED}
            size={UiButtonSize.S}
            disabled
          >
            Label
          </UiButton>
          <UiButton
            variant={UiButtonVariant.OUTLINED}
            round
            size={UiButtonSize.S}
          >
            10
          </UiButton>
          <UiButton
            variant={UiButtonVariant.OUTLINED}
            round
            size={UiButtonSize.S}
            disabled
          >
            10
          </UiButton>
          <UiButton
            variant={UiButtonVariant.OUTLINED}
            round
            size={UiButtonSize.S}
            IconSvg={ArrowExternalRight}
          />
          <UiButton
            variant={UiButtonVariant.OUTLINED}
            round
            size={UiButtonSize.S}
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
            <UiButton variant={UiButtonVariant.CLEAR} size={UiButtonSize.S}>
              Label
            </UiButton>
            <UiButton
              variant={UiButtonVariant.CLEAR}
              size={UiButtonSize.S}
              disabled
            >
              Label
            </UiButton>
            <UiButton
              variant={UiButtonVariant.CLEAR}
              round
              size={UiButtonSize.S}
            >
              10
            </UiButton>
            <UiButton
              variant={UiButtonVariant.CLEAR}
              round
              size={UiButtonSize.S}
              disabled
            >
              10
            </UiButton>
            <UiButton
              variant={UiButtonVariant.CLEAR}
              round
              size={UiButtonSize.S}
              IconSvg={ArrowExternalRight}
            />
            <UiButton
              variant={UiButtonVariant.CLEAR}
              round
              size={UiButtonSize.S}
              IconSvg={ArrowExternalRight}
              disabled
            />
          </div>
        </div>
      </div>
    );
  },
};
