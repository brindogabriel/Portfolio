"use client";
import React, { useEffect, useState } from "react";
import { Project } from "../types";

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);

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
                    Mis Projectos
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                    {project.description}{" "}
                                    {project.coworker && (
                                        <a
                                            href={project.coworker.linkedin}
                                            target="_blank"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            {project.coworker.name}
                                        </a>
                                    )}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4 max-h-[100px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                                    {project.tecnologies.map(
                                        (tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap"
                                            >
                                                {tag}
                                            </span>
                                        )
                                    )}
                                </div>
                                {project.defaultCredentials && (
                                    <div className="mt-4 p-3 bg-gray-900 rounded-lg">
                                        <p className="text-sm text-gray-300">
                                            Usuario por defecto:{" "}
                                            <span className="text-blue-400">
                                                {
                                                    project.defaultCredentials
                                                        .username
                                                }
                                            </span>
                                        </p>
                                        <p className="text-sm text-gray-300">
                                            Contraseña por defecto:{" "}
                                            <span className="text-blue-400">
                                                {
                                                    project.defaultCredentials
                                                        .password
                                                }
                                            </span>
                                        </p>
                                    </div>
                                )}

                                <div className="flex justify-between mt-4">
                                    {project.githubLink && (
                                        <a
                                            target="_blank"
                                            href={project.githubLink}
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            GitHub
                                            <svg
                                                className="w-6 h-6 text-gray-800 dark:text-white mx-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                    {(project.liveLink || project.aboutit) && (
                                        <a
                                            target="_blank"
                                            href={
                                                project.liveLink ||
                                                project.aboutit
                                            }
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        >
                                            Ver proyecto
                                            <svg
                                                className="w-3.5 h-3.5 ml-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                        .reverse()}
                </div>
            </div>
        </div>
    );
}
