import React from 'react'
import ranks from '../../data/ranks'
import { Link } from 'react-router-dom'






function Classifications(props) {
  const rank = props.match.params.rank

  // const cls = ranks[rank].find(cls => ranks.name == rank)

  return(
    <div>
      <h2>{rank}</h2>
        <ul>
          {ranks[rank].map(cl => {
          return (

          <li key={cl.id}>
              <Link to='#'> {cl.name} </Link>
          </li>
          )
        })}
      </ul>
    </div>
  )

}

export default Classifications