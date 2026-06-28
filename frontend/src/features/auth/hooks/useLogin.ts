import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth.api";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import type { ApiError } from "../../../shared/api";

export function useLogin() {
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Logged in successfully");
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.response?.data.message ?? "Something went wrong");
    },
  });

  return mutation;
}
