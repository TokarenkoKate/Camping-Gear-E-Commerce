import { User } from "@/entities/user";

export type UserProfileAuthResponse = {
  authenticated: boolean;
  user: User | null;
};
