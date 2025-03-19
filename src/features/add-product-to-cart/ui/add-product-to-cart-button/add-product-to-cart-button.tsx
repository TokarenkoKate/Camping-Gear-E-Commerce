import { AnimatePresence, motion } from "framer-motion";
import {
  getCartItemByProductId,
  useCartMutations,
  updateCartQueryData,
  getCartQueryData,
} from "@/entities/cart";
import { CounterButton, UiButton } from "@/shared/ui";
import { useEffect, useState } from "react";

type AddToCartButtonProps = {
  productId: number;
  className?: string;
};

const addToCartAnimation = {
  animate: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
  transition: { duration: 0.2 },
};

export const AddProductToCartButton = ({
  productId,
  className,
}: AddToCartButtonProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const cart = getCartQueryData();
  const cartItem = getCartItemByProductId(cart?.items, productId);

  const { addCartItemMutation, removeCartItemMutation } = useCartMutations();

  const onIncrement = () => {
    addCartItemMutation.mutate(
      { productId, quantity: 1 },
      {
        onSuccess(updatedCart) {
          updateCartQueryData(updatedCart);
        },
      }
    );
  };

  const onDecrement = () => {
    if (cartItem?.id) {
      removeCartItemMutation.mutate(cartItem?.id, {
        onSuccess(updatedCart) {
          updateCartQueryData(updatedCart);
        },
      });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {cartItem ? (
        <motion.div
          key="counterButton"
          initial={hasMounted ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
          {...addToCartAnimation}
        >
          <CounterButton
            count={cartItem.quantity}
            className={className}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        </motion.div>
      ) : (
        <motion.div
          key="defaultButton"
          initial={hasMounted ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
          {...addToCartAnimation}
        >
          <UiButton
            variant="background"
            max
            className={className}
            onClick={onIncrement}
          >
            Add to Cart
          </UiButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
