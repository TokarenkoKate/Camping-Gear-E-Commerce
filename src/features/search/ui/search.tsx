import classNames from "classnames";
import SearchIcon from "@/shared/assets/icons/search-20-20.svg";
import { UiIcon, UiButton } from "@/shared/ui";
import cls from "./search.m.scss";

export const Search = () => {
  return (
    <>
      <UiButton
        className={classNames(cls.search, cls.searchDesktop)}
        variant="clear"
        size="small"
      >
        Search
      </UiButton>
      <UiButton
        className={classNames(cls.search, cls.searchMobile)}
        variant="clear"
        size="small"
      >
        <UiIcon Svg={SearchIcon} className={cls.searchIcon} />
      </UiButton>
    </>
  );
};
