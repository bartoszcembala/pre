import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";
import type { AxiosError } from "axios";
import type { ApiError } from "../../../api";
import { register } from "../api/register.api";

export function useRegister() {
  const mutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success("Account created successfully");
      console.log("success");
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.response?.data.message ?? "Something went wrong");
    },
  });

  return {
    registerMutation: mutation.mutateAsync,
  };
}
