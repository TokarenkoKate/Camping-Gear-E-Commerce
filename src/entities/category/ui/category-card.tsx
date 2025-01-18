import { Link, To } from "react-router-dom";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { UiVStack } from "@/shared/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/shared/ui/ui-text/ui-text";
import { UiIcon } from "@/shared/ui/ui-icon/ui-icon";
import { Category } from "../model/types/category";
import cls from "./category-card.m.scss";
import { appRoutesPaths } from "@/shared/const/router";

interface CategoryCardProps {
  category: Category;
  onRedirectClick: VoidFunction;
}

export const CategoryCard = ({
  category,
  onRedirectClick,
}: CategoryCardProps) => {
  const { name, description, href, Svg } = category;
  const redirectPath: To = `${appRoutesPaths.shop}/${href}`;

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
