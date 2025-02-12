import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { HeroTitle } from "@/shared/ui/hero-title/hero-title";
import cls from "../page/cart-page.m.scss";

export const CartPageHeader = () => {
  return (
    <UiBox className={cls.cartPageHeader}>
      <HeroTitle />
    </UiBox>
  );
};
