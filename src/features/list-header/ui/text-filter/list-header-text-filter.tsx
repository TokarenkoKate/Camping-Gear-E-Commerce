import classNames from "classnames";
import { UiFieldRenderProps } from "@/shared/types/ui/ui-form";
import { UiText, UiVStack } from "@/shared/ui";
import { ListHeaderTextButton } from "./list-header-text-button";
import { ListHeaderFilterAttribute } from "../../model/types/list-header";
import cls from "../header/list-header.m.scss";

type ListHeaderTextFilter = Partial<UiFieldRenderProps<string[] | string>> & {
  attributeFilter: ListHeaderFilterAttribute;
};

export const ListHeaderTextFilter = ({
  attributeFilter,
  value: selectedValue,
  onChange,
}: ListHeaderTextFilter) => {
  const { key, values: attributeValues, isMulti } = attributeFilter;

  const onToggleAttributeValue = (value: string, checked: boolean) => {
    if (!isMulti) {
      onChange?.(value);
    } else {
      let updatedValues =
        selectedValue && Array.isArray(selectedValue) ? [...selectedValue] : [];
      if (checked) {
        updatedValues = updatedValues.concat(value);
      } else {
        updatedValues = updatedValues.filter((curr) => curr !== value);
      }
      onChange?.(updatedValues);
    }
  };

  return (
    <UiVStack className={classNames(cls.listHeaderFilterComponent)}>
      <UiText as="h3" variant="headingSm">
        {key}
      </UiText>
      <UiVStack
        as="ul"
        role="list"
        className={cls.listHeaderFilterComponentList}
      >
        {attributeValues.map((attributeValue) => {
          const isChecked =
            selectedValue && Array.isArray(selectedValue)
              ? selectedValue?.includes(attributeValue)
              : selectedValue === attributeValue;

          return (
            <ListHeaderTextButton
              name={key}
              value={attributeValue}
              isChecked={isChecked}
              onToggleValue={onToggleAttributeValue}
              key={attributeValue}
            />
          );
        })}
      </UiVStack>
    </UiVStack>
  );
};
