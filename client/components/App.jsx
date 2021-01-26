import React from 'react'
import Nav from './Nav'
import Home from './Home'
import { Route } from 'react-router-dom'


function App () {
  return (
    <>
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        
        <Nav />
        <Route path='/' exact component={Home}/>
        <Route path='/Nav' exact component={Nav}/>
        {/* <Route path='/Rank' exact component={rank}/> */}
        <Home />
        
      </div>
    </>
  )
}

export default App
