import React from 'react'
import { Route } from 'react-router-dom'


import Nav from './Nav'
import Home from './Home'

function App () {
  return (
    <>
    
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Route path="/" exact component={Home} />
        <Route path="/" component={Nav} />
      </div>
    </>
  )
}

export default App
