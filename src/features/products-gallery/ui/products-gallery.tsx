import { ProductCard } from "@/entities/product";
import { Product } from "@/entities/product/model/types/product";
import { GridWithInnerBorder } from "@/shared/ui/grid-with-inner-border/grid-with-inner-border";
import {
  ProductGalleryIntroCard,
  ProductGalleryIntroCardProps,
} from "./product-gallery-intro-card";
import { PRODUCTS_GALLERY_MIN_COLUMN_WIDTH } from "../model/const/products-gallery";

interface ProductsGalleryProps {
  introCardProps?: ProductGalleryIntroCardProps;
  products: Product[];
  className?: string;
}

export const ProductsGallery = ({
  introCardProps,
  products,
  className,
}: ProductsGalleryProps) => {
  const introCard = introCardProps ? (
    <ProductGalleryIntroCard
      title={introCardProps.title}
      subtitle={introCardProps.subtitle}
      linkText={introCardProps.linkText}
      linkTo={introCardProps.linkText}
    />
  ) : null;

  const itemsLength = introCard ? products.length + 1 : products.length;

  return (
    <GridWithInnerBorder
      itemsLength={itemsLength}
      columnMinWidth={PRODUCTS_GALLERY_MIN_COLUMN_WIDTH}
      className={className}
    >
      {introCard}
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </GridWithInnerBorder>
  );
};
