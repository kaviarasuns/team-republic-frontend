import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-github"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-tumblr"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write">WRITE</Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            src="https://i1.sndcdn.com/artworks-000040814493-eu3kr3-t500x500.jpg"
            alt=""
            className="topImg"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;
