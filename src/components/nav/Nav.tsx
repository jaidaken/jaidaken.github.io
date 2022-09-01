import "./nav.css";
import React from "react";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineMessage,
} from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
// import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// import CircleMe from "assets/circleme.png";


function Nav() {

  const [open, toggleOpen] = React.useState(false);

  const toggleHoverMenu = () => {
    toggleOpen(!open);
  };

  const scrollSmoothHandler = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };


  const links = [
    { name: "Home", to: "#home", id: 1 },
    { name: "About", to: "#about", id: 2 },
    { name: "Projects", to: "#projects", id: 3 },
    { name: "Contact", to: "#contact", id: 4 }
  ];

  const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { 
      opacity: 1,
      transition: {
        delay: 0.9
      }
    
    }
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  };

  return (
    <div
      className="nav-div"
      onMouseEnter={toggleHoverMenu}
      onMouseLeave={toggleHoverMenu}
    >
      <div className="icon-menu">
        <a href="#home" onClick={scrollSmoothHandler} ><AiOutlineHome /></a>
        <a href="#about" onClick={scrollSmoothHandler} ><FiBookOpen /></a>
        <a href="#projects" onClick={scrollSmoothHandler} ><AiOutlineFundProjectionScreen /></a>
        <a href="#contact" onClick={scrollSmoothHandler} ><AiOutlineMessage /></a>
        
        
        
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 150,
              transition: { duration: 0.6 }
            }}
            exit={{
              width: 55,
              transition: { delay: 0.9, duration: 0.6 }
            }}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <div className="link-div">
                {links.map(({ name, to, id }) => (
                  <motion.a
                    key={id}
                    href={to}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    onClick={scrollSmoothHandler}
                  >
                    {name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Nav;
