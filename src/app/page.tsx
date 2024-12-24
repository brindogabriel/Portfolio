"use client";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Snowfall from "react-snowfall";
import { useEffect, useState } from "react";

export default function Home() {
    const [snowflakeImage, setSnowflakeImage] =
        useState<HTMLImageElement | null>(null);

    useEffect(() => {
        const image = new Image();
        image.src = "/images/snow.png";
        image.onload = () => {
            setSnowflakeImage(image);
        };
    }, []);

    return (
        <>
            <div>
                <Navbar />
                <Banner />
                <Projects />
                <ContactForm />
                <Snowfall
                    snowflakeCount={100}
                    style={{
                        position: "fixed",
                        width: "100vw",
                        height: "100vh",
                    }}
                    images={snowflakeImage ? [snowflakeImage] : undefined}
                    radius={[10, 20]}
                />
            </div>
        </>
    );
}
