import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { useSelector } from "react-redux";
import { cartProductsCountSelector } from "../model/selectors/cart-selector";

export const Cart = () => {
  const cartProductsCount = useSelector(cartProductsCountSelector);

  return (
    <UiButton variant="outlined" size="small" round>
      {cartProductsCount}
    </UiButton>
  );
};
