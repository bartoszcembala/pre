import { useQuery } from "@tanstack/react-query";
import { getProject } from "../api/projects.api";

export function useProject(projectId:string) {
    const query = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => getProject(projectId),
    })

    return query
}