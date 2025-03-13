import type { Meta } from "@storybook/react";
import { CategoryCard as CategoryCardComponent } from "./category-card";

export default {
  component: CategoryCardComponent,
  title: "Entities/Category/CategoryCard",
} as Meta<typeof CategoryCardComponent>;

export const CategoryCard = {
  render() {
    return (
      <CategoryCardComponent
        category={{
          id: 1,
          name: "Solo Tent",
          alias: "solo-tent",
          image: "",
        }}
        onRedirectClick={() => {}}
      />
    );
  },
};
