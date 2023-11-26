import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Project from "./components/sections/Project";
import Skill from "./components/sections/Skill";

export default function Home() {
  return (
    <>
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
}
