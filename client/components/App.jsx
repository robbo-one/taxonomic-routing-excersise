import React from 'react'
import Nav from './Nav'
import Home from './Home'
import Classifications from './Classifications'
import { Route } from 'react-router-dom'

function App () {
  return (
    <>
      <h1>Navigating the taxonomic routes</h1>
      <div className='main'>
        <Nav />
        <div>
           <Route path="/:rank" exact component={Classifications} />
        </div>
           <Route path="/" exact component={Home} />
      </div>
    </>
  )
}

export default App
