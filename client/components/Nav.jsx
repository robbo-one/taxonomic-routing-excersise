import React from 'react'
import { Link } from 'react-router-dom'
import ranks from '../../data/ranks'


function Nav () {
  const rankNames = Object.keys(ranks)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
      {rankNames.map(ranks => {
        return (
          <li>
            <Link to={`/list/${ranks}`}>{ranks}</Link>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Nav
