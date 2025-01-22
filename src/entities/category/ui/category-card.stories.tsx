import type { Meta } from "@storybook/react";
import { CategoryCard as CategoryCardComponent } from "./category-card";
import { categoryItems } from "@/entities/category/model/const/shop-categories";

export default {
  component: CategoryCardComponent,
  title: "Entities/Category/CategoryCard",
} as Meta<typeof CategoryCardComponent>;

export const CategoryCard = {
  render() {
    return (
      <CategoryCardComponent
        category={categoryItems[0]}
        onRedirectClick={() => {}}
      />
    );
  },
};
