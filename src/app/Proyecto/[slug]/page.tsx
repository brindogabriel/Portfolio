/* eslint-disable @next/next/no-async-client-component */

import { notFound } from "next/navigation";
import { Projects } from "@/app/types";
import ProjectPage from "./ProjectPage";
import projectsData from "../../../../public/data/Projects.json";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // Obtenemos el slug de los parámetros
    const { slug } = await params;

    // Usamos directamente los datos importados del JSON
    const projects: Projects[] = projectsData;

    // Buscamos el proyecto correspondiente al slug
    const project = projects.find((project) => project.name === slug);

    // Si no encontramos el proyecto, devolvemos un 404
    if (!project) {
        notFound();
    }

    return <ProjectPage project={project} />;
}
