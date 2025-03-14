import { COLOR_CATEGORY_ATTRIBUTE_KEY } from "@/entities/category";
import { ProductAttribute } from "../types/product";

export const getProductColorFromAttributes = (
  productAttributes: ProductAttribute[] | undefined
): string[] | null => {
  if (!productAttributes) {
    return null;
  }

  const colorProductAttribute = productAttributes.find((productAttribute) => {
    return productAttribute.key?.toLowerCase() === COLOR_CATEGORY_ATTRIBUTE_KEY;
  });
  return colorProductAttribute?.values || null;
};
