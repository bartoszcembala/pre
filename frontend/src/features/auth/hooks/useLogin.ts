import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth.api";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import type { ApiError } from "../../../shared/api";
import { useNavigate } from "react-router-dom";

export function useLogin() {
const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Logged in successfully");
         navigate("/");
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.response?.data.message ?? "Something went wrong");
    },
  });

  return mutation;
}
