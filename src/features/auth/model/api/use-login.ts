import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { appRoutesPaths } from "@/shared/const/router";
import { AuthFormValues } from "../types/auth-form";
import { useAuthMutations } from "./use-auth-mutations";

export const useLogin = () => {
  const { loginMutation } = useAuthMutations();
  const navigate = useNavigate();

  const onSubmitForm = (formValues: AuthFormValues) => {
    loginMutation.mutate(formValues, {
      onSuccess: () => {
        toast.success("You logged in!");
        navigate(appRoutesPaths.home);
      },
    });
  };

  return onSubmitForm;
};
