/* eslint-disable react/jsx-one-expression-per-line */
import "./bio.css";
import React, { useRef, forwardRef } from "react";
import CircleMe from 'assets/circleme.png';

function Bio() {
  return (
    <section id="about" className="bio">
      <div className="bio-container">
        <h2>Full Stack Web Developer</h2>
        <h4 className="techs">
        HTML • CSS • Javascript • Typescript • Node.js • ES6+ • React • React-Router • Redux • GraphQL • Framer Motion •
        MongoDB • MySQL • PostgreSQL • Vite • Git
        </h4>
        <p>
          A web developer adept in building responsive, well-designed web applications, from front to back end.
          <span> My training with <a href="https://www.thejump.tech">The Jump: Digital School </a>
            has prepared me to build professional and efficient applications
            suited to the needs of my clients.</span>
        </p>
        <h3>Who am I?</h3>
        <img src={CircleMe} alt="A Picture of Jamie Hewitt" />
        <p>
          I am currently training towards a career change into web development. While I am currently a barista and
          coffee lover, I am looking for a new challenge in an exciting
          industry. My skills and experience are varied, I have an eye for
          details that is needed within both the coffee industry and web development, as well as expereience
          working with, and running a team of baristas, including management of
          a store and all that this entails. I am an avid lover of tech and
          computers and believe this passion, mixed with my experience will put
          me in a great position to be an effective member of any team.
        </p>
      </div>
    </section>
  );
}

export default Bio;
