import classNames from "classnames";
import { UiVStack } from "@/shared/ui";
import { useDisclosure } from "@/shared/lib/hooks/use-disclosure";
import { ListHeaderVisible } from "../visible/list-header-visible";
import { ListHeaderExpandable } from "../expandable/list-header-expandable";
import {
  ListHeaderFilterAttribute,
  ListHeaderFormValues,
} from "../../model/types/list-header";
import cls from "../header/list-header.m.scss";
import { SlideToggle } from "@/shared/ui/slide-toggle/slide-toggle";

interface ListHeaderProps {
  subtitle: string;
  title: string;
  categories?: string[];
  selectedCategories?: string[] | undefined;
  filterAttributes: ListHeaderFilterAttribute[] | undefined;
  initialFilterValues: ListHeaderFormValues;
  className?: string;
  onSubmitFilters(filterValues: ListHeaderFormValues): void;
  onChangeCategories?(categories: string[] | undefined): void;
}

export const ListHeader = ({
  subtitle,
  title,
  filterAttributes,
  initialFilterValues,
  categories,
  selectedCategories,
  className,
  onSubmitFilters,
  onChangeCategories,
}: ListHeaderProps) => {
  const { isOpen, toggleOpen } = useDisclosure();

  return (
    <UiVStack className={classNames(cls.listHeader, className)}>
      <ListHeaderVisible
        title={title}
        subtitle={subtitle}
        categories={categories}
        selectedCategories={selectedCategories}
        onToggleExpandable={toggleOpen}
        onChangeCategories={onChangeCategories}
      />
      {filterAttributes && (
        <SlideToggle isOpen={isOpen}>
          <ListHeaderExpandable
            initialFilterValues={initialFilterValues}
            filterAttributes={filterAttributes}
            onSubmitFilters={onSubmitFilters}
          />
        </SlideToggle>
      )}
    </UiVStack>
  );
};
