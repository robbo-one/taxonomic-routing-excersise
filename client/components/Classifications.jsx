import React from 'react'
import rankData from "../../data/ranks"
import { Link } from 'react-router-dom'

const Classification = (props) => {
  const rank = props.match.params.rank
  console.log(rank)
  // console.log('Classification', rankData[classification])
  const aRank = rankData[rank]//a list of ranks with classifications
  console.log(aRank)
  return (
    <>
      <h1>Classifications!</h1>
      { aRank.map(classification => {
        // console.log(classification)
        return (
          <p key={classification.id}> 
            <Link to={`/ranks/${classification.name}`}></Link>{classification.description}
          </p>
        )
      })}
    </>
  )
}




export default Classification