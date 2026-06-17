// auth.api.ts

import axiosInstance from "./axios";
import type {
  LoginPayload,
  RegisterPayload,
} from "../types/auth";

export const loginApi = (data: LoginPayload) =>
  axiosInstance.post("/auth/login", data);

export const registerApi = (data: RegisterPayload) =>
  axiosInstance.post("/auth/register", data);

export const pendingUsersApi = () =>
  axiosInstance.get("/auth/pending-users");

export const approveUserApi = (
  id: string,
  role: string
) =>
  axiosInstance.patch(
    `/auth/approve/${id}`,
    { role }
  );