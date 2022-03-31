import React from 'react';
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import addition from "../images/addition.svg";
import "../styles/Articles.css";

function Articles() {
  return (
    <div>    
        <Navigation />
        <div className = "articles-heading">
          <h2 className = "heading">Articles</h2>
          <Link to = "/articles/create"><img className = "addition-img" src= {addition} alt="" /></Link>
        </div>
    </div>
  )
}

export default Articles;