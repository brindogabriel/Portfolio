/* eslint-disable @next/next/no-sync-scripts */

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Gabriel Brindo | Desarrollador Web",
    description:
        "¡Gabriel Brindo, desarrollador web argentino! Ofrezco creatividad y funcionalidad en proyectos web personalizados. Experto en HTML, CSS, JavaScript y frameworks modernos. ¡Contáctame para transformar tus ideas en realidad digital! 🚀",
    keywords:
        "gabriel brindo, desarrollador web, portfolio, HTML, CSS, JavaScript, frameworks modernos, desarrollo web, proyectos web, Argentina",
    robots: "index, follow",

    openGraph: {
        locale: "es_AR",
        title: "Gabriel Brindo | Desarrollador Web",
        images: "https://www.gabrielbrindo.com.ar/favicon.ico",
        description:
            "¡Gabriel Brindo, desarrollador web argentino! Ofrezco creatividad y funcionalidad en proyectos web personalizados. Experto en HTML, CSS, JavaScript y frameworks modernos. ¡Contáctame para transformar tus ideas en realidad digital! 🚀",
        url: "https://www.gabrielbrindo.com.ar/",
    },
    twitter: {
        card: "summary_large_image",
        creator: "@gabriel_brindo",
        title: "Gabriel Brindo | Desarrollador Web",
        description:
            "¡Gabriel Brindo, desarrollador web argentino! Ofrezco creatividad y funcionalidad en proyectos web personalizados. Experto en HTML, CSS, JavaScript y frameworks modernos. ¡Contáctame para transformar tus ideas en realidad digital! 🚀",
    },
    icons: {
        shortcut: "./favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body
                suppressHydrationWarning={true}
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js" />
            </body>
        </html>
    );
}

