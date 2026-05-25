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

    const handleScroll = () => {

      const scrollY = window.scrollY;

      if (scrollY < 700) {
        setCurrentBg(0);
      } else if (scrollY < 1600) {
        setCurrentBg(1);
      } else if (scrollY < 2600) {
        setCurrentBg(2);
      } else {
        setCurrentBg(3);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

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

      {/* FULL PAGE BACKGROUND */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            `url(${backgrounds[currentBg]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 1s ease",
          zIndex: -5,
        }}
      />

      {/* DARK OVERLAY */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.78), rgba(0,0,0,0.88))",
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