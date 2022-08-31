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
          <AiOutlineHome />
        </NavLink>

        <NavLink
          className="nav-link about-link"
          to="#about"
        >
          <FiBookOpen />
        </NavLink>

        <NavLink
          className="nav-link project-link"
          to="#projects"
        >
          <AiOutlineFundProjectionScreen />
        </NavLink>

        <NavLink
          className="nav-link contact-link"
          to="/contact"
        >
          <AiOutlineMessage />
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
