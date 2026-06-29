import type { ProjectInterface } from "../types/project.types";

export default function ProjectsList({ data }: { data: ProjectInterface[] }) {
  return (
    <div>
      {data.map((project) => (
        <div key={project.id}>
          {project.title} {project.description}
        </div>
      ))}
    </div>
  );
}
