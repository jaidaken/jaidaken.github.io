import "./projects.css";

import React from "react";
import IMG1 from "../../assets/code.jpg";
import ProjectCard from "./projectCard/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="project-container">
        <h2 className="project-title">Projects</h2>
        <div className="cards">

          <ProjectCard img={IMG1} title="Vacation Log" desc="A Full-stack app with Auth0 and database to track your vacations and visited destinations!" demo="https://trip-logger-jh.herokuapp.com/" source="https://github.com/jaidaken/trip-logger"/>

          <ProjectCard img={IMG1} title="Responsive News" desc="Practice for responsive pages" demo="https://jaidaken.github.io/responsive-news-starter/" source="https://github.com/jaidaken/responsive-news-starter"/>

          <ProjectCard img={IMG1} title="Portfolio" desc="You're on it!" demo="/" source="https://github.com/jaidaken/jaidaken.github.io"/>

          <ProjectCard img={IMG1} title="Full stack app" desc="test" demo="https://github.com" source="https://github.com"/>

          <ProjectCard img={IMG1} title="Full stack app" desc="test" demo="https://github.com" source="https://github.com"/>

          <ProjectCard img={IMG1} title="Full stack app" desc="test" demo="https://github.com" source="https://github.com"/>
          
        </div>
      </div>
    </section>
  );
}
