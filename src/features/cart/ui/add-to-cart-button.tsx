import { useAppDispatch } from "@/shared/lib/hooks/use-app-dispatch";
import { UiButton } from "@/shared/ui/ui-button/ui-button";
import { cartActions } from "../model/slice/cart-slice";

type AddToCartButtonProps = {
  productId: number;
  className?: string;
};

export const AddToCartButton = ({
  productId,
  className,
}: AddToCartButtonProps) => {
  const dispatch = useAppDispatch();

  const onClickAddToCart = () => {
    dispatch(cartActions.incrementProduct(productId));
  };

  return (
    <UiButton
      variant="background"
      max
      className={className}
      onClick={onClickAddToCart}
    >
      Add to Cart
    </UiButton>
  );
};
