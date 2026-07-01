import { api } from "../../../shared/axios";
import type { CreateProjectForm } from "../types/project.types";

export async function getProjects() {
  const { data } = await api.get("http://localhost:4000/projects/");

  return data;
}

export async function getProject(projectId:string) {
  const {data} = await api.get(`http://localhost:4000/projects/${projectId}`);
  
  return data;
}

export async function createProject(projectData: CreateProjectForm) {
  const { data } = await api.post(
    "http://localhost:4000/projects/",
    projectData,
  );

  return data;
}
