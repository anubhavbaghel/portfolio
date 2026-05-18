import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects"
import Experience from "./components/Experience";
import TechStackSection from "./components/TechStackSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import SplashCursor from './components/ReactBits/SplashCursor'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects/> 
      <Experience />
      <TechStackSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
