import { UiBox } from "@/shared/ui";
import { JournalPageHeader } from "../header/journal-page-header";
import cls from "./journal-page.m.scss";

export const JournalPage = () => {
  return (
    <UiBox className={cls.journalPage}>
      <JournalPageHeader />
    </UiBox>
  );
};
