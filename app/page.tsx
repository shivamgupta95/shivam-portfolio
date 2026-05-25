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
import Particles from "../components/Particles";
import SocialBar from "../components/SocialBar";

export default function Home() {

  return (

    <main
      style={{
        background: "#050816",
        color: "white",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <Particles />

      <SocialBar />

      <Topbar />

      <Navbar />

      <Hero />

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* STATS */}
      <section id="stats">
        <Stats />
      </section>

      {/* EXPERTISE */}
      <section id="expertise">
        <Expertise />
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements">
        <Achievements />
      </section>

      {/* EXPERIENCE */}
      <section id="timeline">
        <Timeline />
      </section>

      {/* LEADERSHIP */}
      <section id="leadership">
        <Leadership />
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* CTA */}
      <CTA />

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />

    </main>

  );
}