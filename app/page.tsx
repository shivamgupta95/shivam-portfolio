import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <Layout>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <div id="about">
        <About />
      </div>

      {/* EXPERTISE */}
      <div id="expertise">
        <Expertise />
      </div>

      {/* EXPERIENCE */}
      <div id="experience">
        <Stats />
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

    </Layout>
  );
}