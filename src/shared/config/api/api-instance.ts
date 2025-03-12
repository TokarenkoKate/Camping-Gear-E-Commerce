import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { handleApiError } from "./handle-api-error";
import { EMPTY_STRING } from "@/shared/const/common-string";

export const getCurrentUserToken = () => {
  return EMPTY_STRING;
};

export const apiInstance = (useBearer: boolean = true) => {
  const token = getCurrentUserToken();
  const AxiosConfig: AxiosRequestConfig = {
    baseURL: process.env.APP_API_HOST,
    withCredentials: true,
  };

  if (token && useBearer) {
    AxiosConfig.headers = {
      ...AxiosConfig.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  const axiosInstance: AxiosInstance = axios.create(AxiosConfig);

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (axios.isAxiosError(error)) handleApiError(error);
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
