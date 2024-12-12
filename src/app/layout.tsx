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
        description:
            "¡Gabriel Brindo, desarrollador web argentino! Ofrezco creatividad y funcionalidad en proyectos web personalizados. Experto en HTML, CSS, JavaScript y frameworks modernos. ¡Contáctame para transformar tus ideas en realidad digital! 🚀",
        url: "https://www.gabrielbrindo.com.ar/",
        siteName: "Gabriel Brindo",
        images: [
            {
                url: " https://www.gabrielbrindo.com.ar/favicon.ico",
                width: 1200,
                height: 630,
                alt: "Logo",
            },
        ],

        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Gabriel Brindo | Desarrollador Web",
        description:
            "¡Gabriel Brindo, desarrollador web argentino! Ofrezco creatividad y funcionalidad en proyectos web personalizados. Experto en HTML, CSS, JavaScript y frameworks modernos. ¡Contáctame para transformar tus ideas en realidad digital! 🚀",
        images: ["https://www.gabrielbrindo.com.ar/images/favicon.ico"],
    },
    icons: {
        icon: "/images/favicon.ico",
        shortcut: "/images/favicon.ico",
        apple: "/images/favicon.ico",
    },
    applicationName: "Gabriel Brindo",
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
