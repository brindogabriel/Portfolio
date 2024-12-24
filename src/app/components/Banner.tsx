import Image from "next/image";

export default function Banner() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Imagen de Fondo */}
            <Image
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713"
                alt="Imagen de fondo"
                width={1920}
                height={1080}
                className="object-cover object-center absolute inset-0 w-full h-full z-0"
                priority
            />

            {/* Superposición Oscura */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Contenido */}
            <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
                {/* Tu foto personal */}
                <div className="mb-8">
                    <Image
                        src="/images/Yo.png"
                        alt="Tu nombre"
                        width={150}
                        height={150}
                        className="rounded-full border-4 border-white shadow-lg"
                    />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Transformando ideas en
                    <span className="block">experiencias digitales</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-8">
                    Soy desarrollador web apasionado por crear soluciones
                    modernas y efectivas, siempre con foco en la experiencia del
                    usuario. Hincha de Boca y amante del café, pongo la misma
                    pasión en cada proyecto que en la vida
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="#proyectos"
                        className="bg-blue-500  text-center inline-flex items-center me-2 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
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
                                d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Ver Proyectos
                    </a>
                    <a
                        href="./doc/CV_BRINDO_GABRIEL.pdf"
                        className="bg-transparent inline-flex items-center me-2 mx-2 hover:bg-white/10 text-white font-semibold py-2 px-4 border border-white rounded"
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
                                d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.376A2.626 2.626 0 0 0 15 15.375v-1.75A2.626 2.626 0 0 0 12.375 11H11Zm1 5v-3h.375a.626.626 0 0 1 .625.626v1.748a.625.625 0 0 1-.626.626H12Zm5-5a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1h1a1 1 0 1 0 0-2h-2Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Ver CV
                    </a>
                </div>
            </div>
        </div>
    );
}
