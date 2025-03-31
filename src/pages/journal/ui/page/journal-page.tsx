import { UiBox } from "@/shared/ui";
import { JournalPageHeader } from "../header/journal-page-header";
import { JournalArticles } from "../articles/journal-articles";
import cls from "./journal-page.m.scss";

export const JournalPage = () => {
  return (
    <UiBox className={cls.journalPage}>
      <JournalPageHeader />
      <JournalArticles />
    </UiBox>
  );
};
