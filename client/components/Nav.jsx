import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../../data/ranks'


export function Nav () {
  // const rankList = Object.keys(ranks)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {Object.keys(ranks).map (rank => {
          return (<li><Link to={`/${rank}`}>{rank}</Link>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default Nav
