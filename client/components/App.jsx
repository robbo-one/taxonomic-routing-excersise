import React from 'react'

import Nav from './Nav'
import Home from './Home'
import Classifications from './Classifications'
import Description from './Description'
import SpeciesListing from './SpeciesListing'

import { HashRouter as Router, Route } from 'react-router-dom'


function App () {
  return (
    <>
    <Router>
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/:ranks' exact component={Classifications} />
        <Route path='/:ranks/:name' exact component={Description} />
        <Route path='/:ranks/:name/species' exact component={SpeciesListing} />
      </div>
    </Router>
    </>
  )
}

export default App
