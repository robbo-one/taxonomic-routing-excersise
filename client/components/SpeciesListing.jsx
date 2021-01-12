import React from 'react'
import { Link } from 'react-router-dom'

import { singularOf } from '../utilities'
import withSpecies from '../withSpecies'

export function SpeciesListing ({ species, match }) {
  const { rank, name } = match.params
  const matches = species.filter(item => {
    return item[singularOf(rank)] === name
  })

  return (
    <div className='species-listing'>
      <h2>Species</h2>
      <ul>
        {matches.map((item, key) => {
          return <li key={key}><Link to={`/species/${item.id}`}>{item.name}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default withSpecies(SpeciesListing)
