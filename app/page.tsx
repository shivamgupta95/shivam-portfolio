"use client";

import { useEffect, useState } from "react";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Expertise from "../components/Expertise";
import Achievements from "../components/Achievements";
import Timeline from "../components/Timeline";
import Leadership from "../components/Leadership";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SocialBar from "../components/SocialBar";

const backgrounds = [
  "/bg1.jpg",
  "/bg2.jpg",
  "/bg3.jpg",
  "/bg4.jpg",
];

export default function Home() {

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentBg((prev) =>
        prev === backgrounds.length - 1 ? 0 : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <main
      style={{
        color: "white",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* CINEMATIC BACKGROUND */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            `url(${backgrounds[currentBg]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1.2s ease-in-out",
          zIndex: -5,
          transform: "scale(1.03)",
        }}
      />

      {/* DARK LUXURY OVERLAY */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.72), rgba(0,0,0,0.88))",
          zIndex: -4,
        }}
      />

      <SocialBar />

      <Topbar />

      <Navbar />

      <Hero />

      <section id="about">
        <About />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="expertise">
        <Expertise />
      </section>

      <section id="achievements">
        <Achievements />
      </section>

      <section id="timeline">
        <Timeline />
      </section>

      <section id="leadership">
        <Leadership />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <CTA />

      <section id="contact">
        <Contact />
      </section>

      <Footer />

    </main>

  );
}