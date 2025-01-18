import { useRef } from "react";
import { UiPortal } from "@/shared/ui/ui-portal/ui-portal";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { UiOverlay } from "@/shared/ui/ui-overlay/ui-overlay";
import { GridWithInnerBorder } from "@/shared/ui/grid-with-inner-border/grid-with-inner-border";
import { CategoryCard } from "@/entities/category";
import { shopNavigationItems } from "../model/const/shop-categories";
import { useOutsideClick } from "@/shared/lib/hooks/use-outside-click";
import cls from "./shop-navigation.m.scss";

interface ShopNavigationProps {
  onClose: VoidFunction;
}

export const ShopNavigation = ({ onClose }: ShopNavigationProps) => {
  const contentRef = useRef<HTMLUListElement>(null);

  useOutsideClick({
    ref: contentRef,
    handler: onClose,
  });

  return (
    <UiPortal>
      <UiBox className={cls.shopNavigation}>
        <UiOverlay className={cls.shopNavigationOverlay} />
        <GridWithInnerBorder
          itemsLength={shopNavigationItems.length}
          className={cls.shopNavigationContent}
          borderColor="#d0d0d0"
          ref={contentRef}
        >
          {shopNavigationItems.map((category) => {
            return <CategoryCard category={category} key={category.name} />;
          })}
        </GridWithInnerBorder>
      </UiBox>
    </UiPortal>
  );
};
