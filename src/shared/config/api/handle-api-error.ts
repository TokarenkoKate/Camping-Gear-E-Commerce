import { toast } from "react-toastify";
import { errorMessages } from "./api-errors";
import { ApiAxiosError } from "@/shared/types/api/api-errors";
import { isMultipleErrorsType } from "@/shared/lib/helpers/api/is-multiple-errors-type";
import { COMMA_SPACE } from "@/shared/const/common-string";

export const handleApiError = (error: ApiAxiosError) => {
  const errorMessage = isMultipleErrorsType(error)
    ? error.response?.data.errors?.join(COMMA_SPACE)
    : error.response?.data?.message;

  switch (error?.response?.status) {
    case 400:
      return toast.error(errorMessage || errorMessages.Error_400, {
        toastId: "err_400",
      });
    case 404:
      return toast.error(errorMessage || errorMessages.Error_Network, {
        toastId: "err_404",
      });
    case 401:
      return toast.error(errorMessage || errorMessages.Error_401, {
        toastId: "err_401",
      });
    case 403:
      return toast.error(errorMessage || errorMessages.Error_403, {
        toastId: "err_403",
      });
    case 500:
      return toast.error(errorMessage || errorMessages.Error_500, {
        toastId: "err_500",
      });
    default:
      return toast.error(errorMessage || errorMessages.Error_Network, {
        toastId: "err_net",
      });
  }
};
