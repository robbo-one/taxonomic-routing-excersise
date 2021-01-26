import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import ranks from '../../data/ranks'


function Nav () {


  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {ranks.kingdoms.map(rank => {
          return (
            <li key={rank.id}>
              {rank.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
