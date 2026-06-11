export type UserRole =
  | "citizen"
  | "officer"
  | "admin";

export interface User {
     name: string;
  email: string;
  role: UserRole;
}