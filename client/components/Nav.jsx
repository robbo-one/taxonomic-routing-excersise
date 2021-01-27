import React from 'react'
import rankData from "../../data/ranks"
import { Link } from 'react-router-dom'

const Nav = (props) => {
  const ranks = Object.keys(rankData)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        { ranks.map(rank => {
          return <li> <Link to={`/${ rank }`}>{rank}</Link></li>
        })}
      </ul>
    </div>
  )
  }
export default Nav 
