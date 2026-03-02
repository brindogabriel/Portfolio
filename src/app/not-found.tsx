import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "404 - Página no encontrada",
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <>
            <div className="min-h-screen bg-[#1a1410] text-[#e8d0b0] font-medieval flex flex-col items-center justify-center p-4 relative overflow-hidden">
                {/* Contenido principal */}
                <div className="max-w-3xl w-full text-center relative z-10">
                    <div className="relative w-64 h-64 mx-auto mb-8">
                        <Image
                            src="/images/Mangudai_stride.webp"
                            width={400}
                            height={400}
                            alt="Ilustración decorativa"
                            unoptimized
                            className="object-contain"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-[#c19a49] text-[#1a1410] text-5xl md:text-6xl font-bold px-4 py-1 md:px-6 md:py-2 transform rotate-6 border-4 border-[#8c6d4b]">
                            404
                        </div>
                    </div>

                    <div className="bg-[#2a1e18] border-2 border-[#8c6d4b] p-4 md:p-6 mb-6 md:mb-8 max-w-2xl mx-auto">
                        <p className="text-base md:text-lg mb-3 md:mb-4">
                            La página que buscas no está disponible. Volvé al
                            inicio para continuar navegando.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/" className="w-full sm:w-auto">
                            <Button className="bg-[#c19a49] hover:bg-[#a17a29] text-[#1a1410] font-bold w-full">
                                <Home className="mr-2 h-5 w-5" /> Volver
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Decoración de esquina - estilo pergamino (solo visible en pantallas medianas y grandes) */}
                <div className="hidden md:block absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#8c6d4b] rounded-tl-md"></div>
                <div className="hidden md:block absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#8c6d4b] rounded-tr-md"></div>
                <div className="hidden md:block absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#8c6d4b] rounded-bl-md"></div>
                <div className="hidden md:block absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#8c6d4b] rounded-br-md"></div>

                {/* Versión más pequeña de la decoración para móviles */}
                <div className="md:hidden absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#8c6d4b] rounded-tl-md"></div>
                <div className="md:hidden absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#8c6d4b] rounded-tr-md"></div>
                <div className="md:hidden absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#8c6d4b] rounded-bl-md"></div>
                <div className="md:hidden absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#8c6d4b] rounded-br-md"></div>
            </div>
        </>
    );
}
