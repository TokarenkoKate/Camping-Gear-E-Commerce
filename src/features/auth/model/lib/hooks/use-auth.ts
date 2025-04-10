import { userSelector } from "@/entities/user";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const user = useSelector(userSelector);

  return user;
};
