import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useAppDispatch } from "@/shared/lib/hooks/use-app-dispatch";
import { userActions } from "@/entities/user";
import { AuthApi } from "./auth-api";
import { queryClient } from "@/app/providers/query";
import { UserProfileAuthResponse } from "../types/auth";
import { isEmptyOrNil } from "@/shared/lib/helpers/is-empty-or-nil";

const USER_PROFILE_QUERY_KEY = "user_profile";

const userProfileQuery: UseQueryOptions<UserProfileAuthResponse> = {
  queryKey: [USER_PROFILE_QUERY_KEY],
  refetchOnWindowFocus: false,
  enabled: false,
  queryFn: () => AuthApi.me(),
};

/**
 * Query request to get user profile and check authentication
 */
export const useGetUserProfile = () => {
  const dispatch = useAppDispatch();

  const userProfileQueryKey = useQuery(userProfileQuery);
  const authResponse = userProfileQueryKey.data;

  if (userProfileQueryKey.isSuccess && isEmptyOrNil(authResponse?.user)) {
    dispatch(userActions.setUserState(authResponse?.user || null));
  } else if (userProfileQueryKey.isError) {
    dispatch(userActions.setUserState(null));
  }
};

/**
 * Helper to fetch profile in app main loader
 */
export const handleFetchProfile = async () => {
  try {
    await queryClient.fetchQuery(userProfileQuery);
  } catch (err: unknown) {
    console.error(err);
  }
};
