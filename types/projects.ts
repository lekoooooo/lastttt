export type Project = {
  id: string;
  title: string;
  description: string;
  client?: string;
  year: number;
  role: string;
  demoUrl?: string;
  githubUrl?: string;
  image: string;
  language?: string;
  isPrivate?: boolean;
};
