import React from 'react'
import ranks from '../../data/ranks'
import { Link } from 'react-router-dom'

function Classifications (props) {

  const rank = props.match.params.rank
  const classes = ranks[rank]

  return (
    <div>
     {/* {console.log(findClass)} */}
      <h2>{rank}</h2>
      <ul>
        {classes.map(c => {
          return (
            <li key={c.id}>
              <Link to={`/rank/${rank}/${c.name}`}>{c.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Classifications
