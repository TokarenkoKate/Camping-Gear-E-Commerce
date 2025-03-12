import { ProductCart, ProductHCard } from "@/entities/product";
import { CounterButton } from "@/shared/ui";

interface CartProductCardInterface {
  product: ProductCart;
  count: number;
  onAddProduct(productId: number): void;
  onRemoveProduct(productId: number): void;
}

export const CartProductCard = ({
  product,
  count,
  onAddProduct,
  onRemoveProduct,
}: CartProductCardInterface) => {
  const onIncrement = () => {
    onAddProduct(product.id);
  };

  const onDecrement = () => {
    onRemoveProduct(product.id);
  };

  return (
    <ProductHCard product={product}>
      <CounterButton
        count={count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </ProductHCard>
  );
};
