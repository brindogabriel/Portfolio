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
    title: "Gabriel Brindo | Desarrollador Web Full Stack | Argentina",
    description:
        "Soy Gabriel Brindo, desarrollador web full stack argentino. Creo sitios y aplicaciones modernas con React y Next.js. Tu próxima solución digital empieza aquí.",
    keywords:
        "Gabriel Brindo, desarrollador web, portfolio, full stack, React, Next.js, JavaScript, HTML, CSS, desarrollo web, proyectos, Argentina, diseño web responsivo, apps web",
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
            "max-image-preview": "none",
            "max-snippet": 0,
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
            "Desarrollador web argentino especializado en sitios modernos y aplicaciones web personalizadas. Experto en React, Next.js, JavaScript, HTML y CSS.",
        url: "https://www.gabrielbrindo.com.ar/",
        siteName: "Gabriel Brindo - Portfolio Profesional",
        images: [
            {
                url: "https://www.gabrielbrindo.com.ar/images/og-image.jpg", // Recomendado: usá una imagen OG dedicada y atractiva
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
            "Desarrollador web argentino especializado en crear sitios web modernos y apps personalizadas con React y Next.js.",
        images: ["https://www.gabrielbrindo.com.ar/images/og-image.jpg"],
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
