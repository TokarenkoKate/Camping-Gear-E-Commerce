import { RefObject, useRef } from "react";
import { UiPortal, UiBox, UiOverlay, GridWithInnerBorder } from "@/shared/ui";
import { categoriesSelector, CategoryCard } from "@/entities/category";
import { useOutsideClick } from "@/shared/lib/hooks/use-outside-click";
import { useDisableBodyScroll } from "@/shared/lib/hooks/use-disable-scroll";
import { useSelector } from "react-redux";
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
  const categories = useSelector(categoriesSelector);

  useOutsideClick({
    ref: contentRef,
    excludeRef: triggerButtonRef,
    handler: onClose,
  });

  useDisableBodyScroll(isOpen);

  if (!categories) {
    return null;
  }

  return (
    <UiPortal>
      <UiBox className={cls.shopNavigation}>
        <UiOverlay className={cls.shopNavigationOverlay} />
        <GridWithInnerBorder
          itemsLength={categories.length}
          className={cls.shopNavigationContent}
          borderColor="#d0d0d0"
          ref={contentRef}
        >
          {categories?.map((category) => {
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
