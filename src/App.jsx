import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects"
// import SplashCursor from './components/ReactBits/SplashCursor'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Projects/>
    </>
  );
}

export default App;
