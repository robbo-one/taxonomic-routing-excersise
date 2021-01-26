import React from 'react'
import { Link } from 'react-router-dom'
import rankData from '../../data/ranks'


console.log(Object.keys(rankData))

function Nav () {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/phyla'>Phyla</Link>
        </li>
        <li>
          <Link to='classes'>Classes</Link>
        </li>
        <li>
          <Link to='/orders'>Orders</Link>
        </li>
        <li>
          <Link to='/families'>Families</Link>
        </li>
        <li>
          <Link to='/genera'>Genera</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
