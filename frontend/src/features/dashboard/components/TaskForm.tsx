import { useForm } from "react-hook-form";
import type { CreateTaskFormInterface } from "../types/task.type";
import { useCreateTask } from "../hooks/useCreateTask";
import { useParams } from "react-router";

export default function TaskForm() {
  const { workspaceId } = useParams<{ workspaceId: string }>();
  const mutation = useCreateTask();
  const { register, handleSubmit } = useForm<CreateTaskFormInterface>({
    defaultValues: { title: "", description: "" },
  });

  async function onSubmit(values: CreateTaskFormInterface) {
    console.log({ ...values, projectId: workspaceId! });
    await mutation.mutateAsync({ ...values, projectId: workspaceId! });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: "Title is required" })} />
      <input
        {...register("description", { required: "Description is required" })}
      />
      <button type="submit">Create Task</button>
    </form>
  );
}
