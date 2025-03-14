import { useMutation } from "@tanstack/react-query";
import { AuthApi } from "./auth-api";
import { Credentials } from "../types/auth-form";

const LOGIN_MUTATION_KEY = "login";
const SIGNUP_MUTATION_KEY = "register";

export const useAuthMutations = () => {
  const loginMutation = useMutation({
    mutationKey: [LOGIN_MUTATION_KEY],
    mutationFn: (credentials: Credentials) => AuthApi.login(credentials),
  });

  const signupMutation = useMutation({
    mutationKey: [SIGNUP_MUTATION_KEY],
    mutationFn: (credentials: Credentials) => AuthApi.signup(credentials),
  });

  return { loginMutation, signupMutation };
};
