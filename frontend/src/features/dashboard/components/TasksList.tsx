import { useParams } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";
import { useDeleteTask } from "../hooks/useDeleteTask";

export default function TasksList() {
  const { workspaceId } = useParams<{ workspaceId: string }>();
  const { data: tasks } = useTasks(workspaceId!);
  const mutation = useDeleteTask();

  async function handleDelete(id: string) {
    if (!workspaceId) return null;

    mutation.mutateAsync({ workspaceId, taskId: id });
  }

  return (
    <div>
      {tasks?.data.map(
        (task: {
          createdAt: string;
          updatedAt: string;
          id: string;
          title: string;
          description: string;
        }) => (
          <div key={task.id} className="flex flex-col gap-2 border p-4 rounded-md"> 
            <p>
              {" "}
              {task.title}
            </p>{" "}<p>{task.description}{" "}</p>
            <div className="bg-red-500 text-white py-2 px-4 rounded-md cursor-pointer" onClick={() => handleDelete(task.id)}>
              Delete
            </div>
          </div>
        ),
      )}
    </div>
  );
}
