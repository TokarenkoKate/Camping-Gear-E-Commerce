import { userActions } from "@/entities/user";
import { appRoutesPaths } from "@/shared/const/router";
import { useAppDispatch } from "@/shared/lib/hooks/use-app-dispatch";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthMutations } from "./use-auth-mutations";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const { logoutMutation } = useAuthMutations();
  const navigate = useNavigate();

  const onLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        dispatch(userActions.setUserState(null));
        toast.success("Logged out successfully");
        navigate(appRoutesPaths.home, { replace: true });
      },
    });
  };

  return onLogout;
};
