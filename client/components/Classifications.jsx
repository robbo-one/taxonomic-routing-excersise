import React from 'react'
import rankData from "../../data/ranks"
import { Link } from 'react-router-dom'

const Classifications = (props) => {
  const classification = props.match.params.classification
  console.log('Classifications', rankData[classification])
  return (
    <>
      <h1>Classifications!</h1>
      { rankData.map(rank => {
        return (
          <p key={rank.id}>
            <Link to={`/ranks/${rank.id}`}>{rank.name}</Link>
          </p>
        )
      })}
    </>
  )
}




export default Classifications