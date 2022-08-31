import "./nav.css";

import React from "react";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineMessage,
} from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

import CircleMe from "../../assets/circleme.png";

function Nav() {

	const executeScroll = () => (ref:any) => window.scrollTo(0, ref.current.offsetTop)
	return (
    <div className="nav-div">
      <NavLink className="pic" to="/">
        <img src={CircleMe} alt="Me" />
      </NavLink>
      <nav>
        <NavLink
          className="nav-link home-link"
          to="#home"
        >
          <AiOutlineHome /><p>Home</p>
        </NavLink>

        <NavLink
          className="nav-link about-link"
          to="#about"
        >
          <FiBookOpen /><p>Bio</p>
        </NavLink>

        <NavLink
          className="nav-link project-link"
          to="#projects"
        >
          <AiOutlineFundProjectionScreen /><p>Projects</p>
        </NavLink>

        <NavLink
          className="nav-link contact-link"
          to="/contact"
        >
          <AiOutlineMessage /><p>Contact</p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
