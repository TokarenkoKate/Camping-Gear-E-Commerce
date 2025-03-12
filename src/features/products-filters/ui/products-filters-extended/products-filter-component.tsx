import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";
import classNames from "classnames";
import { UiSelectOption } from "@/shared/types/ui/ui-select";
import { UiVStack, UiText } from "@/shared/ui";
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
