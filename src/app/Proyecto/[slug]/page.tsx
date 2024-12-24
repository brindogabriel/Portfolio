import { notFound } from "next/navigation"; // Para manejar el error 404
import { Projects } from "@/app/types";
import GalleryWithLightbox from "./components/GalleryWithLightbox";
import { SiGithub } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // Obtenemos el slug de los parámetros
    const { slug } = await params;

    // Obtén los proyectos desde un archivo JSON o API
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/data/Projects.json`
    );
    const projects: Projects[] = await response.json();

    // Buscamos el proyecto correspondiente al slug
    const project = projects.find((project) => project.name === slug);

    // Si no encontramos el proyecto, devolvemos un 404
    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800 rounded-lg shadow-lg p-8">
                    <h1 className="text-4xl font-extrabold text-white mb-6">
                        {project.name}
                    </h1>
                    <div className="text-lg leading-relaxed mb-6 text-gray-300">
                        {project.description && (
                            <div className="mb-4">
                                <h2 className="text-2xl font-bold mb-2 text-gray-100">
                                    Problema
                                </h2>
                                <p>{project.description.problema}</p>
                                <h2 className="text-2xl font-bold mb-2 text-gray-100">
                                    Solución
                                </h2>
                                <p>{project.description.solucion}</p>
                            </div>
                        )}
                        {project.coworker && (
                            <div className="mb-4">
                                Hecho con mi compañero de proyecto{" "}
                                <a
                                    target="_blank"
                                    href={project.coworker?.linkedin}
                                    className="text-blue-500 hover:underline mx-1"
                                >
                                    {project.coworker?.name}
                                </a>
                            </div>
                        )}
                        <h2 className="text-2xl font-bold mb-2 text-gray-100">
                            Tecnologías
                        </h2>
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
                    </div>

                    {/* Aquí podrías agregar tu galería o cualquier otro contenido */}
                    {/* Galería con Lightbox */}
                    {project.images && project.images.length > 0 && (
                        <GalleryWithLightbox images={project.images} />
                    )}
                    <div className="flex justify-start space-x-4 mt-8">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-all"
                            >
                                <BsGlobe className="inline mx-1" /> Ver Proyecto
                            </a>
                        )}
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-all"
                            >
                                <SiGithub className="inline mx-1" /> Ver
                                Repositorio
                            </a>
                        )}
                        <a
                            href="../#proyectos"
                            className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded transition-all"
                        >
                            <BiArrowBack className="inline mx-1" /> Volver a
                            proyectos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
