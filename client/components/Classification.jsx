import React from 'react'
import ranks from '../../data/ranks'
import { Link } from 'react-router-dom'

function Classification (props) {
  const rank = props.match.params.rank
  const name = props.match.params.name
  const classes = ranks[rank]
  const findClass = classes.find(actualClass => {
    return actualClass.name == name
  })

  return (
    <div>
      <h2>{name}</h2>
      <p>
        {findClass.description}
      </p>
      <Link to={`${props.match.url}/species`}>Show species</Link>
    </div>
  )
}

export default Classification
