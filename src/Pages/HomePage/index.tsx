import React from "react";

import Bio from "Components/bio/Bio";
import Header from "Components/header/Header";
import Projects from "Components/projects/Projects";
import Contact from "Components/contact/Contact";
import Transition from "Components/transition/Transition";


export default function Home() {
  return (
    <>
      <Header />
      <Bio />
      <Transition />
      <Projects />
      <Contact />
    </>
  );
}
