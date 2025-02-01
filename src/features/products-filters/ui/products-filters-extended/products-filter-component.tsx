import { ReactNode } from "react";
import classNames from "classnames";
import { UiSelectOption } from "@/shared/types/ui/ui-select";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { Fragment } from "react/jsx-runtime";
import cls from "./products-filters-extended.m.scss";

interface ProductsFilterComponentProps {
  title: string;
  filterItems: Array<UiSelectOption>;
  renderFilterItem(item: UiSelectOption): ReactNode;
  className?: string;
}

export const ProductsFilterComponent = (
  props: ProductsFilterComponentProps
) => {
  const { title, filterItems, renderFilterItem, className } = props;

  return (
    <UiVStack className={classNames(cls.productsFiltersComponent, className)}>
      <UiText as="h3" variant="headingSm">
        {title}
      </UiText>
      <UiVStack
        as="ul"
        role="list"
        className={cls.productsFiltersComponentList}
      >
        {filterItems.map((filterItem) => (
          <Fragment key={filterItem.value}>
            {renderFilterItem(filterItem)}
          </Fragment>
        ))}
      </UiVStack>
    </UiVStack>
  );
};
