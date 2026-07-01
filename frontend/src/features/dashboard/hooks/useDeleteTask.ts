import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../api/tasks.api";

export function useDeleteTask() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["tasks", variables.workspaceId] });
    },
  });

  return mutation;
}
