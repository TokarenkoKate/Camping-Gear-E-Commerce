import cls from "./search.m.scss";
import {
  UiButton,
  UiButtonSize,
  UiButtonVariant,
} from "@/shared/ui/ui-button/ui-button";

export const Search = () => {
  return (
    <UiButton
      className={cls.search}
      variant={UiButtonVariant.CLEAR}
      size={UiButtonSize.S}
    >
      Search
    </UiButton>
  );
};
