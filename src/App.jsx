import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects"
import Experience from "./components/Experience";
import TechStackSection from "./components/TechStackSection";
import Footer from "./components/Footer";
// import SplashCursor from './components/ReactBits/SplashCursor'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Projects/> 
      <Experience />
      <TechStackSection />
      <Footer />
    </>
  );
}

export default App;
