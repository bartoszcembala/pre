import { Link } from "react-router";
import type { ProjectInterface } from "../types/project.types";

export default function ProjectsList({ data }: { data: ProjectInterface[] }) {
  return (
    <div>
      {data.map((project) => (
        <Link key={project.id} to={`/projects/${project.id}`}>
          {project.title} {project.description}
        </Link>
      ))}
    </div>
  );
}
