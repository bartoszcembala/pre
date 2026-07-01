import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/tasks.api";

export function useTasks(workspaceId: string){
    const query = useQuery({
        queryKey: ['tasks', workspaceId],
        queryFn: ()=> getTasks(workspaceId)
    })

    return query
}