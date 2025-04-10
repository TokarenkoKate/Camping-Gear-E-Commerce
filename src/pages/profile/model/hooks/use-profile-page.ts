import { useLogout } from "@/features/auth";

export const useProfilePage = () => {
  const onLogout = useLogout();

  return { onLogout };
};
