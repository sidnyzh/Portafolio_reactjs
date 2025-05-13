import React from "react";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Portafolio from "../Components/Portafolio/portafolio";
import ContactForm from "../Components/ContactForm/ContactForm";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Skills />
      <Portafolio />
      <ContactForm />
    </div>
  );
};

export default Home;
