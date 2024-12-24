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
                                            className="py-2.5 px-5 me-2 inline-flex items-center  mx-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-800 mx-2 dark:text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Conocer sitio
                                        </Link>
                                    )}
                                    <Link
                                        href={`/Proyecto/${project.name}`}
                                        className="text-white inline-flex items-center  mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    >
                                        <svg
                                            className="w-6 h-6 mx-2 text-gray-800 dark:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm4.996 2a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4.004 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4.004 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
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
