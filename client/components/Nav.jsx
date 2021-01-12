import React from 'react'
import { Link } from 'react-router-dom'

import { capitalize } from '../utilities'
import withRanks from '../withRanks'

export function Nav ({ ranks, location }) {
  const rankList = Object.keys(ranks)
  return (
    <div className='nav'>
      <h2>Nav</h2>
      <ul>
        {rankList.map((rankName, key) => {
          return <li key={key}>
            <Link
              to={`/list/${rankName}`}
              className={location.pathname.includes(rankName) ? 'selected' : null}
            >
              {capitalize(rankName)}
            </Link>
          </li>
        })}
      </ul>
    </div>
  )
}

export default withRanks(Nav)
