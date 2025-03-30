import { ProductCard, ProductSummary } from "@/entities/product";
import { GridWithInnerBorder, UiEmpty } from "@/shared/ui";
import {
  ProductGalleryIntroCard,
  ProductGalleryIntroCardProps,
} from "./intro-card/product-gallery-intro-card";
import { PRODUCTS_GALLERY_MIN_COLUMN_WIDTH } from "../model/const/products-gallery";
import { ProductsLoadingGallery } from "./loading/products-loading-gallery";
import { InfiniteScroll } from "@/shared/ui/infinite-scroll/infinite-scroll";
import { InfiniteScrollProps } from "@/shared/types/ui/infinite-scroll";

interface ProductsGalleryProps
  extends Partial<
    Pick<
      InfiniteScrollProps,
      "fetchNextPage" | "isFetchingNextPage" | "totalLength"
    >
  > {
  introCardProps?: ProductGalleryIntroCardProps;
  products: ProductSummary[] | undefined;
  className?: string;
  isLoading?: boolean;
  infiniteScroll?: boolean;
}

export const ProductsGallery = (props: ProductsGalleryProps) => {
  const {
    introCardProps,
    products,
    isLoading = false,
    className,
    infiniteScroll,
    totalLength,
    isFetchingNextPage,
    fetchNextPage,
  } = props;

  const isEmpty = !products || !products.length;

  if (isLoading) {
    return <ProductsLoadingGallery className={className} />;
  }

  if (isEmpty) {
    return <UiEmpty className={className} />;
  }

  const introCard = introCardProps ? (
    <ProductGalleryIntroCard
      title={introCardProps.title}
      subtitle={introCardProps.subtitle}
      linkText={introCardProps.linkText}
      linkTo={introCardProps.linkText}
    />
  ) : null;

  const itemsLength = introCard ? products.length + 1 : products.length;

  const galleryContent = (
    <>
      {introCard}
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );

  return (
    <GridWithInnerBorder
      itemsLength={itemsLength}
      columnMinWidth={PRODUCTS_GALLERY_MIN_COLUMN_WIDTH}
      className={className}
    >
      {infiniteScroll && totalLength && fetchNextPage ? (
        <InfiniteScroll
          totalLength={totalLength}
          dataLength={products.length}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
        >
          {galleryContent}
        </InfiniteScroll>
      ) : (
        galleryContent
      )}
    </GridWithInnerBorder>
  );
};
