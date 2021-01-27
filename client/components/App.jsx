import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Classifications from "./Classifications"
import Classification from "./Classification"
import SpeciesListing from "./SpeciesListing"
import Species from "./Species"

function App() {
  return (
    <>
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Router>
          <Route path="/" component={Nav} />
          <Route path="/" exact component={Home} />
          <Route path="/rank/:rank" exact component={Classifications} />
          <Route path="/rank/:rank/:name" component={Classification} />
          <Route path="/rank/:rank/:name/species" exact component={SpeciesListing} />
          <Route path="/species/:id" exact component={Species} />
        </Router>
      </div>
    </>
  );
}

export default App;
