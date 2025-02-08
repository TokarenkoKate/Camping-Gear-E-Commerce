import { UiButton } from "@/shared/ui/ui-button/ui-button";

type AddToCartButtonProps = {
  className?: string;
};

export const AddToCartButton = ({ className }: AddToCartButtonProps) => {
  return (
    <UiButton variant="background" max className={className}>
      Add to Cart
    </UiButton>
  );
};
