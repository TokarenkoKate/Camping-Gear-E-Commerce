import classNames from "classnames";
import { CategoryAttribute } from "@/entities/category";
import { UiFieldRenderProps } from "@/shared/types/ui/ui-form";
import { UiText, UiVStack } from "@/shared/ui";
import { ProductsFilterTextButton } from "./products-filter-text-button";
import cls from "../products-filter-extended.m.scss";

type ProductCategoryColorFilter = Partial<UiFieldRenderProps<string[]>> & {
  categoryColorAttribute: CategoryAttribute;
};

export const ProductCategoryTextFilter = ({
  categoryColorAttribute,
  value: selectedValues = [],
  onChange,
}: ProductCategoryColorFilter) => {
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
    <UiVStack className={classNames(cls.productsFilterComponent)}>
      <UiText as="h3" variant="headingSm">
        {key}
      </UiText>
      <UiVStack as="ul" role="list" className={cls.productsFilterComponentList}>
        {attributeValues.map((attributeValue) => (
          <ProductsFilterTextButton
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
