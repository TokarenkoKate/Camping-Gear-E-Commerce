import { UiBox } from "@/shared/ui";
import { ListHeader } from "@/features/list-header";
import { ArticlesGallery } from "@/features/articles-gallery";
import { useJournalPageArticles } from "../../model/hooks/use-journal-page-articles";

export const JournalArticles = () => {
  const {
    articles,
    filterAttributes,
    initialFilterValues,
    onSubmitFilters,
    categories,
    selectedCategories,
    onChangeCategories,
    isLoading,
    totalLength,
    isFetchingNextPage,
    fetchNextPage,
  } = useJournalPageArticles();

  return (
    <UiBox>
      <ListHeader
        title="Our journal"
        subtitle="News & events"
        filterAttributes={filterAttributes}
        initialFilterValues={initialFilterValues}
        onSubmitFilters={onSubmitFilters}
        categories={categories}
        selectedCategories={selectedCategories}
        onChangeCategories={onChangeCategories}
      />
      <ArticlesGallery
        articles={articles}
        articlesCardType="small"
        isLoading={isLoading}
        totalLength={totalLength}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        showFirstPreviewCard
      />
    </UiBox>
  );
};
