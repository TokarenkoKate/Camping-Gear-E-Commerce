import { RefObject, useRef } from "react";
import { UiPortal, UiBox, UiOverlay, GridWithInnerBorder } from "@/shared/ui";
import { CategoryCard } from "@/entities/category";
import { categoryItems } from "../../../entities/category/model/const/shop-categories";
import { useOutsideClick } from "@/shared/lib/hooks/use-outside-click";
import { useDisableBodyScroll } from "@/shared/lib/hooks/use-disable-scroll";
import cls from "./shop-navigation.m.scss";

interface ShopNavigationProps {
  triggerButtonRef: RefObject<HTMLButtonElement>;
  isOpen: boolean;
  onClose: VoidFunction;
}

export const ShopNavigation = ({
  triggerButtonRef,
  isOpen,
  onClose,
}: ShopNavigationProps) => {
  const contentRef = useRef<HTMLUListElement>(null);

  useOutsideClick({
    ref: contentRef,
    excludeRef: triggerButtonRef,
    handler: onClose,
  });

  useDisableBodyScroll(isOpen);

  return (
    <UiPortal>
      <UiBox className={cls.shopNavigation}>
        <UiOverlay className={cls.shopNavigationOverlay} />
        <GridWithInnerBorder
          itemsLength={categoryItems.length}
          className={cls.shopNavigationContent}
          borderColor="#d0d0d0"
          ref={contentRef}
        >
          {categoryItems.map((category) => {
            return (
              <CategoryCard
                category={category}
                key={category.name}
                onRedirectClick={onClose}
              />
            );
          })}
        </GridWithInnerBorder>
      </UiBox>
    </UiPortal>
  );
};
