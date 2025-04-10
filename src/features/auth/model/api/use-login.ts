import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { appRoutesPaths } from "@/shared/const/router";
import { AuthFormValues } from "../types/auth-form";
import { useAuthMutations } from "./use-auth-mutations";
import { userActions } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib/hooks/use-app-dispatch";
import { submitWithMinDelay } from "@/shared/lib/helpers/form/submit-with-min-delay";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  /**
   * Send user back to the page user tried to visit
   * when redirected to the login page.
   */
  const location = useLocation();
  const from = location.state?.from?.pathname || appRoutesPaths.home;

  const { loginMutation } = useAuthMutations();

  const onSubmitForm = async (formValues: AuthFormValues) => {
    await submitWithMinDelay(loginMutation, formValues, (user) => {
      dispatch(userActions.setUserState(user || null));
      toast.success("You logged in!");
      navigate(from, { replace: true });
    });
  };

  return onSubmitForm;
};
