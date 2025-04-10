import { ApiEndpoint } from "@/shared/config/api/api-endpoints";
import { Credentials } from "../types/auth-form";
import { ApiGet, ApiPost } from "@/shared/config/api/api-methods";
import { User } from "@/entities/user";
import { UserProfileAuthResponse } from "../types/auth";

export const AuthApi = {
  me: () =>
    ApiGet<UserProfileAuthResponse>({
      endpoint: `${ApiEndpoint.auth}/me`,
      options: {
        skipErrorInterceptor: true,
      },
    }),

  login: (body: Credentials) =>
    ApiPost<User>(`${ApiEndpoint.auth}/login`, body),

  signup: (body: Credentials) =>
    ApiPost<User>(`${ApiEndpoint.auth}/signup`, body),

  logout: () => ApiPost<string>(`${ApiEndpoint.auth}/logout`),
};
