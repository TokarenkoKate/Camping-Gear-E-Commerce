import { UiVStack } from "@/shared/ui";
import { useDisclosure } from "@/shared/lib/hooks/use-disclosure";
import { ListHeaderVisible } from "../visible/list-header-visible";
import { ListHeaderExpandable } from "../expandable/list-header-expandable";
import {
  ListHeaderFilterAttribute,
  ListHeaderFormValues,
} from "../../model/types/list-header";
import cls from "../header/list-header.m.scss";

interface ListHeaderProps {
  subtitle: string;
  title: string;
  filterAttributes: ListHeaderFilterAttribute[] | undefined;
  onSubmitFilters(filterValues: ListHeaderFormValues): void;
}

export const ListHeader = ({
  subtitle,
  title,
  filterAttributes,
  onSubmitFilters,
}: ListHeaderProps) => {
  const { isOpen, toggleOpen } = useDisclosure();

  return (
    <UiVStack className={cls.listHeader}>
      <ListHeaderVisible
        title={title}
        subtitle={subtitle}
        onToggleExpandable={toggleOpen}
      />
      {isOpen && filterAttributes && (
        <ListHeaderExpandable
          filterAttributes={filterAttributes}
          onSubmitFilters={onSubmitFilters}
        />
      )}
    </UiVStack>
  );
};
