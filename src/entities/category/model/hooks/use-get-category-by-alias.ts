import { useSelector } from "react-redux";
import { categoriesSelector } from "../selectors/categories-selector";

export const useGetCategoryByAlias = (categoryAlias: string | undefined) => {
  const categories = useSelector(categoriesSelector);
  const category = categories?.find(
    (category) => category.alias === categoryAlias
  );

  return category;
};
