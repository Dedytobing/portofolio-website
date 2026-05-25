import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";

import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Certification from "../pages/Certification";
import ScrollToTop from "../helpers/ScrollToTop";

const Router = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portofolio" element={<Projects />} />
          <Route path="/certification" element={<Certification />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
