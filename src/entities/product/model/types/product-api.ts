import { ApiPagerQueryParams } from "@/shared/types/api/api-types";

export type ProductsApiAttributesParams = Record<string, any>;

export type ProductsApiQueryParams = ProductsApiAttributesParams &
  ApiPagerQueryParams & {
    categoryId: number | undefined;
  };
