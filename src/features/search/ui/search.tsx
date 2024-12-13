import { UiIcon } from "@/shared/ui/ui-icon/ui-icon";
import cls from "./search.m.scss";
import {
  UiButton,
  UiButtonSize,
  UiButtonVariant,
} from "@/shared/ui/ui-button/ui-button";
import SearchIcon from "@/shared/assets/icons/search-20-20.svg";
import classNames from "classnames";

export const Search = () => {
  return (
    <>
      <UiButton
        className={classNames(cls.search, cls.searchDesktop)}
        variant={UiButtonVariant.CLEAR}
        size={UiButtonSize.S}
      >
        Search
      </UiButton>
      <UiButton
        className={classNames(cls.search, cls.searchMobile)}
        variant={UiButtonVariant.CLEAR}
        size={UiButtonSize.S}
      >
        <UiIcon Svg={SearchIcon} className={cls.searchIcon} />
      </UiButton>
    </>
  );
};
