import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Expertise from "@/components/Expertise";
import Achievements from "@/components/Achievements";
import Timeline from "@/components/Timeline";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  return (

    <Layout>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <div id="home">
        <Hero />
      </div>

      {/* ABOUT */}
      <div id="about">
        <About />
      </div>

      {/* STATS */}
      <div id="stats">
        <Stats />
      </div>

      {/* EXPERTISE */}
      <div id="expertise">
        <Expertise />
      </div>

      {/* ACHIEVEMENTS */}
      <div id="achievements">
        <Achievements />
      </div>

      {/* TIMELINE */}
      <div id="journey">
        <Timeline />
      </div>

      {/* LEADERSHIP */}
      <div id="leadership">
        <Leadership />
      </div>

      {/* CONTACT */}
      <div id="contact">
        <Contact />
      </div>

      {/* FOOTER */}
      <Footer />

    </Layout>

  );
}