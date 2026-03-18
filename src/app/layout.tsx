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
        default: "Gabriel Brindo | Desarrollador Web Full Stack en Argentina",
        template: "%s | Desarrollo Web Profesional",
    },

    description:
        "Gabriel Brindo — Desarrollador Web Full Stack en Argentina especializado en React, Next.js y Laravel. Desarrollo aplicaciones modernas, escalables y optimizadas. Disponible para oportunidades laborales.",

    keywords: [
        "Desarrollador Web Argentina",
        "Desarrollador React Argentina",
        "Desarrollador Next.js",
        "Desarrollador Laravel Argentina",
        "Portfolio Full Stack Developer",
        "Programador Web Buenos Aires",
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "@id": "https://www.gabrielbrindo.com.ar/#gabrielbrindo",
                            name: "Gabriel Brindo",
                            url: "https://www.gabrielbrindo.com.ar",
                            image: "https://www.gabrielbrindo.com.ar/images/og-image.jpg",
                            jobTitle: "Desarrollador Web Full Stack",
                            description:
                                "Desarrollador Web Full Stack especializado en React, Next.js y Laravel. Disponible para oportunidades laborales en Argentina.",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Buenos Aires",
                                addressCountry: "AR",
                            },
                            sameAs: [
                                "https://www.linkedin.com/in/gabrielsebastianbrindo",
                            ],
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Website",
                            "@id": "https://www.gabrielbrindo.com.ar/#website",
                            url: "https://www.gabrielbrindo.com.ar",
                            name: "Gabriel Brindo - Portfolio",
                            description:
                                "Portfolio profesional de Gabriel Brindo, desarrollador web full stack en Argentina especializado en React, Next.js y Laravel.",
                            publisher: {
                                "@type": "Person",
                                name: "Gabriel Brindo",
                            },
                            inLanguage: "es-AR",
                        }),
                    }}
                />
                <script type="text/javascript">{`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "hyzpuboza4");
`}</script>
            </head>
            <body
                suppressHydrationWarning
                className={`${medievalSharp.className} antialiased test-cursor scroll-smooth`}
            >
                {children}
                <script src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js" />
            </body>
        </html>
    );
}
