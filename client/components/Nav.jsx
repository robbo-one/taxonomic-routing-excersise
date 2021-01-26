import React from 'react'

import { Link } from 'react-router-dom'
import ranks from '../../data/ranks'

function Nav () {
  const ranksArr = Object.keys(ranks)
  // console.log(ranksArr)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {ranksArr.map(rank => {
          return (
          <li>
            <Link to={`/${rank}`}>{rank}</Link>
          </li>
          )
        })}
      </ul>
    </div>
    
  )
}

export default Nav
