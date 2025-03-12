import { UiBox } from "@/shared/ui/ui-box/ui-box";
import { CartPageHeader } from "../header/cart-page-header";
import { UiHStack } from "@/shared/ui/ui-stack/ui-hstack/ui-hstack";
import { OrderForm } from "@/entities/order";
import cls from "./cart-page.m.scss";

export const CartPage = () => {
  return (
    <UiBox className={cls.cartPage}>
      <CartPageHeader />
      <UiHStack>
        <OrderForm className={cls.cartPageOrderForm} />
      </UiHStack>
    </UiBox>
  );
};
