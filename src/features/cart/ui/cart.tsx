import {
  UiButton,
  UiButtonSize,
  UiButtonVariant,
} from "@/shared/ui/ui-button/ui-button";

export const Cart = () => {
  return (
    <UiButton variant={UiButtonVariant.OUTLINED} size={UiButtonSize.S} round>
      2
    </UiButton>
  );
};
