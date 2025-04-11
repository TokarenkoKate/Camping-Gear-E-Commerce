import {
  ApiAxiosError,
  AxiosMultipleErrors,
} from "@/shared/types/api/api-errors";

export const isMultipleErrorsType = (
  error: ApiAxiosError
): error is AxiosMultipleErrors => {
  return (error as AxiosMultipleErrors).response?.data.errors !== undefined;
};
