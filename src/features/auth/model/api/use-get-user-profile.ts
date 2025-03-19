import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useAppDispatch } from "@/shared/lib/hooks/use-app-dispatch";
import { User, userActions } from "@/entities/user";
import { AuthApi } from "./auth-api";
import { queryClient } from "@/app/providers/query";

const USER_PROFILE_QUERY_KEY = "user_profile";

const userProfileQuery: UseQueryOptions<User> = {
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
  const user = userProfileQueryKey.data;

  if (userProfileQueryKey.isSuccess && user) {
    dispatch(userActions.setUserState(user || null));
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
