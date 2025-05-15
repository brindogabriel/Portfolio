/* eslint-disable @next/next/no-sync-scripts */
import { MedievalSharp } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const medievalSharp = MedievalSharp({
    subsets: ["latin"],
    weight: "400", // Cambia el peso según tus necesidades
    display: "swap",
});
export const metadata: Metadata = {
    title: "Gabriel Brindo | Desarrollador Web Full Stack | Argentina",
    description:
        "Desarrollador web argentino especializado en crear sitios web modernos y aplicaciones web personalizadas. Experto en React, Next.js, JavaScript, HTML y CSS. Soluciones digitales creativas y funcionales para empresas y particulares.",
    keywords:
        "gabriel brindo, desarrollador web, portfolio, desarrollador full stack, React, Next.js, JavaScript, HTML, CSS, desarrollo web, proyectos web, Argentina, diseño web responsivo, aplicaciones web",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://www.gabrielbrindo.com.ar/",
        languages: {
            "es-AR": "https://www.gabrielbrindo.com.ar/",
        },
    },
    authors: [
        { name: "Gabriel Brindo", url: "https://www.gabrielbrindo.com.ar" },
    ],
    category: "technology",
    creator: "Gabriel Brindo",
    publisher: "Gabriel Brindo",
    metadataBase: new URL("https://www.gabrielbrindo.com.ar"),

    openGraph: {
        locale: "es_AR",
        title: "Gabriel Brindo | Desarrollador Web Full Stack | Argentina",
        description:
            "Desarrollador web argentino especializado en crear sitios web modernos y aplicaciones web personalizadas. Experto en React, Next.js, JavaScript, HTML y CSS.",
        url: "https://www.gabrielbrindo.com.ar/",
        siteName: "Gabriel Brindo - Portfolio Profesional",
        images: [
            {
                url: "https://www.gabrielbrindo.com.ar/images/favicon.png", // Cambiar a una imagen OG dedicada, no el favicon
                width: 1200,
                height: 630,
                alt: "Gabriel Brindo - Desarrollador Web Full Stack",
                type: "image/jpeg",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gabriel Brindo | Desarrollador Web Full Stack | Argentina",
        description:
            "Desarrollador web argentino especializado en crear sitios web modernos y aplicaciones web personalizadas. Experto en React, Next.js, JavaScript, HTML y CSS.",
        images: ["https://www.gabrielbrindo.com.ar/images/favicon.png"], // Usar la misma imagen OG
        creator: "@gabrielbrindo",
        site: "@gabrielbrindo",
    },
    icons: {
        icon: [{ url: "/favicon.ico" }],
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
        other: [
            {
                rel: "apple-touch-icon",
                url: "/favicon.ico",
            },
        ],
    },
    formatDetection: {
        telephone: true,
        date: false,
        address: false,
        email: true,
        url: false,
    },
};

import type { Viewport } from "next";

export const viewport: Viewport = {
    themeColor: "black",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <meta name="theme-color" content="#1a1410" />
            </head>
            <body
                suppressHydrationWarning
                className={`${medievalSharp.className} antialiased test-cursor scroll-smooth`}
            >
                {children}
                <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js" />
            </body>
        </html>
    );
}
