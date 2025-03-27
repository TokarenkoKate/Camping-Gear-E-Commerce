import { lazy } from "react";

export const JournalPageAsync = lazy(() =>
  import("./journal-page").then((module) => ({ default: module.JournalPage }))
);
