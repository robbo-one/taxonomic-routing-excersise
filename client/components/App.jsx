import React from 'react'
import Nav from './Nav'
import Home from './Home'
import Classifications from './Classifications'
import { Route } from 'react-router-dom'

function App () {
  return (
    <>
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
          <Nav/>
          <Route path="/:rank" exact component={Classifications} />
          {/* <Route path="" exact component={Classifications} /> */}
        {/* <Home /> */}
        <Route path="/" exact component={Home} />
      </div>
    </>
  )
}

export default App
