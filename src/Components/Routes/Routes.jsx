import {} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/01_Home/Home";
import Services from "../../Pages/02_Services/Services";
import Projects from "../../Pages/03_Projects/Projects";
import Blogs from "../../Pages/04_Blog/Blog";
import Contact from "../../Pages/05_contacts/Contact";
import Error from "../../Pages/07_Error/ErrorPage";
import ArchitecturalPage from "../../Pages/02_Services/DynamicPages/ArchitecturalPage";
import GreyStructure from "../../Pages/02_Services/DynamicPages/GrayStructurePage";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/" element={<Services />} />
        <Route path="/services/Architectural" element={<ArchitecturalPage />} />
        <Route path="/services/GreyStructure" element={<GreyStructure />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Routers;
