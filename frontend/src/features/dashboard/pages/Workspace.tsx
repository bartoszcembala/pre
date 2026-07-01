import { useProject } from "../hooks/useProject";
import { useParams } from "react-router";

import TasksList from "../components/TasksList";
import TaskForm from "../components/TaskForm";

export default function Workspace() {
  const { workspaceId } = useParams<{ workspaceId: string }>();
  const { data } = useProject(workspaceId!);

  return (
    <div>
      <h1>{data?.title}</h1>
      <TaskForm />
      <TasksList />
    </div>
  );
}
