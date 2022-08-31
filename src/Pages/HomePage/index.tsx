import React from "react";

import Bio from "../bio/Bio";
import Header from "../../Components/header/Header";
import Projects from "../projects/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Bio />
      <Projects />
    </>
  );
}
