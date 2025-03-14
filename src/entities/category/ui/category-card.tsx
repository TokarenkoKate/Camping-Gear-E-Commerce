import { Link, To } from "react-router-dom";
import { UiBox, UiVStack, UiText } from "@/shared/ui";
import { Category } from "../model/types/category";
import { getImageSrcPath } from "@/shared/lib/helpers/ui/image/get-image-src-path";
import cls from "./category-card.m.scss";

interface CategoryCardProps {
  category: Category;
  onRedirectClick: VoidFunction;
}

export const CategoryCard = ({
  category,
  onRedirectClick,
}: CategoryCardProps) => {
  const { name, alias, image } = category;
  const redirectPath: To = `/shop/${alias}`;

  const imagePath = getImageSrcPath(image);

  return (
    <Link
      to={redirectPath}
      className={cls.categoryCard}
      onClick={onRedirectClick}
    >
      <UiBox className={cls.categoryCardContent}>
        <img src={imagePath} className={cls.categoryCardImg} alt={name} />
        <UiVStack className={cls.categoryCardTexts}>
          <UiText className={cls.categoryCardTitle}>{name}</UiText>
        </UiVStack>
      </UiBox>
    </Link>
  );
};
