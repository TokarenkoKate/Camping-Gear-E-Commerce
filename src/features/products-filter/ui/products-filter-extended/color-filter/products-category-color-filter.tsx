import classNames from "classnames";
import { CategoryAttribute } from "@/entities/category";
import { ColorTag, UiText, UiVStack } from "@/shared/ui";
import { UiFieldRenderProps } from "@/shared/types/ui/ui-form";
import cls from "../products-filter-extended.m.scss";

type ProductCategoryColorFilter = Partial<UiFieldRenderProps<string[]>> & {
  categoryColorAttribute: CategoryAttribute;
};

export const ProductCategoryColorFilter = ({
  value: selectedColors = [],
  categoryColorAttribute,
  onChange,
}: ProductCategoryColorFilter) => {
  const { key, values: colorValues } = categoryColorAttribute;

  const onToggleColor = (color: string, checked: boolean) => {
    let updatedColors = [...selectedColors];
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
    <UiVStack
      className={classNames(
        cls.productsFilterComponent,
        cls.productsFilterComponentGrid
      )}
    >
      <UiText as="h3" variant="headingSm">
        {key}
      </UiText>
      <UiVStack as="ul" role="list" className={cls.productsFilterComponentList}>
        {colorValues.map((colorValue) => (
          <ColorTag
            color={colorValue}
            selected={selectedColors.includes(colorValue)}
            key={colorValue}
            onToggleColor={onToggleColor}
          />
        ))}
      </UiVStack>
    </UiVStack>
  );
};
