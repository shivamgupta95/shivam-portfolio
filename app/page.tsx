import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Stats />
      <Timeline />
      <Leadership />
      <Contact />
    </Layout>
  );
}