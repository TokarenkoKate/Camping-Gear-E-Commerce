import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { appRoutesPaths } from "@/shared/const/router";
import { AuthFormValues } from "../types/auth-form";
import { useAuthMutations } from "./use-auth-mutations";
import { submitWithMinDelay } from "@/shared/lib/helpers/form/submit-with-min-delay";

export const useSignUp = () => {
  const { signupMutation } = useAuthMutations();
  const navigate = useNavigate();

  const onSubmitForm = async (formValues: AuthFormValues) => {
    await submitWithMinDelay(signupMutation, formValues, () => {
      toast.success("You successfully signed up!");
      navigate(appRoutesPaths.login);
    });
  };

  return onSubmitForm;
};
