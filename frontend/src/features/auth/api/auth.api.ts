import { api } from "../../../shared/axios";
import type { LoginFormValues, RegisterFormValues } from "../types/auth.types";

export async function register(dto: RegisterFormValues) {
  const { data } = await api.post("/auth/register", dto);

  return data;
}

export async function login(dto: LoginFormValues) {
  const { data } = await api.post("/auth/login", dto);

  return data;
}
