import React from 'react'
import { Link } from 'react-router-dom'
import ranks from '../../data/ranks'
import capitalise from '../utilities/capitalise'


function Nav (props) {
  const pathName = props.location.pathname
  const rankNames = Object.keys(ranks)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
      {rankNames.map(rank => {
        return (
          <li key={rankNames.find(rankName => rankName == rank)}>
            <Link to={`/rank/${rank}`}>
              {pathName.includes(rank) ? <strong>{capitalise(rank)}</strong> : capitalise(rank)}
            </Link>
          </li>
        )
      })}
      </ul>
    </div>
  )
}
export default Nav