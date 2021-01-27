 
import React from 'react'
import { Link } from 'react-router-dom'
import rankData from '../../data/ranks'

const Ranks = (props) => {
  const rankName = props.match.params.rank//create var that matches id
 // console.log('Ranks', rankData[rankName])
  const classifications = rankData[rankName]//a list of ranks with classifications
  return (
    <div>
      <h1>ranks!</h1>
      <ul>
        { classifications.map(classification => {//mapping thru object, then creates link
          return (
            <li key={classification.id}>
              <Link to={`/${rankName}/${classification.name}`}>{classification.name}</Link>
            </li>
          )
        })}

      </ul>
    </div>
  )
}
export default Ranks