import React from "react";

//css import 
import "./App.css";

//page imports
import Login from "../src/pages/Login"
import Home from "../src/pages/Home";
import Team from "../src/pages/Team";
import Videos from "../src/pages/Videos";
import Articles from "../src/pages/Articles";
import CreateArticle from "../src/pages/CreatArticle"
import ArticleDetails from "../src/pages/ArticleDetail";
import EditArticle from "../src/pages/EditArticle";
import DeleteArticle from "../src/pages/DeleteArticle";

//inter-page imports
import BusinessModel from "../src/pages/BusinessModel";
import CompetitiveAnalysis from "pages/CompetitiveAnalysis";
import CustomerContent from "pages/CustomerContent";
import ElevatorPitch from "pages/ElevatorPitch";
import Funding from "pages/Funding";
import Introduction from "pages/Introduction";
import MarketResearch from "pages/MarketResearch";
import ProblemSlide from "pages/ProblemSlide";
import SolutionSlide from "pages/SolutionSlide";
import Traction from "../src/pages/Traction";
import ValueProposition from "pages/ValueProposition";

//component imports 
import Navigation from "../src/components/Navigation";

//react imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Login />}></Route>
          <Route path = "/home" element = {<Home />}></Route>
          <Route path = "/team" element = {<Team />}></Route>
          <Route path = "/videos" element = {<Videos />}></Route>
          <Route path = "/articles" element = {<Articles />}></Route>
          <Route path = "/articles/create/" element = {<CreateArticle />}></Route>
          <Route path = "/articles/details/:id" element = {<ArticleDetails />}></Route>
          <Route path = "/articles/edit/:id" element = {<EditArticle />}></Route>
          <Route path = "/articles/delete/:id" element = {<DeleteArticle />}></Route>
          <Route path = "/videos/business-model" element = {<BusinessModel />}></Route>
          <Route path = "/videos/competitive-analysis" element = {<CompetitiveAnalysis />}></Route>
          <Route path = "/videos/customer-content" element = {<CustomerContent />}></Route>
          <Route path = "/videos/elevator-pitch" element = {<ElevatorPitch />}></Route>
          <Route path = "/videos/funding" element = {<Funding />}></Route>
          <Route path = "/videos/introduction" element = {<Introduction />}></Route>
          <Route path = "/videos/market-research" element = {<MarketResearch />}></Route>
          <Route path = "/videos/problem-slide" element = {<ProblemSlide />}></Route>
          <Route path = "/videos/solution-slide" element = {<SolutionSlide />}></Route>
          <Route path = "/videos/traction" element = {<Traction />}></Route>
          <Route path = "/videos/value-proposition" element = {<ValueProposition />}></Route>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
