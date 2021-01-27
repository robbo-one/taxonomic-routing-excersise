import React from 'react'
import { Link } from 'react-router-dom'
import ranks from '../../data/ranks'

function Nav () {

  const rankNames = Object.keys(ranks)
  return (
    <div>
      {/* {console.log(rankNames)} */}
      <h2>Nav</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
      {rankNames.map(rank => {
        return (
          <li key={rankNames.find(rankName => rankName == rank)}>
            <Link to={`/rank/${rank}`}>{rank}</Link>
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Nav
