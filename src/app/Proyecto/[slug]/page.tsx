/* eslint-disable @next/next/no-async-client-component */

import { notFound } from "next/navigation";
import { Projects } from "@/app/types";
import ProjectPage from "./ProjectPage";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // Obtenemos el slug de los parámetros
    const { slug } = await params;

    // Obtén los proyectos desde un archivo JSON o API
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/data/Projects.json`
    );
    const projects: Projects[] = await response.json();

    // Buscamos el proyecto correspondiente al slug
    const project = projects.find((project) => project.name === slug);

    // Si no encontramos el proyecto, devolvemos un 404
    if (!project) {
        notFound();
    }

    return <ProjectPage project={project} />;
}
