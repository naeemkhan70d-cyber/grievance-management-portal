import {
  loginApi,
  registerApi,
} from "../api/auth.api";
import type {
  LoginPayload,
  RegisterPayload,
} from "../types/auth";

export const loginUser =
  async (
    email: string,
    password: string
  ) => {
    const response =
      await loginApi({
        email,
        password,
      });

    return response.data;
  };

export const registerUser =
  async (
    payload: RegisterPayload
  ) => {
    const response =
      await registerApi(payload);

    return response.data;
  };