import { useEffect, useState } from "react";
import "./AboutMe.css";
import Photo from "../../assets/Me.jpg";
import axios from "axios";
import ProjectImg from "../../assets/project.png";
import { Button } from "antd";
import {
  InstagramOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { styled } from "styled-components";
import {
  SiTypescript,
  SiAntdesign,
  SiReacthookform,
  SiRedux,
  SiReduxsaga,
  SiStyledcomponents,
} from "react-icons/si";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import {
  DiCss3,
  DiBootstrap,
  DiJsBadge,
  DiReact,
  DiDatabase,
  DiMongodb,
  DiNodejs,
} from "react-icons/di";

import { FaSquareGit } from "react-icons/fa6";

const myRepoURL = "https://api.github.com/users/dolijonviter17/repos";

const { Title } = Typography;

const AboutMe = () => {
  const [project, setProject] = useState([]);
  const fetchMyProject = () => {
    try {
      axios.get(myRepoURL).then((res) => {
        console.log(res.data);
        setProject(res.data);
      });
    } catch (error) {}
  };

  useEffect(() => {
    fetchMyProject();
  }, []);
  return (
    <>
      {/* about */}
      <section id="about">
        <div className="about-header">
          <BsFillPersonVcardFill className="aboutme-icon" />
          <h1>About Me</h1>

          <div className="introduce">
            <p className="text-introduce">
              My name is <span>Jonviter Simbolon</span> I'm a graduate student
              of the <span>Politeknik Pos Indonesia </span> majoring{" "}
              <span>Informatics Engineering.</span> I come from{" "}
              <span>Bandung City, West Java,</span> During my time at college I
              have been involved in making Web applications, I learned many
              things about programming languages such as PHP, Android, Java,
              HTML, Javascript and many more, and finally I chose to{" "}
              <span>focus on making Javascript-based applications.</span> By
              learning all that, I have high hopes for success in the field that
              I am currently pursuing, namely working in an IT company.
            </p>
          </div>
        </div>
      </section>

      {/* skills */}

      <section id="skills">
        <div className="about-header">
          <FaLaptopCode className="aboutme-icon" />
          <h1>Skils</h1>
        </div>
        <div className="item-skill-wrapper">
          <div className="skill-item">
            <DiCss3 className="project-icon" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <DiBootstrap className="project-icon" />
            <p>Boostrap</p>
          </div>
          <div className="skill-item">
            <SiStyledcomponents className="project-icon" />
            <p>Styled Component</p>
          </div>
          <div className="skill-item">
            <DiJsBadge className="project-icon" />
            <p>Javascript</p>
          </div>
          <div className="skill-item">
            <DiReact className="project-icon" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <DiDatabase className="project-icon" />
            <p>SQL</p>
          </div>
          <div className="skill-item">
            <SiTypescript className="project-icon" />
            <p>Typescript</p>
          </div>
          <div className="skill-item">
            <DiMongodb className="project-icon" />
            <p>MongoDB</p>
          </div>
          <div className="skill-item">
            <SiAntdesign className="project-icon" />
            <p>Ant Design</p>
          </div>
          <div className="skill-item">
            <DiNodejs className="project-icon" />
            <p>Node JS</p>
          </div>
          <div className="skill-item">
            <SiRedux className="project-icon" />
            <p>Redux</p>
          </div>
          <div className="skill-item">
            <SiReduxsaga className="project-icon" />
            <p>Redux Saga</p>
          </div>
          <div className="skill-item">
            <FaSquareGit className="project-icon" />
            <p>GIT</p>
          </div>
        </div>
      </section>

      {/* apps */}

      <section id="projects">
        <div className="about-header">
          <BsCodeSlash className="aboutme-icon" />
          <h1>Apps I've Build</h1>
        </div>

        <div className="project-item-container">
          {project.length > 0
            ? project.map((data: any, key) => {
                return (
                  <div className="project-item-box" key={key}>
                    <div className="project-item">
                      {/* <img src={ProjectImg} alt="" className="img-project" /> */}
                    </div>
                    <div className="project-description">
                      <h2>{data.name}</h2>
                      <h4>Typescript, CSS, HTLM </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum doloremque facilis sapiente, quibusdam, molestiae
                        numquam culpa ea fugiat voluptas id saepe tempore
                        voluptatibus qui at, quam dolor quod sed? Possimus!
                      </p>
                    </div>
                  </div>
                );
              })
            : null}

          <div className="project-item-box">
            <div className="project-item">
              {/* <img src={ProjectImg} alt="" className="img-project" /> */}
            </div>
            <div className="project-description">
              <h2>Note Application</h2>
              <h4>Typescript, CSS, HTLM </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                doloremque facilis sapiente, quibusdam, molestiae numquam culpa
                ea fugiat voluptas id saepe tempore voluptatibus qui at, quam
                dolor quod sed? Possimus!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutMe;
