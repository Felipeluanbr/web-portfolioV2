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
      <Route path="/" element={<Home />} />;
      <Route path="/" element={<About />} />;
      <Route path="/" element={<Contact />} />;
      <Route path="/" element={<Projects />} />;
      <Route path="/" element={<Notebook />} />;
      <Route path="/" element={<TechStack />} />;
      
    </Routes>
  );
}

export default AppRoutes;
