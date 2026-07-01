import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../api/tasks.api";

export function useCreateTask() {
    const queryClient = useQueryClient()
  
    const mutation = useMutation({
        mutationFn: createTask,
     onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['tasks', variables.projectId],
      });
    },
    })

    return mutation
}