import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { CartPageHeader } from "../header/cart-page-header";
import cls from "./cart-page.m.scss";

export const CartPage = () => {
  return (
    <UiBox className={cls.cartPage}>
      <CartPageHeader />
    </UiBox>
  );
};
