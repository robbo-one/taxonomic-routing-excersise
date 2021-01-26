import React from 'react'
import { Route } from 'react-router-dom'

// import these JSX files
import Nav from './Nav'
import Home from './Home'

function App () {
  return (
    <>
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Nav />
        <Route path="/" exact component={Home} />
      </div>
    </>
  )
}

export default App
