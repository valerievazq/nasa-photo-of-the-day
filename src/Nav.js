import React from "react";
import { Camera } from "react-bootstrap-icons";

function Nav() {
  const mystyle = {
    color: "white",
    backgroundColor: "black",
    padding: "20px",
    fontFamily: "Arial",
    letterSpacing: "5px",
    textAlign: "center",
  };

  return (
    <nav>
      <h1 style={mystyle}>
        Nasa Photo Of The Day <Camera />
      </h1>
    </nav>
  );
};

export default Nav;
