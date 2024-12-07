import cls from "./search.m.scss";
import { UiButton, UiButtonVariant } from "@/shared/ui/ui-button/ui-button";

export const Search = () => {
  return (
    <UiButton className={cls.search} variant={UiButtonVariant.CLEAR}>
      Search
    </UiButton>
  );
};
