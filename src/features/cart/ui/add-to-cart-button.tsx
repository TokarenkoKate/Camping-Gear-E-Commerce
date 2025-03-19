import { UiButton } from "@/shared/ui";

type AddToCartButtonProps = {
  productId: number;
  className?: string;
};

export const AddToCartButton = ({
  productId,
  className,
}: AddToCartButtonProps) => {
  const onClickAddToCart = () => {};

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
