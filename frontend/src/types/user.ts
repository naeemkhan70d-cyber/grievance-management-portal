export type UserRole =
  | "citizen"
  | "officer"
  | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role?: UserRole;
  status?: "pending" | "approved";
}

export interface Officer {
  id: string;
  name: string;
  email: string;
}