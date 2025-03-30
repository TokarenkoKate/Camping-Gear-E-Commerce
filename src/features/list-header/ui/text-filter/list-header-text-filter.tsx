import classNames from "classnames";
import { UiFieldRenderProps } from "@/shared/types/ui/ui-form";
import { UiText, UiVStack } from "@/shared/ui";
import { ListHeaderTextButton } from "./list-header-text-button";
import { ListHeaderFilterAttribute } from "../../model/types/list-header";
import cls from "../header/list-header.m.scss";

type ListHeaderColorFilter = Partial<UiFieldRenderProps<string[]>> & {
  categoryColorAttribute: ListHeaderFilterAttribute;
};

export const ListHeaderTextFilter = ({
  categoryColorAttribute,
  value: selectedValues = [],
  onChange,
}: ListHeaderColorFilter) => {
  const { key, values: attributeValues } = categoryColorAttribute;

  const onToggleAttributeValue = (color: string, checked: boolean) => {
    let updatedColors = [...selectedValues];
    if (checked) {
      updatedColors = updatedColors.concat(color);
    } else {
      updatedColors = updatedColors.filter(
        (selectedColor) => selectedColor !== color
      );
    }
    onChange?.(updatedColors);
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
        {attributeValues.map((attributeValue) => (
          <ListHeaderTextButton
            name={key}
            value={attributeValue}
            isChecked={selectedValues.includes(attributeValue)}
            onToggleValue={onToggleAttributeValue}
            key={attributeValue}
          />
        ))}
      </UiVStack>
    </UiVStack>
  );
};
