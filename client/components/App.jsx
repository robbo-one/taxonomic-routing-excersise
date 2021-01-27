import React from 'react'
import Nav from './Nav'
import Home from './Home'
import { Route } from 'react-router-dom'
import Species from './Species'
import Classifications from './Classifications'


function App () {
  return (
    <>
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Nav />
        <Route path='/' exact component={Home}/>
        <Route path='/:rank' exact component={Classifications}/>
        <Route path='/rank/:rank/:classification' exact component={Species}/>
      </div>
    </>
  )
}

export default App
