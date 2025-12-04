import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";
import Featuredcomp from "@/components/Featuredcomp";
import Footer from "@/components/Footer";
import Carousel from "@/components/Ourclient";
import ClientsCarousel from "@/components/Carousel/ClientsCarousel";

export default function Home() {
  return (
    <main >
    <Hero/>
    <About/>
      <section id="clients">
        <ClientsCarousel />
      </section>
    <Featuredcomp/>
   <Footer/>
    </main>
  );
}
