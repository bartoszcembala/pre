import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject } from "../api/projects.api";

export function useCreateProject() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createProject,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  return mutation;
}
