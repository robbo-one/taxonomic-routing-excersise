import React from 'react'
import { Route } from 'react-router-dom'

// import these JSX files
import Nav from './Nav'
import Home from './Home'
import Classifications from './Classifications'
import Info from './Info'

function App () {
  return (
    <>
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/Ranks/:rank" exact component={Classifications} />
        <Route path="/Ranks/:rank/:name" exact component={Info} />
      </div>
    </>
  )
}

export default App
