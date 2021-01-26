import React from 'react'
import { Link } from 'react-router-dom'
import ranks from '../../data/ranks'

function Classifications (props) {
  const data = props.match.params.ranks

  return (
    <>
      <div>
        <h2>{data}</h2>
        <ul>
          {ranks[data].map(rank => {
            return (
              <li>
                <Link to={`/${data}/${rank.name}`}>{rank.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      
    </>
  )
}

export default Classifications
