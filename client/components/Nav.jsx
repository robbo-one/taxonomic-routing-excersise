import React from 'react'
import { Link } from 'react-router-dom'

import ranks from '../../data/ranks'


function Nav (props) {


  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {Object.keys(ranks).map(rank => {
          return (
            <li key={rank.id}>
              <Link to={`/list/${rank}`}> {rank}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
