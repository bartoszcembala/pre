import { useForm } from "react-hook-form";
import type { LoginFormValues } from "../types/auth.types";
import { useLogin } from "../hooks/useLogin";

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
  });

  const mutation = useLogin();

  async function onSubmit(data: LoginFormValues) {
    await mutation.mutateAsync(data);
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: "Email is required" })} />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
        />{" "}
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
