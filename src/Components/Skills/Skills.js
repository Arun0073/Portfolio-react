import React, { useContext } from "react";
import "./Skills.css";
import Heart from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Cards/Card";
import Resume from "../../Components/Skills/Resume.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Skills = () => {
  const transition = { duration: "1sec", type: "spring" };
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="Skills" id="Skills">
      <div className="awesome">
        <span style={{ color: darkmode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Take a look at my awesome services
          <br />
          I deliver comprehensive web development services
          <br />
          including custom website design, full-stack development,
          <br />
          ensuring robust performance and outstanding user experience.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={Heart}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html , Css , Javascript ,React, Node"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Designed intuitive user interfaces and optimized user experience for a seamless interaction flow. "
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
