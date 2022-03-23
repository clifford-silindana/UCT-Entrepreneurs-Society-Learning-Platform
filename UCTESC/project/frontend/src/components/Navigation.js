import React from 'react';
import UCTESClogo from "../images/UCTESClogo.svg";
import videos from "../images/videos.svg";
import articles from "../images/articles.svg";
import team from "../images/team.svg";

import { Link } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <div className = "navigation">
        <div>
            <Link className = "UCTESClogo" to ="/home"><img className = "UCTESClogo-img" src = {UCTESClogo} alt="" /></Link>
        </div>
        <div>
            <ul className = "navigation-links">
                <li><Link className = "navigation-link" to = "/videos"><img className = "nav-link-img"src= {videos} alt="" /></Link></li>
                <li><Link className = "navigation-link" to = "/articles"><img className = "nav-link-img"src={articles} alt= "" /></Link></li>
                <li><Link className = "navigation-link" to = "/team"><img className = "nav-link-img"src= {team} alt="" /></Link></li>
            </ul>
        </div>
    </div>
  )
};

export default Navigation;