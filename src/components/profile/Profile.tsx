import { useState } from "react";
import "./Profile.css";
import Photo from "../../assets/Me.jpg";
import { Button } from "antd";
import {
  InstagramOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
const { Title } = Typography;

const Profile = () => {
  return (
    <div className="profile-container">
      <div>
        <div className="profile-title">
          <h1 className="text-profile">Building Mobile Apps</h1>
          <h1 className="text-profile">Write Better Code </h1>
          <h1 className="text-profile">Learning By Doing</h1>
        </div>
        <div className="social-media-container">
          {/* <Button type="primary">Button</Button> */}
          <a href="http://">
            <InstagramOutlined
              style={{
                fontSize: 50,
              }}
            />
          </a>
          <a target="blank" href="https://github.com/dolijonviter17">
            {" "}
            <GithubOutlined
              style={{
                fontSize: 50,
              }}
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/dolijonviter17/">
            {" "}
            <LinkedinOutlined
              style={{
                fontSize: 50,
              }}
            />
          </a>
          <a target="_blank" href="https://twitter.com/Jonviterr">
            {" "}
            <TwitterOutlined
              style={{
                fontSize: 50,
              }}
            />
          </a>
        </div>
      </div>
      <div>
        <img
          src={Photo}
          alt=""
          className="img-profile"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};
export default Profile;
