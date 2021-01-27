import React from 'react'
import { Link } from 'react-router-dom'

import ranks from '../../data/ranks'

function cap (string) {
  const newstring = string[0].toUpperCase() + 
  string.substring(1)
  
  return newstring
}

function Nav (props) {


  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li>
          <Link to='/'> Home</Link>
        </li>
        {Object.keys(ranks).map(rank => {
          return (
            <li key={rank.id}>
              <Link to={`/list/${rank}`}> {cap(rank)}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
