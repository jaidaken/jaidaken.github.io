import "./nav.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineMessage,
} from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import CircleMe from "../../assets/circleme.png";

function Nav() {
  return (
    <div className="nav-div">
      <Link className="pic" to="/">
        <img src={CircleMe} alt="Me" />
      </Link>
      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          className="nav-link home-link"
          to="/"
        >
          <AiOutlineHome />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="nav-link about-link"
          to="#about"
        >
          <FiBookOpen />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="nav-link project-link"
          to="#projects"
        >
          <AiOutlineFundProjectionScreen />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
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
