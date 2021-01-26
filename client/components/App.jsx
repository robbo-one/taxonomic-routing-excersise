import React from 'react'
import Nav from './Nav'
import Home from './Home'
import { Route } from 'react-router-dom'
import Ranks from './Ranks'
import Classifications from './Classifications'


function App () {
  return (
    <>
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Nav />
        <Route path='/' exact component={Home}/>
        <Route path='/:rank/:id' exact component={Ranks}/>
        <Route path='/:classification' exact component={Classifications}/>

      </div>
    </>
  )
}

export default App
