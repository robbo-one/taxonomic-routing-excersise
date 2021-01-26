import React from 'react'

import { Link } from 'react-router-dom'
import ranks from '../../data/ranks'

function Nav () {
  const ranksArr = Object.keys(ranks)
  console.log(ranksArr)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {ranksArr.map(rank => {
          return (
          <li>
            <Link to={`/${rank}`}>{rank}</Link>
          </li>
          )
        })}
        {/* <li>
          <Link to={`/${ranksArr[0]}`}>{ranksArr[0]}</Link>
        </li> */}
        {/* <li>
          <Link to='/kingdoms'>Kingdoms</Link>
        </li>
        <li>
          <Link to='/phyla'>Phyla</Link>
        </li>
        <li>
          <Link to='/classes'>Classes</Link>
        </li>
        <li>
          <Link to='/orders'>Orders</Link>
        </li>
        <li>
          <Link to='/families'>Families</Link>
        </li>
        <li>
          <Link to='/genera'>Genera</Link>
        </li> */}
      </ul>
    </div>
  )
}

export default Nav
