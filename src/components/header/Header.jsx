/* eslint-disable indent */
import React from "react";
import "./header.css";
import { motion } from "framer-motion";
import * as bs from "react-icons/bs";
import { AiOutlineMail, AiFillFilePdf } from "react-icons/ai";
import TypeIt from "typeit-react";

function Header() {
  return (
    <section className="header">
      <div className="">
        <TypeIt
          className="title"
          options={{
            speed: 80,
            lifeLike: true,
            waitUntilVisible: true,
            loop: false,
            loopDelay: 15000,
          }}
          getBeforeInit={(instance) => {
            instance
              .type("Hello!")
              .pause(2000)
              .delete(1)
              .pause(500)
              .type(", I'm Jamie Hewitt.");

            // Remember to return it!
            return instance;
          }}
        />
        <div className="links">
          <motion.a
            initial={{ x: "-60vw" }}
            animate={{ x: "0vw", opacity: [0, 1] }}
            transition={{ duration: 1, delay: 5 }}
            href="https://github.com/jaidaken"
            target="__blank"
          >
            <bs.BsGithub />
          </motion.a>
          <motion.a
            initial={{ x: "-60vw" }}
            animate={{ x: "0vw", opacity: [0, 1] }}
            transition={{ duration: 1, delay: 5.3 }}
            href="https://www.linkedin.com/in/jhewitthw/"
            target="__blank"
          >
            <bs.BsLinkedin />
          </motion.a>

          <motion.a
            initial={{ x: "-60vw" }}
            animate={{ x: "0vw", opacity: [0, 1] }}
            transition={{ duration: 1, delay: 5.6 }}
            href="mailto:jamiehewitt@protonmail.com"
            target="__blank"
          >
            <AiFillFilePdf />
          </motion.a>
          <motion.a
            initial={{ x: "-60vw" }}
            animate={{ x: "0vw", opacity: [0, 1] }}
            transition={{ duration: 1, delay: 5.9 }}
            href="mailto:jamiehewitt@protonmail.com"
            target="__blank"
          >
            <AiOutlineMail />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Header;
