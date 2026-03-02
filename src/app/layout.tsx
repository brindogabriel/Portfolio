/* eslint-disable @next/next/no-sync-scripts */
import { MedievalSharp } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const medievalSharp = MedievalSharp({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.gabrielbrindo.com.ar"),

    title: {
        default: "Gabriel Brindo | Desarrollador Web Full Stack",
        template: "%s | Desarrollo Web Profesional",
    },

    description:
        "Portfolio profesional de Gabriel Brindo — Desarrollador Web Full Stack: React, Next.js, Tailwind CSS, PHP y más. Proyectos reales, código limpio y soluciones orientadas a resultados.",

    keywords: [
        "Desarrollador Web Full Stack",
        "React Developer Portfolio",
        "Next.js Resume",
        "Developer Argentina",
        "UI/UX + Frontend",
        "Web Performance",
    ],

    authors: [
        {
            name: "Gabriel Brindo",
            url: "https://www.linkedin.com/in/gabrielsebastianbrindo",
        },
    ],

    creator: "Gabriel Brindo",
    publisher: "Gabriel Brindo",
    category: "technology",

    robots: {
        index: true,
        follow: true,
    },

    alternates: {
        canonical: "https://www.gabrielbrindo.com.ar",
    },

    openGraph: {
        type: "website",
        locale: "es_AR",
        url: "https://www.gabrielbrindo.com.ar",
        siteName: "Portfolio de Gabriel Brindo",

        title: "Gabriel Brindo | Desarrollador Web Full Stack",
        description:
            "Portfolio profesional con proyectos reales y enfoque en tecnologías modernas (React, Next.js, Tailwind CSS). Disponible para oportunidades laborales.",

        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Gabriel Brindo - Portfolio de Desarrollador Web",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Gabriel Brindo | Web Developer",
        description:
            "Portfolio profesional de desarrollador web Full Stack — React, Next.js, Tailwind CSS, Laravel y más.",
        images: ["/images/og-image.jpg"],
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

    formatDetection: {
        telephone: true,
        email: true,
        address: false,
        url: true,
    },
};

export const viewport: Viewport = {
    themeColor: "#1a1410", // coherente con el meta tag
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
                <meta name="robots" content="noindex, nofollow" />
                <meta name="googlebot" content="noindex, nofollow" />
            </head>
            <body
                suppressHydrationWarning
                className={`${medievalSharp.className} antialiased test-cursor scroll-smooth`}
            >
                {children}
                <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js" />
            </body>
        </html>
    );
}
