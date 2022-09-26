import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-49172,resizemode-1,msid-74960590/wealth/save/how-does-upi-work.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          voluptatem quo autem debitis est incidunt tempore? Impedit ex
          blanditiis totam debitis sapiente, a quaerat, atque iure, quae
          laboriosam sint nulla?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Politics</li>
          <li className="sidebarListItem">Economics</li>
          <li className="sidebarListItem">Tamil Nadu</li>
          <li className="sidebarListItem">Kerala</li>
          <li className="sidebarListItem">Karnataka</li>
          <li className="sidebarListItem">Delhi Politics</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-github"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-tumblr"></i>
        </div>
      </div>
    </div>
  );
}
