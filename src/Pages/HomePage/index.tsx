import React from "react";

import Bio from "../../Components/bio/Bio";
import Header from "../../Components/header/Header";
import Projects from "../../Components/projects/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Bio />
      <Projects />
    </>
  );
}
