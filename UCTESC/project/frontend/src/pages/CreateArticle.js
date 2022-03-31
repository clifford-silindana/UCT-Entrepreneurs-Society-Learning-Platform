import React from 'react';
import Navigation from "../components/Navigation";
//import "../styles/CreatArticle.css";

function CreateArticle() {
  return (
    <div>
        <Navigation />
      <h2>CreateArticle</h2>
      <form action="#">
        <label htmlFor="article-author">author</label>
        <input id = "article-author" type="text" />
        <label htmlFor="article-body">write your article here...</label>
        <input type="textarea" />
        <button id = "submit-btn">submit</button>

      </form>
    </div>
  )
};

export default CreateArticle;