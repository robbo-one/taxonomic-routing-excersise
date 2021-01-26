import React from 'react'
import ranks from '../../data/ranks.js'
import { Link } from 'react-router-dom'


function Nav () {
  let a = Object.keys(ranks)
  console.log(a)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        { a.map(rank => {
          return (
            <li key={rank}>
              <Link to={`/Ranks/${rank}`}>{rank}</Link>
            </li>
          )}
        )}
      </ul>
    </div>
  )
}

export default Nav
