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
          const normal = <li key={key}><Link to={`/list/${rankName}`}>{capitalize(rankName)}</Link></li>
          const selected = <li key={key}><strong><Link to={`/list/${rankName}`}>{capitalize(rankName)}</Link></strong></li>
          return location.pathname.includes(rankName) ? selected : normal
        })}
      </ul>
    </div>
  )
}

export default withRanks(Nav)
