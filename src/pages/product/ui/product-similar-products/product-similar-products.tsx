import { useGetSimilarProducts } from "@/entities/product";
import { ProductsGallery } from "@/features/products-gallery";
import { useInView } from "react-intersection-observer";
import cls from "../product-page/product-page.m.scss";

import { UiBox } from "@/shared/ui";

export const ProductSimilarProducts = ({
  productId,
}: {
  productId: number;
}) => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  /**
   * Similar products request query
   * NOTE: lazy load similar products, when user scrolls to this section
   */
  const { data: similarProducts, isLoading } = useGetSimilarProducts(
    productId,
    inView
  );

  return (
    <UiBox ref={inViewRef}>
      <ProductsGallery
        products={similarProducts}
        isLoading={isLoading}
        className={cls.relatedItems}
      />
    </UiBox>
  );
};
