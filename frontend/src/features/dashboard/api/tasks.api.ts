import { api } from "../../../shared/axios";
import type { CreateTaskInterface, DeleteTaskInterface } from "../types/task.type";

export async function createTask(values: CreateTaskInterface) {
    const data = await api.post('http://localhost:4000/tasks', values)
    console.log(values)
    return data
}

export async function getTasks(workspaceId: string) {
    const data = await api.get(`http://localhost:4000/tasks/${workspaceId}`)
    
    return data
}

export async function deleteTask(values: DeleteTaskInterface ) {
    const data = await api.delete(`http://localhost:4000/tasks/${values.taskId}`)

    return data
}