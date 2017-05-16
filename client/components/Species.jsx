import React from 'react'
import {Link} from 'react-router-dom'

import species from '../../data/species'

const Species = ({match}) => {
  const id = Number(match.params.id)
  const details = species.filter(item => item.id === id)[0]

  return (
    <div className='species'>
      <h2>{details.name}</h2>
      <div className=''>
        <p>{details.description}</p>
        <img src={details.photo} />
      </div>
      <ul>
        <li>Kingdom: <Link to={`/rank/kingdoms/${details.kingdom}`}>{details.kingdom}</Link></li>
        <li>Phylum: <Link to={`/rank/phyla/${details.phylum}`}>{details.phylum}</Link></li>
        <li>Class: <Link to={`/rank/classes/${details.class}`}>{details.class}</Link></li>
        <li>Order: <Link to={`/rank/orders/${details.order}`}>{details.order}</Link></li>
        <li>Family: <Link to={`/rank/families/${details.family}`}>{details.family}</Link></li>
        <li>Genus: <Link to={`/rank/genera/${details.genus}`}>{details.genus}</Link></li>
      </ul>
    </div>
  )
}

export default Species
