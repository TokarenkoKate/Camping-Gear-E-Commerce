import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { UiIcon } from "@/shared/ui/ui-icon/ui-icon";
import { Category } from "../model/types/category";
import cls from "./category-card.m.scss";

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const { name, description, Svg } = category;

  return (
    <UiBox className={cls.categoryCard}>
      <UiIcon Svg={Svg} className={cls.categoryCardImg} />
      <UiVStack className={cls.categoryCardTexts}>
        <UiText>{name}</UiText>
        {description && <UiText>{description}</UiText>}
      </UiVStack>
    </UiBox>
  );
};
