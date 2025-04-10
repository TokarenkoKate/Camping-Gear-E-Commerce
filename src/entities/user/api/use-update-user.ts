import { toast } from "react-toastify";
import { User, userActions } from "@/entities/user";
import { useAppDispatch } from "@/shared/lib/hooks/use-app-dispatch";
import { UpdateUserRequestBody } from "../model/types/update-user";
import { useUsersMutations } from "./use-users-mutations";

export const useUpdateUser = () => {
  const dispatch = useAppDispatch();
  const { updateUserMutation } = useUsersMutations();

  const onUpdateUser = (body: UpdateUserRequestBody) => {
    updateUserMutation.mutate(body, {
      onSuccess: (user: User) => {
        dispatch(userActions.setUserState(user || null));
        toast.success("Your profile is successfully updated");
      },
    });
  };

  return onUpdateUser;
};
