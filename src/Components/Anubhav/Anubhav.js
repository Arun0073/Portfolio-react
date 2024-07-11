import React, { useContext } from "react";
import "./Anubhav.css";
import { themeContext } from "../../Context";

const Anubhav = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="Anubhav" id="Anubhav">
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkmode ? "var(--orange)" : "" }}
        >
          2+
        </div>
        <span style={{ color: darkmode ? "white" : "" }}>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkmode ? "var(--orange)" : "" }}
        >
          15+
        </div>
        <span style={{ color: darkmode ? "white" : "" }}>Completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkmode ? "var(--orange)" : "" }}
        >
          2+
        </div>
        <span style={{ color: darkmode ? "white" : "" }}>Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Anubhav;
