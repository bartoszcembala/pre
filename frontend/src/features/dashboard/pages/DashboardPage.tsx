import AddProjectForm from "../components/AddProjectForm";
import ProjectsList from "../components/ProjectsList";
import { useProjects } from "../hooks/useProjects";

export default function DashboardPage() {
  const { data, isPending } = useProjects();

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>

      <AddProjectForm />
      <ProjectsList data={data} />
    </div>
  );
}
