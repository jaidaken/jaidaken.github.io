import "./header.scss";

import { motion } from "framer-motion";
import React from "react";
import { AiFillFilePdf, AiOutlineMail } from "react-icons/ai";
import * as bs from "react-icons/bs";
import blob1 from 'assets/blob1.svg';
import blob2 from 'assets/blob2.svg';
import blob3 from 'assets/blob3.svg';

import CV from "../../assets/CV.pdf";

import TypeIt from "typeit-react";

const Header = () => {
  return (
    <section id="home" className="header">
      {/* <div className="gradient1"></div>
      <div className="gradient2"></div>
      <div className="gradient3"></div> */}
      <motion.img 
        src={blob1} 
        className="blob1"
        animate={{ x: ["0%", "30%", "0%"], y: ["-20%", "5%", "-5%", "-20%"], scale: [1, 1.6, 0.7, 1]}}
        transition={{ ease:"easeInOut", duration: 30, repeat: Infinity }}>
      </motion.img>
      <motion.img 
        src={blob2} 
        className="blob2"
        animate={{ x: ["-20%", "5%", "0%", "-20%"], y: ["-50%", "90%", "-50%"]}}
        transition={{ ease:"easeInOut", duration: 18, repeat: Infinity }}>
      </motion.img>
      <motion.img 
        src={blob3} 
        className="blob3"
        animate={{ x: ["100%", "200%", "175%", "190%", "100%"], y: ["-40%", "-25%", "60%", "-40%"]}}
        transition={{ ease:"easeInOut", duration: 24, repeat: Infinity }}>
      </motion.img>
      <div className="header-container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          >
            Hello, I'm Jamie Hewitt
          </motion.h1>
        <div className="links">
          <motion.a
            initial={{ y: "60vh" }}
            animate={{ y: "0vh", opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1 }}
            href="https://github.com/jaidaken"
            target="__blank"
            rel="noreferrer"
          >
            <bs.BsGithub />
          </motion.a>
          <motion.a
            initial={{ y: "60vh" }}
            animate={{ y: "0vh", opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1.3 }}
            href="https://www.linkedin.com/in/jhewitthw/"
            target="__blank"
            rel="noreferrer"
          >
            <bs.BsLinkedin />
          </motion.a>

          <motion.a
            initial={{ y: "60vh" }}
            animate={{ y: "0vh", opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1.6 }}
            href={CV}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFilePdf />
          </motion.a>
          <motion.a
            initial={{ y: "60vh" }}
            animate={{ y: "0vh", opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1.9 }}
            href="mailto:jamiehewitt@protonmail.com"
            target="__blank"
          >
            <AiOutlineMail />
          </motion.a>
        </div>
      </div>
      <div className="seperator"></div>
    </section>
  );
}

export default Header
