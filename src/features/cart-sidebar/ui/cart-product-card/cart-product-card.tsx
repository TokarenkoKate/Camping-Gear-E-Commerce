import { CartItem } from "@/entities/cart";
import { ProductHCard } from "@/entities/product";
import { CounterButton } from "@/shared/ui";

interface CartProductCardInterface {
  cartItem: CartItem;
  onAddProduct(productId: number): void;
  onRemoveProduct(productId: number): void;
}

export const CartProductCard = ({
  cartItem,
  onAddProduct,
  onRemoveProduct,
}: CartProductCardInterface) => {
  const onIncrement = () => {
    onAddProduct(cartItem.product.id);
  };

  const onDecrement = () => {
    onRemoveProduct(cartItem.id);
  };

  return (
    <ProductHCard product={cartItem.product}>
      <CounterButton
        count={cartItem.quantity}
        size="small"
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </ProductHCard>
  );
};
