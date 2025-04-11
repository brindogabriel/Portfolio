"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
    const [activeKey, setActiveKey] = useState<number | null>(null);
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        let mounted = true;

        // Secuencia de animación para presionar las teclas una por una en bucle infinito
        const animateKeys = async () => {
            // Pequeña pausa inicial para evitar saltos
            await new Promise((resolve) => setTimeout(resolve, 300));

            if (!mounted) return;
            setAnimationComplete(true); // Mostrar el texto después de la pausa inicial

            while (mounted) {
                // Presionar la primera tecla (4)
                setActiveKey(0);
                await new Promise((resolve) => setTimeout(resolve, 600));
                if (!mounted) return;

                // Presionar la segunda tecla (0)
                setActiveKey(1);
                await new Promise((resolve) => setTimeout(resolve, 600));
                if (!mounted) return;

                // Presionar la tercera tecla (0)
                setActiveKey(2);
                await new Promise((resolve) => setTimeout(resolve, 600));
                if (!mounted) return;

                // Pausa antes de reiniciar la secuencia
                setActiveKey(null);
                await new Promise((resolve) => setTimeout(resolve, 800));
                if (!mounted) return;
            }
        };

        // Iniciar la animación
        animateKeys();

        // Limpieza al desmontar
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <div className="keys-container">
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

                <div className={`not-found-text`}>
                    <h2 className="not-found-heading">Página no encontrada</h2>

                    <p className="not-found-description">
                        Lo sentimos, la página que estás buscando no existe o ha
                        sido movida.
                    </p>

                    <div className="not-found-button-container">
                        <Link href="/" className="not-found-button">
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
