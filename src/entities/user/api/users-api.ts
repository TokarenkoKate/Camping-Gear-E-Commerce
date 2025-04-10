import { ApiEndpoint } from "@/shared/config/api/api-endpoints";
import { ApiPatch } from "@/shared/config/api/api-methods";
import { UpdateUserRequestBody } from "../model/types/update-user";
import { User } from "../model/types/user";

export const UsersApi = {
  updateUser: (body: UpdateUserRequestBody) =>
    ApiPatch<User>(ApiEndpoint.users, body),
};
