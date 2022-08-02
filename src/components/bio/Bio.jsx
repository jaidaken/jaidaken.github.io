/* eslint-disable react/jsx-one-expression-per-line */
import "./bio.css";
import React from "react";
import TypeIt from "typeit-react";

function Bio() {
  return (
    <section id="about" className="bio">
      <TypeIt
        className="bio-type"
        options={{
          speed: 0.5,
          lifeLike: true,
          waitUntilVisible: true,
          startDelay: 7000,
          cursor: false,
        }}
      >
        I am currently studying at
        <a href="https://www.thejump.tech">The Jump: Coding Bootcamp</a> in
        hopes of a career change to web development. Currently a barista and
        coffee lover, I am looking for a new challenge in an exciting industry.
        My skills and experience are varied, I have an eye for details that is
        needed within the coffee industry, and expereience working with, and
        running a team of baristas, including management of a business and all
        that this entails. I am an avid lover of tech and computers and believe
        this passion, mixed with my experience will put me in a great position
        to be an effective member of any team.
      </TypeIt>
    </section>
  );
}

export default Bio;
