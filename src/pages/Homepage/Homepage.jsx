import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import CallToAction from "../../components/Calltoaction/Calltoaction";
import MainCallToAction from "../../components/MainCallToAction/MainCallToAction";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <MainCallToAction/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default Homepage;
