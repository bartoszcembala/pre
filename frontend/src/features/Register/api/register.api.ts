import { api} from "../../../axios";
import type { RegisterFormValues } from "../types/auth";

export async function register(dto: RegisterFormValues) {
  const { data } = await api.post("/auth/register", dto);

  return data;
}
