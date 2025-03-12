import { Link, To } from "react-router-dom";
import { UiBox, UiVStack, UiText, UiIcon } from "@/shared/ui";
import { Category } from "../model/types/category";
import cls from "./category-card.m.scss";

interface CategoryCardProps {
  category: Category;
  onRedirectClick: VoidFunction;
}

export const CategoryCard = ({
  category,
  onRedirectClick,
}: CategoryCardProps) => {
  const { name, description, href, Svg } = category;
  const redirectPath: To = `/shop/${href}`;

  return (
    <Link
      to={redirectPath}
      className={cls.categoryCard}
      onClick={onRedirectClick}
    >
      <UiBox className={cls.categoryCardContent}>
        <UiIcon Svg={Svg} className={cls.categoryCardImg} />
        <UiVStack className={cls.categoryCardTexts}>
          <UiText className={cls.categoryCardTitle}>{name}</UiText>
          {description && <UiText>{description}</UiText>}
        </UiVStack>
      </UiBox>
    </Link>
  );
};
