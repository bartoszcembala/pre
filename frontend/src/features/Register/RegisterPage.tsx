import { useForm } from "react-hook-form";
import type { RegisterFormValues } from "./types/auth";
import { useRegister } from "./hooks/useRegister";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormValues>();

  const { registerMutation,  } = useRegister();

  async function onSubmit(values: RegisterFormValues) {
    registerMutation(values);
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
