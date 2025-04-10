import { useMutation } from "@tanstack/react-query";
import { UpdateUserRequestBody } from "../model/types/update-user";
import { UsersApi } from "./users-api";

const UPDATE_USER_MUTATION = "updateUser";

export const useUsersMutations = () => {
  const updateUserMutation = useMutation({
    mutationKey: [UPDATE_USER_MUTATION],
    mutationFn: (body: UpdateUserRequestBody) => UsersApi.updateUser(body),
  });

  return { updateUserMutation };
};
