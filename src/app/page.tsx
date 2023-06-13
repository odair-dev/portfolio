'use client';
import About from "@/components/About";
import Background from "@/components/Background";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    Aos.init();
  }, []);
  return (
    <main id="home">
      <Background>
        <Header />
        <Description />
      </Background>
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </main>
  )
}
