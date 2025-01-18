import { RefObject, useRef } from "react";
import { UiPortal } from "@/shared/ui/ui-portal/ui-portal";
import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { UiOverlay } from "@/shared/ui/ui-overlay/ui-overlay";
import { GridWithInnerBorder } from "@/shared/ui/grid-with-inner-border/grid-with-inner-border";
import { CategoryCard } from "@/entities/category";
import { shopNavigationItems } from "../model/const/shop-categories";
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
          itemsLength={shopNavigationItems.length}
          className={cls.shopNavigationContent}
          borderColor="#d0d0d0"
          ref={contentRef}
        >
          {shopNavigationItems.map((category) => {
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
