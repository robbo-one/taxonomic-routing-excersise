import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'

function App () {
  return (
    <>
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <Router>
        <div className='main'>
          <Nav />
          <Home />
        </div>
      </Router>
    </>
  )
}

export default App
