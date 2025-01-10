import { ProductCard } from "@/entities/product";
import { Product } from "@/entities/product/model/types/product";
import { GridWithInnerBorder } from "@/shared/ui/grid-with-inner-border/grid-with-inner-border";
import { PRODUCTS_GALLERY_MIN_COLUMN_WIDTH } from "../model/const/products-gallery";

interface ProductsGalleryProps {
  products: Product[];
}

export const ProductsGallery = ({ products }: ProductsGalleryProps) => {
  return (
    <GridWithInnerBorder
      itemsLength={products.length}
      columnMinWidth={PRODUCTS_GALLERY_MIN_COLUMN_WIDTH}
      withOuterBorder
    >
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </GridWithInnerBorder>
  );
};
