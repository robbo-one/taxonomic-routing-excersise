import React from 'react'
import { Link } from 'react-router-dom'
import rankData from '../../data/ranks'

const newData = Object.keys(rankData)

function Nav () {
  console.log(newData)
  return (
    <div>
    <h2>Nav</h2>
    <ul >
    {newData.map(rank => {
      return (
          <li key={rank}>
            <Link to= {rank}>{rank}</Link>
          </li>
      )
    })}
     </ul>  
    
    </div>
  )
}

export default Nav
