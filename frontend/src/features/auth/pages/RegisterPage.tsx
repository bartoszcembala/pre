import { useForm } from "react-hook-form";
import type { RegisterFormValues } from "../types/auth.types";
import { useRegister } from "../hooks/useRegister";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormValues>({
    defaultValues: { email: "", name: "", password: "" },
  });

  const mutation = useRegister();

  async function onSubmit(data: RegisterFormValues) {
    await mutation.mutateAsync(data);
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: "Email is required" })} />
        {errors.email && <p>{errors.email.message}</p>}

        <input {...register("name", { required: "Name is required" })} />
        {errors.name && <p>{errors.name.message}</p>}

        <input
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
