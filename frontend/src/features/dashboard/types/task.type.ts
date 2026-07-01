export interface CreateTaskFormInterface {
    title:string;
    description?:string
}

export interface CreateTaskInterface extends CreateTaskFormInterface{
    projectId: string
}
export interface DeleteTaskInterface {
    taskId: string;
    workspaceId: string;
}