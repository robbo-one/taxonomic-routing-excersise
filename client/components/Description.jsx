import React from 'react'
import { Link } from 'react-router-dom'
import ranks from '../../data/ranks'

const Description = (props) => {

  const name = props.match.params.name
  const classification = props.match.params.rank


let thing = ranks[classification].find(val => val.name == name)

  return (
    <div>
      <h2>{thing.name}</h2>
      <ul>
      {thing.description}
      </ul>
      <Link to={`${props.match.url}/species`}>Show species</Link>

    </div>
  )
}

export default Description
