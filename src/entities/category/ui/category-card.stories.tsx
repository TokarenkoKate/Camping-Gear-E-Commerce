import type { Meta } from "@storybook/react";
import { CategoryCard as CategoryCardComponent } from "./category-card";
import { shopNavigationItems } from "@/features/shop-navigation/model/const/shop-categories";

export default {
  component: CategoryCardComponent,
  title: "Entities/Category/CategoryCard",
} as Meta<typeof CategoryCardComponent>;

export const CategoryCard = {
  render() {
    return <CategoryCardComponent category={shopNavigationItems[0]} />;
  },
};
