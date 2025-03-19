import {
  ApiQueryParams,
  ApiInstanceOptions,
} from "@/shared/types/api/api-types";
import { ApiContentType } from "./api-content-type";
import { apiInstance } from "./api-instance";

const defaultContentType = ApiContentType.JSON;
const defaultOptions = { useBearer: true, contentType: defaultContentType };
const defaultPostOptions = { useBearer: true, contentType: defaultContentType };

export const ApiGet = <T>({
  endpoint,
  queryParams,
  options = defaultOptions,
}: {
  endpoint: string;
  queryParams?: ApiQueryParams;
  options?: ApiInstanceOptions;
}): Promise<T> => {
  const { useBearer, skipErrorInterceptor = false, contentType } = options;

  return apiInstance(useBearer, skipErrorInterceptor)
    .get<T>(endpoint, {
      params: queryParams,
      headers: {
        "Content-Type": contentType || defaultContentType,
      },
    })
    .then((r) => r.data);
};

export const ApiPatch = <T>(
  endpoint: string,
  body?: object,
  options: ApiInstanceOptions = defaultPostOptions,
  queryParams?: ApiQueryParams
): Promise<T> => {
  const { useBearer, contentType } = options;
  return apiInstance(useBearer)
    .patch<T>(endpoint, body, {
      params: queryParams,
      headers: {
        "Content-Type": contentType || defaultContentType,
      },
    })
    .then((r) => r.data);
};

export const ApiPut = <T>(
  endpoint: string,
  body: object,
  options: ApiInstanceOptions = defaultPostOptions
): Promise<T> => {
  const { useBearer, contentType } = options;

  return apiInstance(useBearer)
    .put<T>(endpoint, body, {
      headers: {
        "Content-Type": contentType || defaultContentType,
      },
    })
    .then((r) => r.data);
};

export const ApiPost = <T>(
  endpoint: string,
  body?: object,
  options: { useBearer?: boolean; contentType?: string } = defaultPostOptions
): Promise<T> => {
  const { useBearer, contentType } = options;

  return apiInstance(useBearer)
    .post<T>(endpoint, body, {
      headers: {
        "Content-Type": contentType || defaultContentType,
      },
    })
    .then((r) => r.data);
};

export const ApiDelete = <T>(
  endpoint: string,
  options: ApiInstanceOptions = defaultOptions
): Promise<T> => {
  const { useBearer } = options;

  return apiInstance(useBearer)
    .delete<T>(endpoint)
    .then((r) => r.data);
};
