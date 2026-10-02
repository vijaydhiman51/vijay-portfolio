import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Journey from "@/components/journey";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Thinking from "@/components/Thinking";
import Work from "@/components/Work";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <Journey />
      <Thinking />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
