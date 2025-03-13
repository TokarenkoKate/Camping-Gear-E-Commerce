import { useDisclosure } from "@/shared/lib/hooks/use-disclosure";
import { UiVStack } from "@/shared/ui";
import { ProductsPageHeaderVisible } from "./products-page-header-visible";
import { ProductsFilterExtended } from "@/features/products-filter/ui/products-filter-extended/products-filter-extended";
import { CategoryAttribute } from "@/entities/category";
import { ProductsFilterFormValues } from "@/features/products-filter";
import cls from "./products-page.m.scss";

interface ProductsPageHeaderProps {
  categoryName: string;
  filterAttributes: CategoryAttribute[] | undefined;
  onSubmitFilters(filterValues: ProductsFilterFormValues): void;
}

export const ProductsPageHeader = ({
  categoryName,
  filterAttributes,
  onSubmitFilters,
}: ProductsPageHeaderProps) => {
  const { isOpen, toggleOpen } = useDisclosure();

  return (
    <UiVStack className={cls.productsPageHeader}>
      <ProductsPageHeaderVisible
        categoryName={categoryName}
        toggleOpenExtendedFilters={toggleOpen}
      />
      {isOpen && filterAttributes && (
        <ProductsFilterExtended
          filterAttributes={filterAttributes}
          onSubmitFilters={onSubmitFilters}
        />
      )}
    </UiVStack>
  );
};
