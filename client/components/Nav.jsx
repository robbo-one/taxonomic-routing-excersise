import React from 'react'
import { Link } from 'react-router-dom'
import ranks from '../../data/ranks'


function Nav () {
  const rankNames = Object.keys(ranks)
  console.log(rankNames)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
      {rankNames.map(rank => {
        return (
          <li>
            <Link to={`/list/${rank}`}>{rank}</Link>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Nav
