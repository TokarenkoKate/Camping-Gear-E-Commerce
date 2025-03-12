import { GridWithInnerBorder } from "@/shared/ui";
import { PRODUCTS_GALLERY_MIN_COLUMN_WIDTH } from "../../model/const/products-gallery";
import { ProductCardLoading } from "@/entities/product";

type ProductsLoadingGalleryProps = {
  className?: string;
};

const loadingProducts = Array.from(Array(6).keys());

export const ProductsLoadingGallery = (props: ProductsLoadingGalleryProps) => {
  const { className } = props;
  return (
    <GridWithInnerBorder
      itemsLength={loadingProducts.length}
      columnMinWidth={PRODUCTS_GALLERY_MIN_COLUMN_WIDTH}
      className={className}
    >
      {loadingProducts.map((_loadingProduct, index) => (
        <ProductCardLoading key={index} />
      ))}
    </GridWithInnerBorder>
  );
};
