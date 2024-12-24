"use client";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Snowfall from "react-snowfall";

export default function Home() {
    return (
        <>
            <div>
                <Navbar />

                <Banner />
                <Projects />
                <ContactForm />
                <Snowfall
                    color="white"
                    snowflakeCount={100}
                    style={{
                        position: "fixed",
                        width: "100vw",
                        height: "100vh",
                    }}
                />
            </div>
        </>
    );
}
