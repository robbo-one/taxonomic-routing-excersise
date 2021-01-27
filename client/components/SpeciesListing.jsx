import React from 'react'
import { Link } from 'react-router-dom'
import ranks from '../../data/ranks'
import species from '../../data/species'

const SpeciesListing = (props) => {


  const name = props.match.params.name
  const classification = props.match.params.rank


  return (
    <div>
      <h1>Species</h1>
   <ul>
    {species.map(val=> {
      
      if (Object.values(val).includes(name)){
        return <li>{val.name}</li>
      }
  
  })}
</ul>
    </div>
  )
}

export default SpeciesListing
