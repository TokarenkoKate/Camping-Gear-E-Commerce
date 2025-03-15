import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { appRoutesPaths } from "@/shared/const/router";
import { AuthFormValues } from "../types/auth-form";
import { useAuthMutations } from "./use-auth-mutations";

export const useLogin = () => {
  const { loginMutation } = useAuthMutations();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || appRoutesPaths.home;

  const onSubmitForm = (formValues: AuthFormValues) => {
    loginMutation.mutate(formValues, {
      onSuccess: () => {
        toast.success("You logged in!");

        /**
         * Send user back to the page user tried to visit
         * when redirected to the login page.
         */
        navigate(from, { replace: true });
      },
    });
  };

  return onSubmitForm;
};
