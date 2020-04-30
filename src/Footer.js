import React from "react";

function Footer () {
  const footerStyle = {
    color: "white",
    backgroundColor: "black",
    padding: "20px",
    fontFamily: "Arial",
    letterSpacing: "5px",
    textAlign: "center",
    fontSize: "25px",
  };

  return (
    <footer>
      <div>
        <h1 style={footerStyle}>Valerie Vazquez <i class="fa fa-facebook-square"></i></h1>
        
      </div>
    </footer>
  );
};

export default Footer;
