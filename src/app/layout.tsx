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
    title: "Gabriel Brindo | Desarrollador Web Full Stack | Argentina",
    description:
        "Desarrollador web argentino especializado en crear sitios web modernos y aplicaciones web personalizadas. Experto en React, Next.js, JavaScript, HTML y CSS. Soluciones digitales creativas y funcionales para empresas y particulares.",
    keywords:
        "gabriel brindo, desarrollador web, portfolio, desarrollador full stack, React, Next.js, JavaScript, HTML, CSS, desarrollo web, proyectos web, Argentina, diseño web responsivo, aplicaciones web",
    robots: "index, follow",
    alternates: {
        canonical: "https://www.gabrielbrindo.com.ar/",
        languages: {
            "es-AR": "https://www.gabrielbrindo.com.ar/",
        },
    },
    authors: [{ name: "Gabriel Brindo" }],
    category: "technology",
    creator: "Gabriel Brindo",
    publisher: "Gabriel Brindo",
    metadataBase: new URL("https://www.gabrielbrindo.com.ar"),

    openGraph: {
        locale: "es_AR",
        title: "Gabriel Brindo | Desarrollador Web Full Stack | Argentina",
        description:
            "Desarrollador web argentino especializado en crear sitios web modernos y aplicaciones web personalizadas. Experto en React, Next.js, JavaScript, HTML y CSS. Soluciones digitales creativas y funcionales.",
        url: "https://www.gabrielbrindo.com.ar/",
        siteName: "Gabriel Brindo - Portfolio Profesional",
        images: [
            {
                url: "https://www.gabrielbrindo.com.ar/favicon.ico",
                width: 1200,
                height: 630,
                alt: "Gabriel Brindo - Desarrollador Web",
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
        images: ["https://www.gabrielbrindo.com.ar/favicon.ico"],
        creator: "@gabrielbrindo",
        site: "@gabrielbrindo",
    },
    icons: {
        icon: [{ url: "/favicon.ico" }],
        shortcut: "/favicon.ico",
        apple: [
            { url: "/favicon.ico" },
            {
                url: "/favicon.ico",
                sizes: "180x180",
                type: "image/png",
            },
        ],
        other: [
            {
                rel: "apple-touch-icon-precomposed",
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth" suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={`${geistSans.variable} ${geistMono.variable} antialiased test-cursor`}
            >
                {children}
                <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js" />
            </body>
        </html>
    );
}
