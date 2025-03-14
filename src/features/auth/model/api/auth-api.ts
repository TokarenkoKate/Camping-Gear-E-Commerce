import { ApiEndpoint } from "@/shared/config/api/api-enpoints";
import { Credentials } from "../types/auth-form";
import { ApiPost } from "@/shared/config/api/api-methods";
import { User } from "@/entities/user";

export const AuthApi = {
  login: (body: Credentials) =>
    ApiPost<User>(`${ApiEndpoint.auth}/login`, body),

  signup: (body: Credentials) =>
    ApiPost<User>(`${ApiEndpoint.auth}/signup`, body),
};
