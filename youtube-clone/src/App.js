import React from "react";  //Was not here from default
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    //BEM class naming convention (Block Element Modifier)
    // Router determins what url loads what component
    <div className="app">
      <Router> 

      <Header/>

        <Switch>

          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar/>
              <SearchPage />
            </div> 
          </Route>

          <Route path="/">
            <div className="app__page">
              <Sidebar/>
              <RecommendedVideos />
            </div> 
          </Route>

        </Switch>
      </Router>

     
     
  
    </div>
  );
}

export default App;
