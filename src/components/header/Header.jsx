import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Team Republic</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.indiaspend.com/h-upload/old_images/1600x960_343089-library1440.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
