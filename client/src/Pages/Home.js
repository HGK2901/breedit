import React from "react";
import Fade from "../Components/Fade";

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
      
      <Fade delay={500}>
        <Features />
      </Fade >
      <Fade delay={500}>
        <Content />
      </Fade>
      <Fade delay={500}>
        <CTA />
      </Fade >
      <Fade delay={500}>
        <Gallery />
      </Fade>
      <Fade delay={500}>
        <Blog />
      </Fade>
      <Fade delay={500}>
        <Testinomials />
      </Fade>
      <Fade delay={500}>
        <Team />
      </Fade>
      <Fade delay={500}>
        <Contact />
      </Fade>
      <Fade delay={500}>
        <Footer />
      </Fade>
    </>
  );
};
export default Home;
