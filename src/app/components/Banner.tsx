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
                        src="/images/Yo.png" // Reemplaza esto con la ruta de tu foto
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
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Ver Proyectos
                    </a>
                    <a
                        href="./doc/CV_GABRIEL_BRINDO.pdf"
                        className="bg-transparent hover:bg-white/10 text-white font-semibold py-2 px-4 border border-white rounded"
                    >
                        Ver CV
                    </a>
                </div>
            </div>
        </div>
    );
}
