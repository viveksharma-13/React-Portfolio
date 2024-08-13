import React from "react";
import "./about.css";
import profile_picture from "../../assets/Vivek.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to learn</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Ademir image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years Dev XP</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                B.Tech Computer Science & Technology
                {/* <br />
                M.Sc. Innovation & Entrepreneurship */}
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                10+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
            I am an Associate Software Engineer with a strong focus on front-end
            development using Angular and JavaScript. I excel in creating
            responsive, user-friendly web applications, writing clean and
            efficient code, and integrating APIs. While my expertise lies in
            front-end technologies, I am also expanding my skills in backend
            development with Django, Flask, and Python APIs. I am dedicated to
            maintaining high code quality and collaborating effectively with
            cross-functional teams to deliver innovative features and
            improvements. My primary tech stack is Angular 17, Material Design,
            TypeScript, Node, and LESS / SASS for styling. Git, Jira and
            IntelliJ is used for team collaboration and deployment. My
            day-to-day consists of a daily stand-up and biweekly sprints. My
            core responsibility centers on creating and maintaining components
            for new features that interact with our large databases as well as
            creating and designing an effective user experience.
          </p>

          <p></p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
