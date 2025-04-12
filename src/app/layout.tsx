/* eslint-disable @next/next/no-sync-scripts */
import { MedievalSharp } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const medievalSharp = MedievalSharp({
    subsets: ["latin"],
    weight: "400", // o el peso que necesites
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
                url: "https://www.gabrielbrindo.com.ar/og-image.jpg", // Cambiar a una imagen OG dedicada, no el favicon
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
        images: ["https://www.gabrielbrindo.com.ar/og-image.jpg"], // Usar la misma imagen OG
        creator: "@gabrielbrindo",
        site: "@gabrielbrindo",
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/icon.svg", type: "image/svg+xml" },
            { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
            { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
        ],
        shortcut: "/favicon.ico",
        apple: [
            { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            {
                rel: "apple-touch-icon-precomposed",
                url: "/apple-touch-icon-precomposed.png",
            },
            {
                rel: "mask-icon",
                url: "/safari-pinned-tab.svg",
                color: "#c19a49", // Color que coincide con tu tema
            },
        ],
    },

    verification: {
        // Añadir cuando tengas estas verificaciones
        // google: "tu-código-de-verificación",
        // yandex: "tu-código-de-verificación",
    },
    appleWebApp: {
        capable: true,
        title: "Gabriel Brindo",
        statusBarStyle: "black-translucent",
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap"
                />

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
