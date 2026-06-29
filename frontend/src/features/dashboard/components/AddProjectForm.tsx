import { useForm } from "react-hook-form";
import type { CreateProjectForm } from "../types/project.types";
import { useCreateProject } from "../hooks/useCreateProject";

export default function AddProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateProjectForm>();

  const mutation = useCreateProject();

  async function onSubmit(data: CreateProjectForm) {
    await mutation.mutateAsync(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: "Title is required" })} />
      {errors.title && <p>{errors.title.message}</p>}

      <input {...register("description")} />

      <button type="submit">Create</button>
    </form>
  );
}
