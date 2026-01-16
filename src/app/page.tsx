import Image from "next/image";

import Link from "next/link";
import {
    Github,
    Linkedin,
    Mail,
    ArrowRight,
    Globe,
    Code,
    Layers,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SmoothScrollLink from "@/app/components/smooth-scroll-link";
import ContactForm from "@/app/components/ContactForm";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#1a1410] text-[#e8d0b0] font-medieval">
            {/* Header/Navbar */}
            <header className="border-b border-[#8c6d4b] bg-[#2a1e18]/80 backdrop-blur-sm fixed w-full z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/images/favicon.png"
                            width={40}
                            height={40}
                            alt="Logo"
                            className="rounded-full border-2 border-[#c19a49]"
                        />
                        <span className="text-xl font-bold text-[#c19a49]">
                            Gabriel Brindo
                        </span>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <SmoothScrollLink
                            href="#inicio"
                            className="hover:text-[#c19a49] transition-colors"
                        >
                            Inicio
                        </SmoothScrollLink>
                        <SmoothScrollLink
                            href="#habilidades"
                            className="hover:text-[#c19a49] transition-colors"
                        >
                            Habilidades
                        </SmoothScrollLink>
                        <SmoothScrollLink
                            href="#proyectos"
                            className="hover:text-[#c19a49] transition-colors"
                        >
                            Proyectos
                        </SmoothScrollLink>
                        <SmoothScrollLink
                            href="#sobre-mi"
                            className="hover:text-[#c19a49] transition-colors"
                        >
                            Sobre Mí
                        </SmoothScrollLink>
                        <SmoothScrollLink
                            href="#contacto"
                            className="hover:text-[#c19a49] transition-colors"
                        >
                            Contacto
                        </SmoothScrollLink>
                    </nav>
                    <Link
                        href="/doc/CV_GABRIEL_BRINDO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="outline"
                            className="border-[#c19a49] text-[#c19a49] hover:bg-[#c19a49]/20 cursor-pointer"
                        >
                            Descargar CV
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section
                id="inicio"
                className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[url('/images/fondobanner.png')] bg-cover bg-center relative"
            >
                <div className="absolute inset-0 bg-[#1a1410]/80"></div>
                <div className="container mx-auto px-4 relative z-1">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-block p-1 border-2 border-[#c19a49] mb-4">
                            <Badge className="bg-[#c19a49] text-[#1a1410] hover:bg-[#a17a29] px-3">
                                Disponible para contratar
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#e8d0b0] leading-tight">
                            Desarrollador Frontend{" "}
                            <span className="text-[#c19a49]">
                                Conquistador de Interfaces
                            </span>
                        </h1>
                        <p className="text-xl mb-8 text-[#e8d0b0]/80">
                            Construyo experiencias web impresionantes con la
                            precisión y estrategia de un guerrero mongol.
                            Especializado en React, Next.js y diseño UI/UX.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <SmoothScrollLink href="#proyectos">
                                <Button className="bg-[#c19a49] hover:bg-[#a17a29] text-[#1a1410] font-bold w-full">
                                    Ver Proyectos{" "}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </SmoothScrollLink>
                            <SmoothScrollLink href="#contacto">
                                <Button
                                    variant="outline"
                                    className="border-[#c19a49] text-[#c19a49] hover:bg-[#c19a49]/20 w-full"
                                >
                                    Contactar
                                </Button>
                            </SmoothScrollLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="habilidades" className="py-16 bg-[#2a1e18]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#c19a49]">
                            Mis Habilidades
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto text-[#e8d0b0]/80">
                            Como un arquero a caballo mongol, domino múltiples
                            tecnologías con precisión y adaptabilidad.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-[#1a1410] border-[#8c6d4b]">
                            <CardHeader>
                                <CardTitle className="text-[#c19a49] flex items-center gap-2">
                                    <Code className="h-5 w-5" /> Frontend
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>React / Next.js</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>TypeScript / JavaScript</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>HTML5 / CSS3</span>
                                    </li>
                                    {/* <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>Redux / Context API</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>React Query / SWR</span>
                                    </li> */}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-[#1a1410] border-[#8c6d4b]">
                            <CardHeader>
                                <CardTitle className="text-[#c19a49] flex items-center gap-2">
                                    <Layers className="h-5 w-5" /> Diseño UI/UX
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>Tailwind CSS</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>Bootstrap</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>Diseño Responsivo</span>
                                    </li>
                                    {/* <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>Animaciones CSS / GSAP</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>Sistemas de Diseño</span>
                                    </li> */}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-[#1a1410] border-[#8c6d4b]">
                            <CardHeader>
                                <CardTitle className="text-[#c19a49] flex items-center gap-2">
                                    <Globe className="h-5 w-5" /> Otras
                                    Habilidades
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>Git / GitHub</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>SEO / Web Vitals</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>Optimización de Rendimiento</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>Accesibilidad Web</span>
                                    </li>
                                    {/* <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#c19a49]"></div>
                                        <span>Testing (Jest, RTL)</span>
                                    </li> */}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="proyectos" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#c19a49]">
                            Mis Conquistas
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto text-[#e8d0b0]/80">
                            Como un khan mongol, he liderado y conquistado
                            diversos territorios digitales. Estos son mis
                            proyectos más destacados.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* <Card className="bg-[#1a1410] border-[#8c6d4b] overflow-hidden">
                            <div className="h-48 overflow-hidden">
                                <Image
                                    src="/placeholder.svg?height=400&width=800"
                                    width={800}
                                    height={400}
                                    alt="Proyecto Landing Page"
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-[#c19a49]">
                                    Landing Page Corporativa
                                </CardTitle>
                                <CardDescription className="text-[#e8d0b0]/70">
                                    Página de aterrizaje optimizada para
                                    conversión
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-[#e8d0b0]/80">
                                    Diseñé y desarrollé una landing page
                                    corporativa con enfoque en SEO, velocidad de
                                    carga y optimización para conversiones.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        Next.js
                                    </Badge>
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        GSAP
                                    </Badge>
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        SEO
                                    </Badge>
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        Analytics
                                    </Badge>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button
                                    variant="outline"
                                    className="border-[#c19a49] text-[#c19a49] hover:bg-[#c19a49]/20"
                                >
                                    Ver Demo
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-[#c19a49] text-[#c19a49] hover:bg-[#c19a49]/20"
                                >
                                    <Github className="mr-2 h-4 w-4" /> Código
                                </Button>
                            </CardFooter>
                        </Card> */}
                        <Card className="bg-[#1a1410] border-[#8c6d4b] overflow-hidden">
                            <div className="h-48 overflow-hidden">
                                <Image
                                    src="/images/WhaChatGenLink/dark.png"
                                    width={800}
                                    height={400}
                                    alt="WhaChatGenLink"
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-[#c19a49]">
                                    WhaChatGenLink
                                </CardTitle>
                                <CardDescription className="text-[#e8d0b0]/70">
                                    Generador de enlaces de WhatsApp
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-[#e8d0b0]/80">
                                    Plataforma para crear enlaces de WhatsApp
                                    personalizados y QR codes para empresas y
                                    emprendedores.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        Next.js
                                    </Badge>
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        TypeScript
                                    </Badge>
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        Tailwind CSS
                                    </Badge>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Link
                                    href="https://wha-chat-gen-link.vercel.app"
                                    target="_blank"
                                    className="cursor-pointer"
                                >
                                    <Button
                                        variant="outline"
                                        className="cursor-pointer border-[#c19a49] text-[#c19a49] hover:bg-[#c19a49]/20"
                                    >
                                        Ver
                                    </Button>
                                </Link>
                                <Link
                                    href="https://github.com/brindogabriel/WhaChatGenLink"
                                    target="_blank"
                                    className="cursor-pointer"
                                >
                                    <Button
                                        variant="outline"
                                        className="cursor-pointer border-[#c19a49] text-[#c19a49] hover:bg-[#c19a49]/20"
                                    >
                                        <Github className="mr-2 h-4 w-4" />{" "}
                                        Código
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>

                        <Card className="bg-[#1a1410] border-[#8c6d4b] overflow-hidden">
                            <div className="h-48 overflow-hidden">
                                <Image
                                    src="/images/copypast/iniciocopypast.png"
                                    width={800}
                                    height={400}
                                    alt="CopyPast"
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-[#c19a49]">
                                    CopyPast
                                </CardTitle>
                                <CardDescription className="text-[#e8d0b0]/70">
                                    E-commerce de productos de papelería
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-[#e8d0b0]/80">
                                    E-commerce de productos de papelería con
                                    carrito de compras
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        React
                                    </Badge>
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        Tailwind CSS
                                    </Badge>
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        Supabase
                                    </Badge>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Link
                                    href="https://www.copypast.com.ar"
                                    target="_blank"
                                    className="cursor-pointer"
                                >
                                    <Button
                                        variant="outline"
                                        className="cursor-pointer border-[#c19a49] text-[#c19a49] hover:bg-[#c19a49]/20"
                                    >
                                        Ver
                                    </Button>
                                </Link>
                                {/* <Link
                                    href="https://github.com/brindogabriel/WhaChatGenLink"
                                    target="_blank"
                                >
                                    <Button
                                        variant="outline"
                                        className="border-[#c19a49] text-[#c19a49] hover:bg-[#c19a49]/20"
                                    >
                                        <Github className="mr-2 h-4 w-4" />{" "}
                                        Código
                                    </Button>
                                </Link> */}
                            </CardFooter>
                        </Card>

                        <Card className="bg-[#1a1410] border-[#8c6d4b] overflow-hidden">
                            <div className="h-48">
                                <Image
                                    src="/images/fomentarimg/iniciofomentar.png"
                                    width={800}
                                    height={400}
                                    alt="FomentAR"
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-[#c19a49]">
                                    FomentAR
                                </CardTitle>
                                <CardDescription className="text-[#e8d0b0]/70">
                                    Sistema de gestion para administrar
                                    sociedades de fomento
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-[#e8d0b0]/80">
                                    Sistema de gestión para administrar
                                    sociedades de fomento, incluyendo gestión de
                                    usuarios, eventos y pagos. <br />
                                    Desarrollado en conjunto con mi compañero{" "}
                                    <Link
                                        className="underline text-[#c19a49] hover:text-[#e8d0b0]"
                                        target="_blank"
                                        title="LinkedIn de Cristian Villavicencio"
                                        href="https://www.linkedin.com/in/cristian-villavicencio-19572a177"
                                    >
                                        Cristian Villavicencio
                                    </Link>
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        PHP
                                    </Badge>
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        BOOTSTRAP
                                    </Badge>
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        MySQL
                                    </Badge>
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        JS
                                    </Badge>
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        CSS
                                    </Badge>
                                    <Badge className="bg-[#3d2e24] text-[#e8d0b0] hover:bg-[#4d3e34]">
                                        HTML
                                    </Badge>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                {/* <Link
                                    href="https://wha-chat-gen-link.vercel.app"
                                    target="_blank"
                                    className="cursor-pointer"
                                >
                                    <Button
                                        variant="outline"
                                        className="cursor-pointer border-[#c19a49] text-[#c19a49] hover:bg-[#c19a49]/20"
                                    >
                                        Ver
                                    </Button>
                                </Link> */}
                                <Link
                                    href="https://github.com/brindogabriel/FomentAR"
                                    target="_blank"
                                    className="cursor-pointer"
                                >
                                    <Button
                                        variant="outline"
                                        className="cursor-pointer border-[#c19a49] text-[#c19a49] hover:bg-[#c19a49]/20"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        Código
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="text-center mt-12">
                        <Button className="bg-[#c19a49] hover:bg-[#a17a29] text-[#1a1410] font-bold">
                            Ver Todos los Proyectos
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section id="sobre-mi" className="py-16 bg-[#2a1e18] relative z-0">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#c19a49]">
                                Sobre Mí
                            </h2>
                            <p className="text-lg mb-4 text-[#e8d0b0]/80">
                                Como un guerrero mongol de la era digital, me
                                especializo en conquistar los desafíos del
                                desarrollo web frontend con estrategia,
                                adaptabilidad y precisión.
                            </p>
                            <p className="text-lg mb-6 text-[#e8d0b0]/80">
                                Con más de 5 años de experiencia, he trabajado
                                en proyectos para startups y empresas
                                establecidas, siempre enfocado en crear
                                interfaces que combinen estética y
                                funcionalidad.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#c19a49]/20 flex items-center justify-center">
                                        <Globe className="h-6 w-6 text-[#c19a49]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#c19a49]">
                                            Idiomas
                                        </h3>
                                        <p className="text-[#e8d0b0]/80">
                                            Español (Nativo), Inglés (Básico)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#c19a49]/20 flex items-center justify-center">
                                        <Code className="h-6 w-6 text-[#c19a49]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#c19a49]">
                                            Especialidad
                                        </h3>
                                        <p className="text-[#e8d0b0]/80">
                                            Desarrollo Frontend, UI/UX,
                                            Optimización de Rendimiento
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center">
                            <div className="relative z-0">
                                <div className="absolute inset-0 border-4 border-[#c19a49] -rotate-3"></div>
                                <Image
                                    src="/images/profile-pic.png"
                                    width={500}
                                    height={600}
                                    alt="Foto de perfil"
                                    className="relative z-0 w-full max-w-md rotate-3 border-4 border-[#8c6d4b]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contacto" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#c19a49]">
                            Envía un Mensaje
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto text-[#e8d0b0]/80">
                            ¿Interesado en trabajar juntos? Envíame un mensaje y
                            te responderé lo antes posible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <Card className="bg-[#1a1410] border-[#8c6d4b]">
                            <CardHeader>
                                <CardTitle className="text-[#c19a49]">
                                    Información de Contacto
                                </CardTitle>
                                <CardDescription className="text-[#e8d0b0]/70">
                                    Puedes contactarme a través de los
                                    siguientes medios
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#c19a49]/20 flex items-center justify-center shrink-0">
                                        <Mail className="h-6 w-6 text-[#c19a49]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#e8d0b0]">
                                            Email
                                        </h3>
                                        <p className="text-[#e8d0b0]/80 break-all">
                                            gabrielbrindo18@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#c19a49]/20 flex items-center justify-center shrink-0">
                                        <Linkedin className="h-6 w-6 text-[#c19a49]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#e8d0b0]">
                                            LinkedIn
                                        </h3>
                                        <p className="text-[#e8d0b0]/80 break-all">
                                            linkedin.com/in/gabrielsebastianbrindo
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#c19a49]/20 flex items-center justify-center shrink-0">
                                        <Github className="h-6 w-6 text-[#c19a49]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#e8d0b0]">
                                            GitHub
                                        </h3>
                                        <p className="text-[#e8d0b0]/80 break-all">
                                            github.com/brindogabriel
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <div className="flex gap-4">
                                    <Link
                                        href="https://github.com/brindogabriel"
                                        target="_blank"
                                        className="w-10 h-10 rounded-full bg-[#c19a49]/20 flex items-center justify-center hover:bg-[#c19a49]/40 transition-colors"
                                    >
                                        <Github className="h-5 w-5 text-[#c19a49]" />
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href="https://www.linkedin.com/in/gabrielsebastianbrindo"
                                        className="w-10 h-10 rounded-full bg-[#c19a49]/20 flex items-center justify-center hover:bg-[#c19a49]/40 transition-colors"
                                    >
                                        <Linkedin className="h-5 w-5 text-[#c19a49]" />
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href="mailto:gabrielbrindo18@gmail.com?subject=Propuesta de trabajo"
                                        className="w-10 h-10 rounded-full bg-[#c19a49]/20 flex items-center justify-center hover:bg-[#c19a49]/40 transition-colors"
                                    >
                                        <Mail className="h-5 w-5 text-[#c19a49]" />
                                    </Link>
                                </div>
                            </CardFooter>
                        </Card>

                        <Card className="bg-[#1a1410] border-[#8c6d4b]">
                            <CardHeader>
                                <CardTitle className="text-[#c19a49]">
                                    Envíame un Mensaje
                                </CardTitle>
                                <CardDescription className="text-[#e8d0b0]/70">
                                    Completa el formulario y me pondré en
                                    contacto contigo pronto
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ContactForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-[#1a1410] border-t border-[#8c6d4b]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <Image
                                src="/images/favicon.png"
                                width={40}
                                height={40}
                                alt="Logo"
                                className="rounded-full border-2 border-[#c19a49]"
                            />
                            <span className="text-xl font-bold text-[#c19a49]">
                                Gabriel Brindo
                            </span>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-[#e8d0b0]/60 text-sm">
                                &copy; {new Date().getFullYear()} Gabriel
                                Brindo. Todos los derechos reservados.
                            </p>
                            <p className="text-[#e8d0b0]/60 text-sm mt-1">
                                Diseñado y desarrollado con la estrategia de un
                                guerrero mongol.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
