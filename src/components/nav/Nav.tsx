import "./nav.css";
import React from "react";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineMenu
} from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

function Nav() {

  const [open, toggleOpen] = React.useState(false);

  const toggleHoverMenu = () => {
    toggleOpen(!open);
  };

  const scrollSmoothHandler = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };


  const links = [
    { name: "Home", icon: <AiOutlineHome fontSize={32} />, to: "#home", id: 1 },
    { name: "About", icon: <FiBookOpen fontSize={32}/>, to: "#about", id: 2 },
    { name: "Projects", icon: <AiOutlineFundProjectionScreen fontSize={32}/>, to: "#projects", id: 3 },
    { name: "Contact", icon: <AiOutlineMessage fontSize={32}/>, to: "#contact", id: 4 }
  ];

  const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { 
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.2
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
        <AiOutlineMenu />
        
        
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 160,
              transition: { duration: 0.3 }
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
                {links.map(({ name, icon, to, id }) => (
                  <motion.a
                    key={id}
                    href={to}
                    variants={itemVariants}
                    onClick={scrollSmoothHandler}
                  >
                    {icon} <span>{name}</span>
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
