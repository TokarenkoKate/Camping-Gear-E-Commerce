import { ApiContentType } from "../../config/api/api-content-type";

export type ApiInstanceOptions = {
  useBearer?: boolean;
  contentType?: ApiContentType;
  skipErrorInterceptor?: boolean;
};

export type ApiQueryParams = Record<string, unknown>;

export type ApiResponseType<T> = {
  data: T;
};

export type ApiResponseSimple = {
  message: string;
  success: boolean;
};

export type Pager = {
  page: number;
  perPage: number;
  total: number;
};

export type ApiResponseWithPager<T> = {
  pager: Pager;
  data: Array<T>;
  total?: {
    sum: number;
  };
};

export type ApiPagerQueryParams = {
  page?: number;
  perPage?: number;
};
