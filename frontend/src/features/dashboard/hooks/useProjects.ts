import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../api/projects.api";

export function useProjects() {
  const query = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return query;
}
