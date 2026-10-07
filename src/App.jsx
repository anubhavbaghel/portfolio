import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStackSection from "./components/TechStackSection";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <TechStackSection />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
