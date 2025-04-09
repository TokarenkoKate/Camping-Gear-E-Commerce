import { ApiPagerQueryParams } from "@/shared/types/api/api-types";

export type ArticlesApiQueryParams = ApiPagerQueryParams & {
  categories?: string;
};
