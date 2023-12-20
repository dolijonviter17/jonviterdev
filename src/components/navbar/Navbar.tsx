import { useState } from "react";
import "./Navbar.css";
import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";
const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleOpenMenu = () => {
    alert("hyy");
  };

  return (
    <>
      <div className="navbar-container">
        {/* <p>this my navbar</p> */}
        <div className="left">
          <h5>Jonviter Simbolon</h5>
          <p>Mobile Developer</p>
        </div>
        <div className="middle">
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <a
              target="blank"
              href="https://github.com/dolijonviter17/dolijonviter17/blob/main/CV_Jonviter.pdf"
            >
              Resume
            </a>
          </div>
          <div>
            <a href="#projects">My Project</a>
          </div>
          <div>
            <a href="#skills">Skils</a>
          </div>
          <div>
            <a href="#about">About Me</a>
          </div>
        </div>
        <div className="menu-outline">
          <button onClick={() => setVisible(!visible)}>
            <MenuOutlined
              style={{
                fontSize: 40,
              }}
            />
          </button>
        </div>
      </div>
      {visible ? (
        <div className="menu-with-burger">
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <a
              target="blank"
              href="https://github.com/dolijonviter17/dolijonviter17/blob/main/CV_Jonviter.pdf"
            >
              Resume
            </a>{" "}
          </div>
          <div>
            <a href="#projects">My Project</a>
          </div>
          <div>
            <a href="#skills">Skils</a>
          </div>
          <div>
            <a href="#about">About Me</a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
