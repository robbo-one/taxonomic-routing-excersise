import React from 'react'
import rankData from '../../data/ranks'
import { Link } from 'react-router-dom'

function classifications (props) {
  const rank = props.match.params.rank
  console.log(rankData[rank])
  const newClassifications = rankData[rank]
  return (
    <>
    <h3>Classifications</h3>
    <ul>
      {newClassifications.map(classification => {
        return (
          <li key={classification.id}>
            <Link to={`/rank/${rank}/${classification.name}`}>{classification.name}</Link>
            <br>
            </br>
            {classification.description} 
            <br></br>
          </li>
        )
      })}
    </ul>
    </>
  )
}

export default classifications