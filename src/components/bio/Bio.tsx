/* eslint-disable react/jsx-one-expression-per-line */
import "./bio.css";
import React, { useRef, forwardRef } from "react";
import CircleMe from 'assets/circleme.png';

function Bio() {
  return (
    <section id="about" className="bio">
      <div>
        <h2>Full Stack Web Developer</h2>
        <h4>
          HTML • CSS • Javascript • Node.js • ES6+ • React • Redux • GraphQL •
          Typescript • MongoDB • Git
        </h4>
        <p>
          A web developer adept in building responsive, well-designed web
          applications, front and back end. My training with The Jump Digital
          School has prepared me to build professional and efficient
          applications suited to the needs of the clients.
        </p>
        <h3>Who am I?</h3>
        <img height="400" src={CircleMe} alt="A Picture of Jamie Hewitt" />
        <p>
          I am currently studying at&nbsp;
          <a href="https://www.thejump.tech">The Jump: Coding Bootcamp</a> in
          hopes of a career change to web development. Currently a barista and
          coffee lover, I am looking for a new challenge in an exciting
          industry. My skills and experience are varied, I have an eye for
          details that is needed within the coffee industry, and expereience
          working with, and running a team of baristas, including management of
          a business and all that this entails. I am an avid lover of tech and
          computers and believe this passion, mixed with my experience will put
          me in a great position to be an effective member of any team.
        </p>
      </div>
    </section>
  );
}

export default Bio;
