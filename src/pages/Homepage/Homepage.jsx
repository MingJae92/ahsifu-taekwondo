import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import CallToAction from "../../components/Calltoaction/Calltoaction";

function homepage() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default homepage;
