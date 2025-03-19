import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { errorMessages } from "./api-errors";

export const handleApiError = (error: AxiosError) => {
  switch (error?.response?.status) {
    case 400:
      return toast.error(errorMessages.Error_400, { toastId: "err_400" });
    case 404:
      return toast.error(
        error?.response?.data
          ? error?.response?.data?.error
          : errorMessages.Error_Network,
        {
          toastId: "err_404",
        }
      );
    case 401:
      return toast.error(errorMessages.Error_401, { toastId: "err_401" });
    case 403:
      return toast.error(errorMessages.Error_403, { toastId: "err_403" });
    case 500:
      return toast.error(errorMessages.Error_500, { toastId: "err_500" });
    default:
      return toast.error(errorMessages.Error_Network, { toastId: "err_net" });
  }
};
