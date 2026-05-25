import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Expertise from "../components/Expertise";
import Achievements from "../components/Achievements";
import Timeline from "../components/Timeline";
import Leadership from "../components/Leadership";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main
      style={{
        background: "#050816",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      {/* HERO */}
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

      {/* TIMELINE */}
      <section id="timeline">
        <Timeline />
      </section>

      {/* LEADERSHIP */}
      <section id="leadership">
        <Leadership />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}