import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

function homepage() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Footer/>
    </div>
  );
}

export default homepage;
