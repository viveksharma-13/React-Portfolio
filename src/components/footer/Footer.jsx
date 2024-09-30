import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        Vivek Sharma
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        {/* <a href="https://www.youtube.com/@howtobecomeadeveloper">
          <BsYoutube />
        </a> */}
        <a href="https://linkedin.com/in/vivek-sharma-37b781203">
          <BsLinkedin />
        </a>
        <a href="https://github.com/viveksharma-13">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Vivek Sharma. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
