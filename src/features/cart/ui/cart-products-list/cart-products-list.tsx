import { UiBox, UiVStack } from "@/shared/ui";
import { ProductCart } from "@/entities/product";
import { CartProductCard } from "../cart-product-card/cart-product-card";
import cls from "../cart-sidebar/cart-sidebar.m.scss";

interface CardProductsListProps {
  products: ProductCart[];
}

export const CardProductsList = ({ products }: CardProductsListProps) => {
  return (
    <UiVStack as="ul" role="list" className={cls.cartProductsList}>
      {products.map((product) => {
        return (
          <UiBox key={product.id} as="li" max>
            <CartProductCard
              product={product}
              count={0}
              onAddProduct={function (productId: number): void {
                throw new Error("Function not implemented.");
              }}
              onRemoveProduct={function (productId: number): void {
                throw new Error("Function not implemented.");
              }}
            />
          </UiBox>
        );
      })}
    </UiVStack>
  );
};
