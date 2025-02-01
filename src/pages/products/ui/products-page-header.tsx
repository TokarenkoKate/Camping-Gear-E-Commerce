import { useDisclosure } from "@/shared/lib/hooks/use-disclosure";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { ProductsPageHeaderVisible } from "./products-page-header-visible";
import { ProductsFiltersExtended } from "@/features/products-filters/ui/products-filters-extended/products-filters-extended";
import cls from "./products-page.m.scss";

interface ProductsPageHeaderProps {
  categoryName: string;
}

export const ProductsPageHeader = ({
  categoryName,
}: ProductsPageHeaderProps) => {
  const { isOpen, toggleOpen } = useDisclosure();

  return (
    <UiVStack className={cls.productsPageHeader}>
      <ProductsPageHeaderVisible
        categoryName={categoryName}
        toggleOpenExtendedFilters={toggleOpen}
      />
      {isOpen && <ProductsFiltersExtended />}
    </UiVStack>
  );
};
