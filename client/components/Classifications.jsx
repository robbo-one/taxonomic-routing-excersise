import React from 'react'
import {Link} from 'react-router-dom'
import ranks from "../../data/ranks"

const Classifications = (props) => {
  const rank = props.match.params.rank;

  const classifications = ranks[rank];

  return (
    <div>
      <h2>{rank}</h2>
      <ul>
      {(classifications).map((classification) => {         
         return (
             
          <li key={classification.id}>
          <Link to={`/${rank}/${classification.name}`}>{classification.name}</Link>
          </li>
         ); 
        })}
      </ul>
    </div>
  )
}

export default Classifications