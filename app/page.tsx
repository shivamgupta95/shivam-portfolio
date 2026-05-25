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
import Whatsapp from "../components/Whatsapp";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import Particles from "../components/Particles";
import ThemeToggle from "../components/ThemeToggle";
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

      <Loader />

      <Cursor />

      <ThemeToggle />

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

      <Whatsapp />

    </main>

  );
}