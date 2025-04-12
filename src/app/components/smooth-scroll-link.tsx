"use client";

import type React from "react";

import type { ReactNode } from "react";

interface SmoothScrollLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export default function SmoothScrollLink({
    href,
    children,
    className = "",
}: SmoothScrollLinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // Obtener el elemento de destino
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Obtener la altura del navbar (asumiendo 80px, ajustar según sea necesario)
            const navbarHeight = 80;

            // Calcular la posición de desplazamiento
            const offsetTop =
                targetElement.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            // Realizar el scroll suave
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    );
}
