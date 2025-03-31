import { UiBox } from "@/shared/ui";
import { ListHeader } from "@/features/list-header";
import { JournalArticlesGallery } from "./journal-articles-gallery";
import {
  mockArticleHalfPage1,
  mockArticleHalfPage2,
  mockArticleHalfPage3,
} from "@/mocks/articles/article";

export const JournalArticles = () => {
  return (
    <UiBox>
      <ListHeader
        title="Our journal"
        subtitle="News & events"
        filterAttributes={[]}
        onSubmitFilters={() => {}}
      />
      <JournalArticlesGallery
        articles={[
          mockArticleHalfPage1,
          mockArticleHalfPage2,
          mockArticleHalfPage3,
        ]}
      />
    </UiBox>
  );
};
