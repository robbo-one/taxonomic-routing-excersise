import React from 'react'
import rankData from '../../data/ranks'

function classifications (props) {
  const rank = props.match.params.classification
  console.log(rankData[rank])
  const newRank = rankData[rank]
  return (
    <>
    <h3>Classifications</h3>
    <ul>
      {newRank.map(rank => {
        console.log(rank)
        return (
          <li key={rank.id}>
            {rank.name}
            <br>
            </br>
            <br>
            </br>
            {rank.description} 
          </li>

        )
      })}
    </ul>
    </>
  )
}

export default classifications