import { ProductCard, ProductSummary } from "@/entities/product";
import { GridWithInnerBorder } from "@/shared/ui";
import {
  ProductGalleryIntroCard,
  ProductGalleryIntroCardProps,
} from "./intro-card/product-gallery-intro-card";
import { PRODUCTS_GALLERY_MIN_COLUMN_WIDTH } from "../model/const/products-gallery";
import { ProductsEmptyGallery } from "./empty/products-empty-gallery";
import { ProductsLoadingGallery } from "./loading/products-loading-gallery";

interface ProductsGalleryProps {
  introCardProps?: ProductGalleryIntroCardProps;
  products: ProductSummary[];
  className?: string;
  isLoading: boolean;
}

export const ProductsGallery = ({
  introCardProps,
  products,
  isLoading,
  className,
}: ProductsGalleryProps) => {
  const isEmpty = !products || !products.length;

  if (isLoading) {
    return <ProductsLoadingGallery className={className} />;
  }

  if (isEmpty) {
    return <ProductsEmptyGallery className={className} />;
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
