import { ProductsGallery } from "@/features/products-gallery";
import cls from "../main-page/main-page.m.scss";
import { useGetLatestProducts } from "@/entities/product/model/api/use-get-latest-products";
import { newInGalleryIntroCard } from "../../model/const/main-page";
import { UiBox } from "@/shared/ui";
import { useInView } from "react-intersection-observer";

export const MainPageLatestProducts = () => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  /**
   * Latest products request query
   * NOTE: lazy load Latest products, when user scrolls to this section
   */
  const { data: products, isLoading } = useGetLatestProducts(inView);

  return (
    <UiBox ref={inViewRef}>
      <ProductsGallery
        products={products}
        isLoading={isLoading}
        introCardProps={newInGalleryIntroCard}
        className={cls.mainPageProductGallery}
      />
    </UiBox>
  );
};
