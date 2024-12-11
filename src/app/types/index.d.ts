export interface Project {
  id: number,
  name: string,
  description: string,
  tecnologies: Tecnologies[],

 
   githubLink?: string;
    liveLink?: string;
    aboutit?: string;
  defaultCredentials?: {
    username: string;
    password: string;
  };
  coworker?: {
    name: string;
    linkedin: string;
  };
}