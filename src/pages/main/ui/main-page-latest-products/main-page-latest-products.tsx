import { useInView } from "react-intersection-observer";
import { UiBox } from "@/shared/ui";
import { ProductsGallery } from "@/features/products-gallery";
import { useGetLatestProducts } from "@/entities/product";
import { newInGalleryIntroCard } from "../../model/const/main-page";
import cls from "../main-page/main-page.m.scss";

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
