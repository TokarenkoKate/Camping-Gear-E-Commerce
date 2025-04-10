import {
  ApiAxiosError,
  AxiosMultipleErrors,
} from "@/shared/types/api/api-errors";

export const isMultipleErrorsType = (
  error: ApiAxiosError
): error is AxiosMultipleErrors => {
  return Boolean((error as AxiosMultipleErrors).request?.data.errors);
};
