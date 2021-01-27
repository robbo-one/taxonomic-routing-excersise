import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Classifications from './Classifications'
import Description from './Description'
import SpeciesListing from './SpeciesListing'
import Species from './Species'

function App () {
  return (
    <>
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/rank/:rank" component={Classifications} />
        <Route path="/rank/:rank/:name" component={Description} />
        <Route path="/rank/:rank/:name/species" component={SpeciesListing} />
        <Route path="/species/:id" component={Species} />
      </div>
    </>
  )
}

export default App
