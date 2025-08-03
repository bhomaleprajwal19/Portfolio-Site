import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LiquidBackground from "./components/Liquidbackground"; // <- Add this

function App() {
  return (
    <>
      <LiquidBackground /> {/* <- Add this line */}
      <Header />
      <Hero />
      <Technologies />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
