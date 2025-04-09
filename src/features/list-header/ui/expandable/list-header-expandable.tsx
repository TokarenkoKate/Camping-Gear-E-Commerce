import { useForm } from "@/shared/lib/hooks/ui/use-form";
import {
  ListHeaderFilterAttribute,
  ListHeaderFormValues,
} from "../../model/types/list-header";
import { UiBox, UiFormField } from "@/shared/ui";
import { COLOR_CATEGORY_ATTRIBUTE_KEY } from "@/entities/category";
import { ListHeaderColorFilter } from "../color-filter/list-header-color-filter";
import { ListHeaderTextFilter } from "../text-filter/list-header-text-filter";
import { ListHeaderSubmitButtons } from "../submit-buttons/list-header-submit-buttons";
import cls from "../header/list-header.m.scss";

interface ListHeaderExpandableProps {
  filterAttributes: ListHeaderFilterAttribute[];
  initialFilterValues: ListHeaderFormValues;
  onSubmitFilters(filterValues: ListHeaderFormValues): void;
}

export const ListHeaderExpandable = ({
  filterAttributes,
  initialFilterValues,
  onSubmitFilters,
}: ListHeaderExpandableProps) => {
  const Form = useForm<ListHeaderFormValues>();

  const onResetFilters = () => onSubmitFilters(initialFilterValues);

  return (
    <Form
      initialValues={initialFilterValues}
      onSubmit={onSubmitFilters}
      className={cls.listHeaderFilter}
    >
      <UiBox className={cls.listHeaderFilterGroup}>
        {filterAttributes.map((filterAttribute) => {
          const isColorAttribute =
            filterAttribute.key === COLOR_CATEGORY_ATTRIBUTE_KEY;

          return (
            <UiFormField
              name={filterAttribute.key}
              key={filterAttribute.key}
              attributeFilter={filterAttribute}
              component={
                isColorAttribute ? ListHeaderColorFilter : ListHeaderTextFilter
              }
            />
          );
        })}
      </UiBox>
      <ListHeaderSubmitButtons onResetFilters={onResetFilters} />
    </Form>
  );
};
