import "./projects.css";

import React from "react";
import IMG1 from "../../assets/code.jpg";
import ProjectCard from "../../components/projectCard/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="project-container">
        <h2 className="project-title">Projects</h2>
        <div className="cards">

          <ProjectCard img={IMG1} title="Vacation Log" desc="A Full-stack app with Auth0 and database to track your vacations and visited destinations!" demo="https://trip-logger-jh.herokuapp.com/" source="https://github.com/jaidaken/trip-logger"/>
          <ProjectCard img={IMG1} title="Full stack app" desc="test" demo="https://github.com" source="https://github.com"/>
          <ProjectCard img={IMG1} title="Full stack app" desc="test" demo="https://github.com" source="https://github.com"/>
          <ProjectCard img={IMG1} title="Full stack app" desc="test" demo="https://github.com" source="https://github.com"/>
          <ProjectCard img={IMG1} title="Full stack app" desc="test" demo="https://github.com" source="https://github.com"/>
          <ProjectCard img={IMG1} title="Full stack app" desc="test" demo="https://github.com" source="https://github.com"/>
          
        </div>
      </div>
    </section>
  );
}
