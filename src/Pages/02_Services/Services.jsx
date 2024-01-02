import {} from "react";
import GreyStructure from "./DynamicPages/GrayStructurePage";
import BuildingDrawing from "./DynamicPages/BuildingDrawingPages";
import Interior from "./DynamicPages/InteriorDesign";
import ArchitecturalPage from "./DynamicPages/ArchitecturalPage";
import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div>
        <GreyStructure />
        <BuildingDrawing />
        <Interior />
        <ArchitecturalPage />
        <Outlet />
      </div>
    </>
  );
};

export default Services;
