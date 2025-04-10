export interface User {
  id: number;
  fullName: string;
  email: string;
  role: UserRole[];
}

export interface UserRole {
  id: number;
  alias: string;
  name: string;
}
