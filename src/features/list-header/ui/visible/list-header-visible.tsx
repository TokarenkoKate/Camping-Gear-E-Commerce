import { useState } from "react";
import ArrowRight from "@/shared/assets/icons/arrow-right-20-20.svg";
import FiltersIcon from "@/shared/assets/icons/filters-20-20.svg";
import {
  UiIcon,
  UiHStack,
  UiVStack,
  UiButton,
  UiText,
  UiButtonCheckboxGroup,
} from "@/shared/ui";
import { UiCheckboxValue } from "@/shared/types/ui/ui-checkbox";
import cls from "../header/list-header.m.scss";

interface ListHeaderVisibleProps {
  subtitle: string;
  title: string;
  onToggleExpandable: VoidFunction;
}

const ARROW_ICON_SIZE = "42px";

export const ListHeaderVisible = ({
  subtitle,
  title,
  onToggleExpandable,
}: ListHeaderVisibleProps) => {
  const [values, setValues] = useState<Array<UiCheckboxValue>>([]);
  const onChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    values: Array<UiCheckboxValue>
  ) => {
    setValues(values);
  };

  return (
    <UiVStack className={cls.listHeaderVisible}>
      <UiText className={cls.listHeaderSubtitle} as="h2">
        {subtitle}
      </UiText>
      <UiHStack className={cls.listHeaderTitleWrapper}>
        <UiIcon
          Svg={ArrowRight}
          width={ARROW_ICON_SIZE}
          height={ARROW_ICON_SIZE}
        />
        <UiText variant="headingLg" as="h1" className={cls.listHeaderTitle}>
          {title}
        </UiText>
      </UiHStack>
      <UiHStack className={cls.listHeaderFilters} align="center">
        <UiButton
          variant="outlined"
          round
          leftIconSvg={FiltersIcon}
          size="small"
          onClick={onToggleExpandable}
        />
        <UiButtonCheckboxGroup
          name="productCategories"
          options={[]}
          values={values}
          onChange={onChange}
        />
      </UiHStack>
    </UiVStack>
  );
};
