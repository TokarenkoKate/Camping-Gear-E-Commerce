import { EMPTY_STRING } from "@/shared/const/common-string";
import { DELAYED_LOADING_TIMEOUT } from "@/shared/const/general";
import { ProfileFormValues } from "../types/profile-form";
import { useAuth, useLogout } from "@/features/auth";
import { useUpdateUser } from "@/entities/user";
import { trimFormValues } from "@/shared/lib/helpers/form/trim-form-values";

export const useProfilePage = () => {
  const user = useAuth();
  const onUpdateUser = useUpdateUser();
  /**
   * Initial values for profile form,
   * take user values from store
   */
  const initialProfileFormValues: ProfileFormValues = {
    email: user?.email || EMPTY_STRING,
    fullName: user?.fullName || EMPTY_STRING,
  };

  const onSubmitProfileForm = async (values: ProfileFormValues) => {
    await Promise.all([
      onUpdateUser(trimFormValues(values)),
      /**
       * Ensuring a minimum "loading" experience to avoid flickers,
       * but still respecting the real request time.
       */
      new Promise((resolve) => setTimeout(resolve, DELAYED_LOADING_TIMEOUT)),
    ]);
  };

  /**
   * User logout callback
   */
  const onLogout = useLogout();

  return { initialProfileFormValues, onSubmitProfileForm, onLogout };
};
