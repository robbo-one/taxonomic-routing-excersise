import React from 'react'

import Nav from './Nav'
import Home from './Home'
import Classifications from './Classifications'
import { Link } from 'react-router-dom'


import { HashRouter as Router, Route } from 'react-router-dom'

function App () {
  return (
    <>
    <Router>
      <h1>Navigating the taxonomic routes</h1>
       <Link to="/">Home</Link>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/link/:ranks' exact component={Classifications}></Route>
      </div>
      </Router>
    </>
  )
}

export default App
