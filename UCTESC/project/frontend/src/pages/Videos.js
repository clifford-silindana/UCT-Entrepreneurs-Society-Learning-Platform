import React from 'react';
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import "../styles/Videos.css";

//image imports
import businessmodel from "../images/businessmodel.jpg";
import competition from "../images/competition.jpg";
import customersegments from "../images/customersegments.jpg";
import elevatorpitch from '../images/elevatorpitch.jpg';
import funding from "../images/funding.jpg";
import introduction from "../images/introduction.jpg";
import marketresearch from "../images/marketresearch.jpg";
import problem from "../images/problem.jpg";
import solution from "../images/solution.jpg";
import traction from "../images/traction.jpg";
import valueprop from "../images/valueprop.jpg";

function Videos() {
  return (
    <div>
        <Navigation />
        <div className = "page-text">
            <p className = "page-description">
                Take off for the Simulation Challenge with our learning resources &#128640;
            </p>
        </div>
        <div className = "content-section">
            <div className = "content">
            <Link to = "/videos/introduction">
                <div className = "video-type-section">
                    <img className = "video-thumbnail" src= {introduction} alt="thumbnail" />
                    <h2 className = "video-text">introduction</h2>
                </div>
            </Link>
            
            <Link to = "/videos/problem-slide">
                <div className = "video-type-section">
                    <img className = "video-thumbnail" src= {problem} alt="thumbnail" />
                    <h2 className = "video-text">problem slide</h2>
                </div>
            </Link>

            <Link to = "/videos/solution-slide">
                <div className = "video-type-section">
                    <img className = "video-thumbnail" src= {solution} alt="thumbnail" />
                    <h2 className = "video-text">solution slide</h2>
                </div>
            </Link>

            <Link to = "/videos/business-model">
                <div className = "video-type-section">
                    <img className = "video-thumbnail" src= {businessmodel} alt="thumbnail" />
                    <h2 className = "video-text">business model</h2>
                </div>
            </Link>

            <Link to = "/videos/traction">
                <div className = "video-type-section">
                    <img className = "video-thumbnail" src= {traction} alt="thumbnail" />
                    <h2 className = "video-text">traction</h2>
                </div>
            </Link>

            <Link to = "/videos/market-research">
                <div className = "video-type-section">
                    <img className = "video-thumbnail" src= {marketresearch} alt="thumbnail" />
                    <h2 className = "video-text">market research</h2>
                </div>
            </Link>

            <Link to = "/videos/competitive-analysis">
                <div className = "video-type-section">
                    <img className = "video-thumbnail" src= {competition} alt="thumbnail" />
                    <h2 className = "video-text">competitive analysis</h2>
                </div>
            </Link>

            <Link to = "/videos/customer-content">
                <div className = "video-type-section">
                    <img className = "video-thumbnail" src= {customersegments} alt="thumbnail" />
                    <h2 className = "video-text">customer content</h2>
                </div>
            </Link>

            <Link to = "/videos/value-proposition">
                <div className = "video-type-section">
                    <img className = "video-thumbnail" src= {valueprop} alt="thumbnail" />
                    <h2 className = "video-text">value proposition</h2>
                </div>
            </Link>

            <Link to = "/videos/elevator-pitch">
                <div className = "video-type-section">
                    <img className = "video-thumbnail" src= {elevatorpitch} alt="thumbnail" />
                    <h2 className = "video-text">elevator pitch</h2>
                </div>
            </Link>

            <Link to = "/videos/funding">
                <div className = "video-type-section">
                    <img className = "video-thumbnail" src= {funding} alt="thumbnail" />
                    <h2 className = "video-text">use of funds</h2>
                </div>
            </Link>
            </div>
        </div>
        
    </div>
  )
};

export default Videos;
