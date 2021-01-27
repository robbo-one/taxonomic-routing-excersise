import React from 'react'
import { Link } from 'react-router-dom'
import ranks from '../../data/ranks'
import species from '../../data/species'

const Species = (props) => {

  const id = props.match.params.id
  let spec = species.find(val => { return val.id == id})
  return (
    <div>
 
      <h1>{spec.name}</h1>
      <p>{spec.description}</p>
      <img src={spec.photo} alt="Arggghhh matey! Alas, there be no photos"></img>
      <br/>
      Kingdom:<Link to={`/rank/kingdoms/${spec.kingdom}`}>{spec.kingdom}</Link><br/>

      Phylum:<Link to={`/rank/phyla/${spec.phylum}`}>{spec.phylum}</Link><br/>

      Class:<Link to={`/rank/classes/${spec.class}`}>{spec.class}</Link><br/>
      Order:<Link to={`/rank/orders/${spec.order}`}>{spec.order}</Link><br/>
      Family:<Link to={`/rank/families/${spec.family}`}>{spec.family}</Link><br/>
      Genus: <Link to={`/rank/genera/${spec.genus}`}>{spec.genus}</Link><br/>

    </div>
  )
}

export default Species
