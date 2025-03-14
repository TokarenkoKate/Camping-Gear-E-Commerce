import { useParams } from "react-router-dom";
import { useGetProductQuery, useGetRelatedProducts } from "@/entities/product";
import { ProductPageParams } from "../types/product-page";
import { useDelayedLoading } from "@/shared/lib/hooks/use-delayed-loading";

/**
 * Hook used to manage products details
 */
export const useProductPage = () => {
  /**
   * Get productId from search params
   */
  const { id } = useParams<ProductPageParams>();
  const productId = Number(id);

  /**
   * Product request query
   */
  const {
    data: product,
    isLoading: isDataLoading,
    isError,
  } = useGetProductQuery(productId);

  /**
   * Related products request query
   */
  const { data: relatedProducts, isLoading: isRelatedProductsLoading } =
    useGetRelatedProducts(productId);

  /**
   * Product loading state,
   * delay loading indicator for a moment to avoid page flickering
   */
  const delayedLoading = useDelayedLoading(isDataLoading);
  const isLoading = delayedLoading || isRelatedProductsLoading;

  return {
    product,
    isLoading,
    isError,
    relatedProducts,
  };
};
