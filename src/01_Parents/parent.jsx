import {} from "react";
import Navbar from "../Components/Navbar/Navbar";
import Routers from "../Components/Routes/Routes";
// import Footer from "../Components/z_Footer/Footer";

const Parent = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routers />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Parent;
