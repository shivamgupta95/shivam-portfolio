import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {

  return (

    <main
      style={{
        background: "#050816",
        color: "white",
        minHeight: "100vh"
      }}
    >

      <Hero />

      <Footer />

    </main>

  );
}