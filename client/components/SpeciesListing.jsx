import React from 'react'
import { Link } from 'react-router-dom'
import ranks from '../../data/ranks'
import species from '../../data/species'

const SpeciesListing = (props) => {


  const name = props.match.params.name
  const classification = props.match.params.rank


  return (
    <div>
   <ul>
    {species.map(val=> {if (val.kingdom == name) {
    return (<li>{val.name}</li>)
  }})}
</ul>
    </div>
  )
}

export default SpeciesListing
