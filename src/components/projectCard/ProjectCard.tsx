import React from "react";
import { Link } from 'react-router-dom';

interface props {
  img: string,
  title: string,
  desc: string,
  demo: string,
  source: string,
}

function ProjectCard(props: props) {
  return (

    <div className="card-container">
      <div className="card-text">
        <h2 className="card-title">
          {props.title}
        </h2>
        <p className="card-desc">
          {props.desc}
        </p>
      </div>
      <div className="card-img-div">
        <img className="card-img" src={props.img} alt="Project preview image" />
      </div>


      <div className="card-btn">
        <button className="btn btn-primary">
          <a href={props.demo} target="_blank">Demo</a>
        </button>
        <button className="btn">
          <a href={props.source} target="_blank">Source</a>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;


{/* <article className="card-image">
            <h3>Card 1</h3>
            <div className="image-div">
              <img src={IMG1} alt="code" />
            </div>

            <div className="buttons">
              <a
                href="https://github.com/jaidaken/jaidaken.github.io"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://github.com/jaidaken/jaidaken.github.io"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
          </article> */}
