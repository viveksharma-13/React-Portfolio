import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {/* <a target="_blank" href="https://www.youtube.com/@howtobecomeadeveloper">
        <BsYoutube />
      </a> */}
      <a target="_blank" href="https://linkedin.com/in/vivek-sharma-37b781203">
        <BsLinkedin />
      </a>
      <a target="_blank" href="https://github.com/viveksharma-13">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
