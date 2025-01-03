"use client";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
   

    return (
        <>
            <div>
                <Navbar />
                <Banner />
                <Projects />
                <ContactForm />
          
            </div>
        </>
    );
}
