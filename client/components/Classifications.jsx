import React from 'react'
import { Link } from 'react-router-dom'
import ranks from '../../data/ranks'

const Classifications = (props) => {


  
  let rankList = Object.keys(ranks)
  const classification = props.match.params.rank
  return (
    <div>
      <h2>Classifications</h2>
      <ul>
      {ranks[classification].map(val => {return <li><Link to={`/rank/${classification}/${val.name}`}>{val.name}</Link></li>})}
      </ul>
    </div>
  )
}

export default Classifications
