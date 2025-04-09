import { useMemo } from "react";
import { UiButtonCheckboxGroup } from "@/shared/ui";

interface ListHeaderCategoriesFormProps {
  categories: string[];
  selectedCategories?: string[] | undefined;
  onChangeCategories(categories: string[] | undefined): void;
}

export const ListHeaderCategoriesForm = (
  props: ListHeaderCategoriesFormProps
) => {
  const { categories, selectedCategories, onChangeCategories } = props;

  const categoriesOptions = useMemo(() => {
    return categories?.map((category) => ({
      value: category,
      label: category,
    }));
  }, [categories]);

  const onChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    newValues: string[]
  ) => {
    onChangeCategories(newValues);
  };

  return (
    <UiButtonCheckboxGroup<string>
      name="categories"
      options={categoriesOptions}
      values={selectedCategories}
      onChange={onChange}
    />
  );
};
