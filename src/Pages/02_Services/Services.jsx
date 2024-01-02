import {} from "react";
import GreyStructure from "./DynamicPages/GrayStructurePage";
import ArchitecturalPage from "./DynamicPages/ArchitecturalPage";
import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div>
        <ArchitecturalPage />
        <GreyStructure />

        <Outlet />
      </div>
    </>
  );
};

export default Services;
