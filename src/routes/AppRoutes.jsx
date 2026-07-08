import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import TechStack from "../pages/TechStack";
import Notebook from "../pages/Notebook";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/notebook" element={<Notebook />} />
      <Route path="/tech-stack" element={<TechStack />} />
    </Routes>
  );
}

export default AppRoutes;
