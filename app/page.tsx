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
import Whatsapp from "../components/Whatsapp";

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

      <section id="contact">
        <Contact />
      </section>

      <Footer />

      <Whatsapp />

    </main>

  );
}