import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Classifications from "./Classifications"
import Classification from "./Classification"

function App() {
  return (
    <>
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Router>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/rank/:rank" exact component={Classifications} />
          <Route path="/rank/:rank/:name" exact component={Classification} />
        </Router>
      </div>
    </>
  );
}

export default App;
