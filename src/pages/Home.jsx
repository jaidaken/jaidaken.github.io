import React from "react";
import Bio from "../components/bio/Bio";
import Header from "../components/header/Header";
import Projects from "../components/projects/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Bio />
      <Projects />
    </>
  );
}
