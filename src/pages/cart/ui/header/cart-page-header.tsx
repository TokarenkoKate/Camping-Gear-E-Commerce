import { UiBox, HeroTitle } from "@/shared/ui";
import cls from "../page/cart-page.m.scss";

export const CartPageHeader = () => {
  return (
    <UiBox className={cls.cartPageHeader}>
      <HeroTitle />
    </UiBox>
  );
};
