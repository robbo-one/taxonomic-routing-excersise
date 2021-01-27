import React from 'react'
import species from '../../data/species'
import { Link } from 'react-router-dom'

function Species (props) {

  const id = props.match.params.id
  const findSpecies = species.find(spec => {
    return spec.id == id
  })



  return (
    <div>
      <h2>{findSpecies.name}</h2>
      <p>{findSpecies.description}</p>
      <img src={findSpecies.photo} alt={`photo of a ${findSpecies.name}`}/>
      <ul>
        <li>
          Kingdom: <Link to={`/rank/kingdoms/${findSpecies.kingdom}`}>{findSpecies.kingdom}</Link> 
          </li>
        <li>
          Phylum: <Link to={`/rank/phyla/${findSpecies.phylum}`}>{findSpecies.phylum}</Link>
          </li>
        <li>
          Class: <Link to={`/rank/classes/${findSpecies.class}`}>{findSpecies.class}</Link>
          </li>
        <li>
          Order: <Link to={`/rank/orders/${findSpecies.order}`}>{findSpecies.order}</Link>
          </li>
        <li>
          Family: <Link to={`/rank/families/${findSpecies.family}`}>{findSpecies.family}</Link>
          </li>
        <li>
          Genus: <Link to={`/rank/genera/${findSpecies.family}`}>{findSpecies.genus}</Link>
          </li>
      </ul>
    </div>
  )
}

export default Species
