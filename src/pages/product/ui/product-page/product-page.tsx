import { NOT_FOUND_PATH } from "@/shared/const/router";
import { UiBox } from "@/shared/ui";
import { useNavigate } from "react-router-dom";
import { useProductPage } from "../../model/lib/use-product-page";
import { ProductAttributes } from "../product-attributes/product-attributes";
import { ProductInfo } from "../product-info/product-info";
import { ProductSimilarProducts } from "../product-similar-products/product-similar-products";
import { ProductVisuals } from "../product-visuals/product-visuals";
import { ProductLoading } from "../product-loading/product-info-loading";
import cls from "./product-page.m.scss";

export const ProductPage = () => {
  const navigate = useNavigate();
  const { product, isLoading, isError, relatedProducts } = useProductPage();

  if (isLoading) {
    return (
      <UiBox className={cls.productPage}>
        <ProductLoading />
      </UiBox>
    );
  }

  if (isError || !product) {
    navigate(NOT_FOUND_PATH);
    return <></>;
  }

  return (
    <UiBox className={cls.productPage}>
      <ProductInfo product={product} relatedProducts={relatedProducts} />
      <ProductVisuals
        title={product.title}
        description={product.description}
        detailsImages={product.detailsImages}
      />
      <ProductAttributes
        attributes={product.attributes}
        detailsImages={product.detailsImages}
      />
      <ProductSimilarProducts productId={product.id} />
    </UiBox>
  );
};
