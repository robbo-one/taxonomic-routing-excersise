import React from 'react'
import { Route } from 'react-router-dom'


import Nav from './Nav'
import Home from './Home'
import Ranks from './Ranks'
import Classification from './Classifications'

function App () {
  return (
    <>
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Route path="/" component={Nav} />
        <Route path="/" exact component={Home} />
        <Route path="/:rank" exact component={Ranks} />
        <Route path="/:rank/:classification" component={Classification} />
      </div>
    </>
  )
}

export default App
