import React from "react";
import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { NavBar } from "./components/navBar/NavBar";
import { Sample } from "./components/sample/Sample";

export const LandingPage: React.FC = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Sample />
      <Footer />
    </main>
  );
};
