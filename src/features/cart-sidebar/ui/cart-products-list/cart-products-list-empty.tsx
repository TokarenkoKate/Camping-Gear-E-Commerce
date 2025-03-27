import { UiIcon, UiText, UiVStack } from "@/shared/ui";
import EmptyList from "@/shared/assets/icons/empty-list.svg";
import cls from "../cart-sidebar/cart-sidebar.m.scss";

export const CartProductsListEmpty = () => {
  return (
    <UiVStack
      max
      align="center"
      justify="center"
      className={cls.cartProductsList}
    >
      <UiIcon Svg={EmptyList} />
      <UiVStack align="center">
        <UiText tone="secondary" variant="headingSm" fontWeight="medium">
          No Products
        </UiText>
        <UiText tone="secondary" variant="bodyLg">
          It seems there are no products in a cart yet
        </UiText>
      </UiVStack>
    </UiVStack>
  );
};
