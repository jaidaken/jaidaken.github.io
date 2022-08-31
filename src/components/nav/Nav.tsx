import "./nav.css";
import React, { useEffect } from "react";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineMessage,
} from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";

import CircleMe from "../../assets/circleme.png";

function Nav() {

  const scrollSmoothHandler = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav-div">
      <NavLink className="pic" to="/">
        <img src={CircleMe} alt="Me" />
      </NavLink>
      <nav>
        <NavLink
          className="nav-link home-link"
          to="#home"
          onClick={scrollSmoothHandler}
        >
          <AiOutlineHome /><p>Home</p>
        </NavLink>

        <NavLink
          className="nav-link about-link"
          to="/#about"
          onClick={scrollSmoothHandler}
        >
          <FiBookOpen /><p>Bio</p>
        </NavLink>

        <NavLink
          className="nav-link project-link"
          to="#projects"
          onClick={scrollSmoothHandler}
        >
          <AiOutlineFundProjectionScreen /><p>Projects</p>
        </NavLink>

        <NavLink
          className="nav-link contact-link"
          to="#contact"
          onClick={scrollSmoothHandler}
        >
          <AiOutlineMessage /><p>Contact</p>
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;


// const Nav = ({ refs }: any) => {
//   const ref = React.useRef<HTMLInputElement>(null)


//   return (
//     <>
//       <NavLink to="/#hero" className="selected">
//         Hero
//       </NavLink>
//       <NavLink to="/#about" className="selected" onClick={scrollSmoothHandler}>
//         About
//       </NavLink>
//       <NavLink to="/#projects" className="selected">
//         Projects
//       </NavLink>
//     </>
//   );
// };

// export default Nav;
