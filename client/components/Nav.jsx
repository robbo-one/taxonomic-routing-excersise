import React from 'react'
import ranks from '../../data/ranks'
import { Link } from 'react-router-dom'

let rankList = Object.keys(ranks)


const Nav = (props) => {

  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {rankList.map(val=> {return <li><Link to={`/rank/${val}`}>{val}</Link></li>})}
      </ul>
    </div>
  )
}

export default Nav
