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
    default: "Gabriel Brindo | Desarrollador Full Stack",
    template: "%s | Gabriel Brindo",
},

    description:
        "Desarrollador Web Full Stack especializado en React, Next.js y Laravel. Buscando nuevas oportunidades para desarrollar aplicaciones modernas y escalables.",

    applicationName: "Gabriel Brindo Portfolio",

    keywords: [
        "Gabriel Brindo",
        "Desarrollador Full Stack",
        "Desarrollador Web",
        "React",
        "Next.js",
        "Laravel",
        "TypeScript",
        "Tailwind CSS",
        "PHP",
        "Portfolio",
        "Desarrollador Argentina",
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

    referrer: "origin-when-cross-origin",

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    alternates: {
        canonical: "https://www.gabrielbrindo.com.ar",
    },

    openGraph: {
        type: "website",
        locale: "es_AR",
        url: "https://www.gabrielbrindo.com.ar",
        siteName: "Gabriel Brindo Portfolio",

        title:
            "Gabriel Brindo | Desarrollador Web Full Stack | React, Next.js y Laravel",

        description:
            "Desarrollador Web Full Stack especializado en React, Next.js y Laravel. Desarrollo aplicaciones web modernas, rápidas y escalables.",

        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                type: "image/jpeg",
                alt: "Gabriel Brindo - Desarrollador Web Full Stack",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        site: "@gabriel_brindo",
        creator: "@gabriel_brindo",
        title:
            "Gabriel Brindo | Desarrollador Web Full Stack | React, Next.js y Laravel",

        description:
            "Desarrollador Web Full Stack especializado en React, Next.js y Laravel. Desarrollo aplicaciones web modernas, rápidas y escalables.",

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

    verification: {
         google: "c67tjip6FgecfD5Bd6PFF9fyLYxFUSulV7gxNQeyyzo",
    },
};

export const viewport: Viewport = {
    themeColor: "#1a1410",
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
                                "Desarrollador Web Full Stack especializado en React, Next.js y Laravel.",
                            email: "mailto:gabrielbrindo18@gmail.com",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Buenos Aires",
                                addressCountry: "AR",
                            },
                            knowsAbout: [
                                "React",
                                "Next.js",
                                "Laravel",
                                "TypeScript",
                                "Tailwind CSS",
                                "PHP",
                                "Node.js",
                                "Supabase",
                            ],
                            sameAs: [
                                "https://www.linkedin.com/in/gabrielsebastianbrindo",
                                "https://x.com/gabriel_brindo",
                                "https://github.com/brindogabriel",
                            ],
                        }),
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "@id": "https://www.gabrielbrindo.com.ar/#website",
                            url: "https://www.gabrielbrindo.com.ar",
                            name: "Gabriel Brindo Portfolio",
                            description:
                                "Portfolio profesional de Gabriel Brindo, desarrollador web Full Stack especializado en React, Next.js y Laravel.",
                            inLanguage: "es-AR",
                            publisher: {
                                "@type": "Person",
                                name: "Gabriel Brindo",
                            },
                        }),
                    }}
                />

                <script
                    type="text/javascript"
                >{`
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);
    t.async=1;
    t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t,y);
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
