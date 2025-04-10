"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
    const [activeKey, setActiveKey] = useState<number | null>(null);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        // Secuencia de animación para presionar las teclas una por una en bucle infinito
        const animateKeys = async () => {
            while (true) {
                // Presionar la primera tecla (4)
                setActiveKey(0);
                await new Promise((resolve) => setTimeout(resolve, 600));

                // Presionar la segunda tecla (0)
                setActiveKey(1);
                await new Promise((resolve) => setTimeout(resolve, 600));

                // Presionar la tercera tecla (0)
                setActiveKey(2);
                await new Promise((resolve) => setTimeout(resolve, 600));

                // Pausa antes de reiniciar la secuencia
                setActiveKey(null);
                await new Promise((resolve) => setTimeout(resolve, 800));
            }
        };

        // Iniciar la animación después de un breve retraso
        const timer = setTimeout(() => {
            animateKeys();
            setAnimationComplete(true); // Mostrar el texto inmediatamente
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="not-found-container">
            <div className="mb-8">
                <div className="flex gap-4 mb-12">
                    {["4", "0", "4"].map((digit, index) => (
                        <div
                            key={index}
                            className={`key-404 ${
                                activeKey === index ? "pressed" : ""
                            }`}
                        >
                            {/* Efecto de iluminación/blur cuando se presiona */}
                            <div
                                className={`key-404-glow ${
                                    activeKey === index ? "active" : ""
                                }`}
                            />

                            {/* Contenido de la tecla */}
                            <div className="key-404-content">{digit}</div>
                        </div>
                    ))}
                </div>

                <h2
                    className={`not-found-text text-2xl md:text-3xl text-center mb-4 ${
                        animationComplete ? "visible" : "hidden"
                    }`}
                >
                    Página no encontrada
                </h2>

                <p
                    className={`not-found-description text-center max-w-md mx-auto mb-8 ${
                        animationComplete ? "visible" : "hidden"
                    }`}
                >
                    Lo sentimos, la página que estás buscando no existe o ha
                    sido movida.
                </p>

                <div
                    className={`flex justify-center not-found-text ${
                        animationComplete ? "visible" : "hidden"
                    }`}
                >
                    <Link href="/" className="not-found-button">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
