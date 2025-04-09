import ArrowRight from "@/shared/assets/icons/arrow-right-20-20.svg";
import FiltersIcon from "@/shared/assets/icons/filters-20-20.svg";
import { UiButton, UiHStack, UiIcon, UiText, UiVStack } from "@/shared/ui";
import { ListHeaderCategoriesForm } from "../categories-form/list-header-categories-form";
import cls from "../header/list-header.m.scss";

interface ListHeaderVisibleProps {
  subtitle: string;
  title: string;
  categories?: string[];
  selectedCategories?: string[] | undefined;
  onToggleExpandable: VoidFunction;
  onChangeCategories?(categories: string[] | undefined): void;
}

const ARROW_ICON_SIZE = "42px";

export const ListHeaderVisible = ({
  subtitle,
  title,
  categories,
  selectedCategories,
  onToggleExpandable,
  onChangeCategories,
}: ListHeaderVisibleProps) => {
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
        {categories && onChangeCategories && (
          <ListHeaderCategoriesForm
            categories={categories}
            selectedCategories={selectedCategories}
            onChangeCategories={onChangeCategories}
          />
        )}
      </UiHStack>
    </UiVStack>
  );
};
