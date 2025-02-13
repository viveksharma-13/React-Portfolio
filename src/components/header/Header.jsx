import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/vivek-img.jpg";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vivek Sharma</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="vivek-img">
          <img src={header_picture} alt="Vivek Sharma" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
