import React from 'react'
import {Link} from 'react-router-dom'

import {capitalize} from '../utilities'
import ranks from '../../data/ranks'

const RankListing = ({match}) => {
  const {rank} = match.params
  const list = ranks[rank]

  return (
    <div className='rank-listing'>
      <h2>{capitalize(rank)}</h2>
      <ul>
        {list.map((item, key) => {
          return (
            <li key={key}><Link to={`/rank/${rank}/${item.name}`}>{item.name}</Link></li>
          )
        })}
      </ul>
    </div>
  )
}

export default RankListing
