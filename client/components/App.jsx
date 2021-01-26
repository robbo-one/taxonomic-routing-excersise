import React from 'react'

import Nav from './Nav'
import Home from './Home'
import Rank from './Rank'

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
        <Route path='/:ranks' exact component={Rank} />
      </div>
    </Router>
    </>
  )
}

export default App
