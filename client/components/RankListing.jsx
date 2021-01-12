import React from 'react'
import { Link } from 'react-router-dom'

import { capitalize } from '../utilities'
import withRanks from '../withRanks'

export function RankListing ({ ranks, match }) {
  const { rank } = match.params
  const list = ranks[rank]

  return (
    <div className='rank-listing'>
      <h2>{capitalize(rank)}</h2>
      <ul>
        {list.map((classification, key) => {
          return (
            <li key={key}><Link to={`/rank/${rank}/${classification.name}`}>{classification.name}</Link></li>
          )
        })}
      </ul>
    </div>
  )
}

export default withRanks(RankListing)
