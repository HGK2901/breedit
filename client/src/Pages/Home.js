import React from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Landing Page/Hero";
import Features from "../Components/Landing Page/Features";
import Content from "../Components/Landing Page/Content";
import CTA from "../Components/Landing Page/CTA";
import Gallery from "../Components/Landing Page/Gallery";
import Blog from "../Components/Landing Page/Blog";
import Testinomials from "../Components/Landing Page/Testinomials";
// import Statistics from "../Components/Landing Page/Statistics";
import Team from "../Components/Landing Page/Team";
import Contact from "../Components/Landing Page/Contact";
import Footer from "../Components/Footer";
// import { Router } from 'react-router-dom';

const Home = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Content />
      <CTA />
      <Gallery />
      <Blog />
      <Testinomials />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
