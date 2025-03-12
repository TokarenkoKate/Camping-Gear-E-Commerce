import { CartPageHeader } from "../header/cart-page-header";
import { UiHStack, UiBox } from "@/shared/ui";
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
