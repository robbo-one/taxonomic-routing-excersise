 
import React from 'react'
import { Link } from 'react-router-dom'
import rankData from '../../data/ranks'

const Ranks = (props) => {
  const rank = props.match.params.rank
  console.log('Ranks', rankData[rank])
  return (
    <>
      <h1>ranks!</h1>
      {/* { rankData.map(rank => {
        return (
          <p key={rank.id}>
            <Link to={`/ranks/${rank.id}`}>{rank.name}</Link>
          </p>
        )
      })} */}
    </>
  )
}
export default Ranks