import React from "react";
import img1 from "../../img/aarif.jpg";
import Header from "../Header/Header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <img src={img1} alt="Not found" style={{ width: "100%" }} />
    </>
  );
};

export default LandingPage;
