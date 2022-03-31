import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Login.css";
import UCTNight from "../images/UCTNight.jpg";
import UCTESClogo2 from "../images/UCTESClogo2.svg";

function Login() {
  return (
    <div className = "login-page">
        <img className = "login-bg-img" src= {UCTNight} alt="" />
        <form id = "login-form" action="#">
            <input id = "student-number" className = "input-field" type="text" placeholder='student number'/>
            <input id = "password" className = "input-field" type="password" placeholder='password'/>
            <button id = "login-btn">log in</button>
            <p className = "register-text">No account?<Link to ="/register"> Register</Link> &#128522;</p>
        </form>
        <img className = "UCTESClogo2" src= {UCTESClogo2} alt="" />
    </div>
  )
};

export default Login;