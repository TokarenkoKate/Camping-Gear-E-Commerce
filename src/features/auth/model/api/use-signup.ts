import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { appRoutesPaths } from "@/shared/const/router";
import { AuthFormValues } from "../types/auth-form";
import { useAuthMutations } from "./use-auth-mutations";

export const useSignUp = () => {
  const { signupMutation } = useAuthMutations();
  const navigate = useNavigate();

  const onSubmitForm = (formValues: AuthFormValues) => {
    signupMutation.mutate(formValues, {
      onSuccess: () => {
        toast.success("You successfully signed up!");
        navigate(appRoutesPaths.login);
      },
    });
  };

  return onSubmitForm;
};
