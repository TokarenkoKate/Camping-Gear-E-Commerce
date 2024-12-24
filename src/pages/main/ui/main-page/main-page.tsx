import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { MainPageHeader } from "../main-page-header/main-page-header";
import { MainPageArticlesPreview } from "../main-page-articles-preview/main-page-articles-preview";
import cls from "./main-page.m.scss";

export const MainPage = () => {
  return (
    <UiBox className={cls.mainPage}>
      <MainPageHeader />
      <MainPageArticlesPreview />
    </UiBox>
  );
};
