import classNames from "classnames";
import { ColorTag, UiText, UiVStack } from "@/shared/ui";
import { UiFieldRenderProps } from "@/shared/types/ui/ui-form";
import { ListHeaderFilterAttribute } from "../../model/types/list-header";
import cls from "../header/list-header.m.scss";

type ListHeaderColorFilter = Partial<UiFieldRenderProps<string[]>> & {
  attributeFilter: ListHeaderFilterAttribute;
};

export const ListHeaderColorFilter = ({
  value: selectedColors = [],
  attributeFilter,
  onChange,
}: ListHeaderColorFilter) => {
  const { key, values: colorValues } = attributeFilter;

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
        cls.listHeaderFilterComponent,
        cls.listHeaderFilterComponentGrid
      )}
    >
      <UiText as="h3" variant="headingSm">
        {key}
      </UiText>
      <UiVStack
        as="ul"
        role="list"
        className={cls.listHeaderFilterComponentList}
      >
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
