import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { Projects } from "@/app/types";

export default function Projects() {
    const [projects, setProjects] = useState<Projects[]>([]);

    useEffect(() => {
        async function fetchProjects() {
            const response = await fetch("/data/Projects.json");
            const data = await response.json();
            setProjects(data);
        }
        fetchProjects();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1
                    className="text-3xl font-bold mb-8 text-center"
                    id="proyectos"
                >
                    Mis Proyectos
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:justify-center">
                    {projects
                        .map((project, index) => (
                            <div
                                key={index}
                                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                            >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {project.name}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {project.description &&
                                        project.description.presentacion}
                                    {project.coworker && (
                                        <span className="block">
                                            Cocreado con mi compañero de
                                            proyecto :{" "}
                                            <a
                                                target="_blank"
                                                href={
                                                    project.coworker?.linkedin
                                                }
                                                className="text-blue-500 hover:underline mx-1"
                                            >
                                                {project.coworker?.name}
                                            </a>
                                        </span>
                                    )}
                                </p>
                                <div className="flex flex-wrap gap-2 my-5">
                                    {project.tecnologies.map((tecnology) => (
                                        <span
                                            key={tecnology}
                                            className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"
                                        >
                                            {tecnology}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    {project.liveLink && (
                                        <Link
                                            href={project.liveLink}
                                            target="_blank"
                                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        >
                                            Conocer sitio
                                        </Link>
                                    )}
                                    <Link
                                        href={`/Proyecto/${project.name}`}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    >
                                        Ver más detalles
                                    </Link>
                                </div>
                            </div>
                        ))
                        .reverse()}
                </div>
            </div>
        </div>
    );
}
