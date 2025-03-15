import { AuthApi } from "./auth-api";
import { useAppDispatch } from "@/shared/lib/hooks/use-app-dispatch";
import { userActions } from "@/entities/user";

export const useGetUserProfile = () => {
  const dispatch = useAppDispatch();

  const handleGetUserProfile = async () => {
    try {
      const user = await AuthApi.me();
      dispatch(userActions.setUserState(user || null));
      return user;
    } catch {
      dispatch(userActions.setUserState(null));
      return null;
    }
  };

  return handleGetUserProfile;
};
