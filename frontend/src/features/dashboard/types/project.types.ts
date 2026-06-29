export interface ProjectInterface {
  createdAt: string;
  updatedAt: string;
  description: string;
  title: string;
  projectMemberId: string;
  id: string;
}

export interface CreateProjectForm {
  title: string;
  description?: string;
}
